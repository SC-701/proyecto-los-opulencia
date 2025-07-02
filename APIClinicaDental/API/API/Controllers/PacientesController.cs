using Abstracciones.Interface;
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
    }
}
