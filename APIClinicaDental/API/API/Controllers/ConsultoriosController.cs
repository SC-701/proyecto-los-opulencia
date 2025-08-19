using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Flujo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultoriosController : ControllerBase, IConsultorioController
    {
        private readonly IConsultorioFlujo _consultorioFlujo;
        private ILogger<ConsultoriosController> _logger;

        public ConsultoriosController(IConsultorioFlujo consultorioFlujo, ILogger<ConsultoriosController> logger)
        {
            _consultorioFlujo = consultorioFlujo;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Agregar([FromBody] ConsultorioRequest request)
        {
            var respuesta = await _consultorioFlujo.Agregar(request);
            return CreatedAtAction(nameof(ObtenerConsultorio), new { id = respuesta }, respuesta);
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerConsultorios()
        {
            var respuesta = await _consultorioFlujo.ObtenerConsultorios();
            return Ok(respuesta);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerConsultorio([FromRoute] Guid id)
        {
            if (id == Guid.Empty) return NotFound(new
            {
                message = "No se encontró el id"
            });

            var respuesta = await _consultorioFlujo.ObtenerConsultorio(id);

            if (respuesta == null) return NotFound(new
            {
                message = "No se encontró el consultorio"
            });

            return Ok(respuesta);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar([FromRoute] Guid id, [FromBody] ConsultorioRequest request)
        {
            if (!await VerificarExistencias(id)) return NotFound(new
            {
                message = "No se encontró el consultorio con el id proporcionado"
            });

            var respuesta = await _consultorioFlujo.Editar(id, request);
            return Ok(respuesta);
        }

        [HttpPut("EditarEstado/{id}/{estado}")]
        public async Task<IActionResult> EditarEstado([FromRoute] Guid id, [FromRoute] int estado)
        {
            if (!await VerificarExistencias(id)) return NotFound(new
            {
                message = "No se encontró el consultorio con el id proporcionado"
            });

            var respuesta = await _consultorioFlujo.EditarEstado(id, estado);
            return Ok(new
            {
                response = respuesta,
                estado = $"Realizado con éxito {estado}"
            });
        }

        [HttpDelete("{idConsultorio}")]
        public async Task<IActionResult> Eliminar([FromRoute] Guid idConsultorio)
        {
            if (!await VerificarExistencias(idConsultorio)) return NotFound(new
            {
                message = "No se encontró el consultorio con el id proporcionado"
            });

            var respuesta = await _consultorioFlujo.Eliminar(idConsultorio);
            return NoContent();
        }

        private async Task<bool> VerificarExistencias(Guid id)
        {
            var consultorio = await _consultorioFlujo.ObtenerConsultorio(id);
            return consultorio != null;
        }

    }
}
