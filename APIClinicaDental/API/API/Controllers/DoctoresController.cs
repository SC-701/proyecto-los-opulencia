using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Flujo;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctoresController : ControllerBase, IDoctorController
    {
        private readonly IDoctoresFlujo _doctoresFlujo;
        private ILogger<DoctoresController> _logger;

        public DoctoresController(IDoctoresFlujo doctoresFlujo, ILogger<DoctoresController> logger)
        {
            _doctoresFlujo = doctoresFlujo;
            _logger = logger;
        }
        [HttpPost]
        public async Task<IActionResult> AgregarDoctor([FromBody] DoctorRequest request)
        {
           var respuesta = await _doctoresFlujo.AgregarDoctor(request);
            return CreatedAtAction(nameof(ObtenerDoctores), new
            {
                id = respuesta
            });
        }

      

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar(Guid id, DoctorRequest request)
        {
           var respuesta = await _doctoresFlujo.Editar(id, request);
            return Ok(respuesta);
        }

        [HttpPut("EditarEstado/{idDoctor}/{idEstado}")]
        public async Task<IActionResult> EditarEstado(Guid idDoctor, int idEstado)
        {
            if (!await VerificarExistencias(idDoctor))
            {
                return NotFound(new
                {
                    message = "No se encontró el doctor con el ID proporcionado"
                });
            }
            var respuesta = await _doctoresFlujo.EditarEstado(idDoctor, idEstado);
            return Ok(new
            {
                response = respuesta,
                message = $"Realizado con éxito {idEstado}"
            });
        }

        [HttpDelete("{idDoctor}")]
        public async Task<IActionResult> Eliminar(Guid idDoctor)
        {
           var respuesta = await _doctoresFlujo.Eliminar(idDoctor);
           return NoContent();
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerDoctores()
        {
            var respuesta = await _doctoresFlujo.ObtenerDoctores();
            return Ok(respuesta);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerDoctores(Guid id)
        {
            var respuesta = await _doctoresFlujo.ObtenerDoctores(id);

            return Ok(respuesta);
        }

        [HttpGet("total")]
        public async Task<IActionResult> TotalDoctores()
        {
            var respuesta = await _doctoresFlujo.TotalDoctores();
            return Ok(respuesta);
        }

        [HttpGet("activos")]
        public async Task<IActionResult> DoctoresActivos()
        {
           var respuesta = await _doctoresFlujo.DoctoresActivos();
            return Ok(respuesta);
        }

        [HttpGet("inactivos")]
        public async Task<IActionResult> DoctoresInactivos()
        {
         var respuesta = await _doctoresFlujo.DoctoresInactivos();
            return Ok(respuesta);
        }


        [HttpGet("nuevos")]
        public async Task<IActionResult> DoctoresNuevos()
        {
           var respuesta = await _doctoresFlujo.DoctoresNuevos();
            return Ok(respuesta);
        }

        #region HELPERS 
        private async Task<bool> VerificarExistencias(Guid id)
        {
            var respuesta = await _doctoresFlujo.ObtenerDoctores(id);
            return respuesta != null;
        }

        #endregion
    }
}
