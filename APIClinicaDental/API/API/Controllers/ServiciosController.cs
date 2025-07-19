using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiciosController : ControllerBase, IServicioFlujo
    {
        private readonly IServicioFlujo _servicioFlujo;
        private ILogger<ServiciosController> _logger;

        public ServiciosController(IServicioFlujo servicioFlujo, ILogger<ServiciosController> logger)
        {
            _servicioFlujo = servicioFlujo;
            _logger = logger;
        }

        [HttpPost]
        public async Task<Guid> AgregarServicio(ServiciosRequest request)
        {
            return await _servicioFlujo.AgregarServicio(request);
        }
        [HttpPut("{id}")]
        public async Task<Guid> Editar(Guid id, ServiciosRequest request)
        {
            return await _servicioFlujo.Editar(id, request);
        }
        [HttpDelete("{idServicio}")]
        public async Task<Guid> Eliminar(Guid idServicio)
        {
            return await _servicioFlujo.Eliminar(idServicio);
        }
        [HttpGet]
        public async Task<IEnumerable<ServiciosResponse>> ObtenerServicios()
        {
            return await _servicioFlujo.ObtenerServicios();
        }
        [HttpGet("{id}")]
        public async Task<ServiciosResponse> ObtenerServicios(Guid id)
        {
            return await _servicioFlujo.ObtenerServicios(id);
        }
    }
}
