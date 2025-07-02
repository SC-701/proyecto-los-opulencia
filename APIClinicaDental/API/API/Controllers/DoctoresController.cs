using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
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
    }
}
