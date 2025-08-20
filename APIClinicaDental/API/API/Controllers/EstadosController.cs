using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstadosController : ControllerBase, IEstadosController
    {
        private readonly IEstadosFlujo _estadosFlujo;
        private ILogger<EstadosController> _logger;


        public EstadosController(IEstadosFlujo estadosFlujo, ILogger<EstadosController> logger)
        {
            _estadosFlujo = estadosFlujo;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> AgregarEstado([FromBody] Estados estado)
        {
            var respuesta = await _estadosFlujo.AgregarEstado(estado);
            return CreatedAtAction(nameof(ObtenerEstados), new
            {
                estado = respuesta
            });
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditarEstado([FromRoute]int id, [FromBody]Estados estado)
        {
            var respuesta = await _estadosFlujo.EditarEstado(id, estado);
            return Ok(respuesta);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarEstado([FromRoute] int id)
        {
            var respuesta = await _estadosFlujo.EliminarEstado(id);
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerEstado([FromRoute] int id)
        {
            if (id <= 0)
            {
                return BadRequest(new
                {
                    message = "el id debe ser 0 o mas"
                });
            }

            var respuesta = await _estadosFlujo.ObtenerEstado(id);

            if (respuesta == null)
            {
                return NotFound(new
                {
                    message = "No se encontro el estado con el id proporcionado"
                });
            }

            return Ok(respuesta);
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerEstados()
        {
            var respuesta = await _estadosFlujo.ObtenerEstados();

            return Ok(respuesta);
        }
    }
}
