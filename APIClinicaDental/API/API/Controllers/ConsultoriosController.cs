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
    public class ConsultoriosController : ControllerBase, IConsultorioFlujo
    {
        private readonly IConsultorioFlujo _consultorioFlujo;
        private ILogger<ConsultoriosController> _logger;

        public ConsultoriosController(IConsultorioFlujo consultorioFlujo, ILogger<ConsultoriosController> logger)
        {
            _consultorioFlujo = consultorioFlujo;
            _logger = logger;
        }

        [HttpPost]
        public async Task<Guid> Agregar(ConsultorioRequest request)
        {
            return await _consultorioFlujo.Agregar(request);
        }

        [HttpGet]
        public async Task<IEnumerable<ConsultorioResponse>> ObtenerConsultorios()
        {
            return await _consultorioFlujo.ObtenerConsultorios();
        }

        [HttpGet("{id}")]
        public async Task<ConsultorioResponse> ObtenerConsultorio(Guid id)
        {
            return await _consultorioFlujo.ObtenerConsultorio(id);
        }

        [HttpPut("{id}")]
        public async Task<Guid> Editar(Guid id, ConsultorioRequest request)
        {
            return await _consultorioFlujo.Editar(id, request);
        }

        [HttpDelete("{idConsultorio}")]
        public async Task<Guid> Eliminar(Guid idConsultorio)
        {
            return await _consultorioFlujo.Eliminar(idConsultorio);
        }


    }
}
