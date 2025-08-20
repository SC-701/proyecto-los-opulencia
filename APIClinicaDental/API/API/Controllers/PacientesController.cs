using Abstracciones.Interface;
using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Flujo;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase, IPacientesController
    {
        private readonly IPacienteFlujo _pacientesFlujo;
        private ILogger<PacientesController> _logger;

        public PacientesController(IPacienteFlujo pacientesFlujo, ILogger<PacientesController> logger)
        {
            _pacientesFlujo = pacientesFlujo;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> AgregarPaciente([FromBody] PacienteRequest request)
        {
            var respuesta = await _pacientesFlujo.AgregarPaciente(request);

            return CreatedAtAction(nameof(ObtenerPacientes), new
            {
                id = respuesta
            }
         );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar([FromRoute]Guid id,[FromBody]PacienteRequest request)
        {
            var respuesta = await _pacientesFlujo.Editar(id ,request);
            return Ok(respuesta);
        }

       
        [HttpPut("EditarEstado/{idPaciente}/{idEstado}")]
        public async Task<IActionResult> EditarEstado([FromRoute] Guid idPaciente, [FromRoute] int idEstado)
        {
            if (!await VerificarExistencias(idPaciente))
            {
                return NotFound(new
                {
                    message = "No se encontró el paciente con el ID proporcionado"
                });
            }

            var respuesta = await _pacientesFlujo.EditarEstado(idPaciente, idEstado);

            return Ok(new
            {
                response = respuesta,
                message = $"Realizado con exito {idEstado}"
            });
        }

        
        [HttpDelete("{idPaciente}")]
        public async Task<IActionResult> Eliminar([FromRoute] Guid idPaciente)
        {
            var respuesta = await _pacientesFlujo.Eliminar(idPaciente);
            return NoContent();
        }

       
        [HttpGet]
        public async Task<IActionResult> ObtenerPacientes()
        {
            var respuesta = await _pacientesFlujo.ObtenerPacientes();
            return Ok(respuesta);
        }

       
        [HttpGet("{id}")]
        public  async Task<IActionResult> ObtenerPacientes([FromRoute] Guid id)
        {
            var respuesta = await _pacientesFlujo.ObtenerPacientes(id);

            return Ok(respuesta);
        }

 
        [HttpGet("activos")]
        public async Task<IActionResult> PacientesActivos()
        {
            var respuesta = await _pacientesFlujo.PacientesActivos();
            return Ok(respuesta);
        }

        
        [HttpGet("inactivos")]
        public async Task<IActionResult> PacientesInactivos()
        {
            var respuesta = await _pacientesFlujo.PacientesInactivos();
            return Ok(respuesta);
        }

       
        [HttpGet("nuevos")]
        public async Task<IActionResult> PacientesNuevos()
        {
            var respuesta = await _pacientesFlujo.PacientesNuevos();
            return Ok(respuesta);
        }

        [HttpGet("total")]
        public async Task<IActionResult> TotalPacientes()
        {
           var respuesta = await _pacientesFlujo.TotalPacientes();
            return Ok(respuesta);
        }



        #region HELPERS 
        private async Task<bool> VerificarExistencias(Guid id)
        {
            var respuesta = await _pacientesFlujo.ObtenerPacientes(id);
            return respuesta != null;
        }

        #endregion
    }
}
