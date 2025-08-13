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
        public async Task<IActionResult> AgregarServicio([FromBody]ServiciosRequest request)
        {
            var respuesta = await _servicioFlujo.AgregarServicio(request);

            return CreatedAtAction(nameof(ObtenerServicios), new
            {
                id = respuesta
            });

        }

        [HttpPut("EditarEstado/{id}/{estado}")]
        public async Task<IActionResult> EditarEstado([FromRoute]Guid id, [FromRoute]int estado)
        {
            var respuesta = await _servicioFlujo.EditarEstado(id, estado);

            return Ok(new
            {
                response = respuesta,
                estado = $"Realizado con existo {estado}"
            });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditarServicio([FromRoute]Guid id, [FromBody]ServiciosRequest request)
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
        public async Task<IActionResult> EliminarServicio([FromRoute] Guid idServicio)
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
        public async Task<IActionResult> ObtenerServicios([FromRoute] Guid id)
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
        [HttpGet("ObtenerServiciosActivos")]
        public async Task<IActionResult> ObtenerServiciosActivos()
        {
            var respuesta = await _servicioFlujo.ObtenerServiciosActivos();

            return Ok(respuesta);
        }
        [HttpGet("ObtenerServiciosInactivos")]
        public async Task<IActionResult> ObtenerServiciosInactivos()
        {
            var respuesta = await _servicioFlujo.ObtenerServiciosInactivos();

            return Ok(respuesta);
        }

        [HttpGet("ObtenerServiciosTotales")]
        public async Task<IActionResult> ObtenerServiciosTotales()
        {
            var respuesta = await _servicioFlujo.ObtenerServiciosTotales();

            return Ok(respuesta);
        }
        [HttpGet("ObtenerSumaCosto")]
        public async Task<IActionResult> ObtenerSumaCosto()
        {
            var respuesta = await _servicioFlujo.ObtenerSumaCosto();

            return Ok(respuesta);
        }
    }
}
