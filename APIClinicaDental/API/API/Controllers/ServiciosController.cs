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
    public class ServiciosController : ControllerBase, IServicioController
    {
        private readonly IServicioFlujo _servicioFlujo;
        private ILogger<ServiciosController> _logger;

        public ServiciosController(IServicioFlujo servicioFlujo, ILogger<ServiciosController> logger)
        {
            _servicioFlujo = servicioFlujo;
            _logger = logger;
        }
        [HttpPost]
        public async Task<IActionResult> AgregarServicio(ServiciosRequest request)
        {
            var respuesta = await _servicioFlujo.AgregarServicio(request);

            return CreatedAtAction(nameof(ObtenerServicios), new
            {
                id = respuesta
            });

        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditarServicio([FromRoute]Guid id, ServiciosRequest request)
        {
            var respuesta = await _servicioFlujo.Editar(id, request);
            if (respuesta == Guid.Empty)
            {
                return NotFound(new
                {
                    message = "No se encontro el servicio con el id proporcionado"
                });
            }
            return Ok(respuesta);
        }
        [HttpDelete("{idServicio}")]
        public async Task<IActionResult> EliminarServicio(Guid idServicio)
        {
            var respuesta = await _servicioFlujo.Eliminar(idServicio);
            if (respuesta == Guid.Empty)
            {
                return NotFound(new
                {
                    message = "No se encontro el servicio con el id proporcionado"
                });
            }
            return NoContent();


        }
        [HttpGet]
        public async Task<IActionResult> ObtenerServicios()
        {
            var respuesta = await _servicioFlujo.ObtenerServicios();
            return Ok(respuesta);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerServicios(Guid id)
        {
            if (id == Guid.Empty) return NotFound(new
            {
                message = "No se encontro el id"
            });

            var respuesta = await _servicioFlujo.ObtenerServicios(id);

            if (respuesta == null) return NotFound(new
            {
                message = "No se encontro el servicio"
            });


            return Ok(respuesta);
        }
    }
}
