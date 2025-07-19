using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
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

        [HttpGet]
        public async Task<IActionResult> ObtenerConsultorio()
        {
            var respuesta = await _consultorioFlujo.ObtenerConsultorio();
            return Ok(respuesta);
        }
    }
}
