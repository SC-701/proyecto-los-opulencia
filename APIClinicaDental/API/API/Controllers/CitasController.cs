using Abstracciones.Interface;
using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitasController : ControllerBase, ICitasController
    {
        private readonly ICitasFlujo _citasFlujo;
        private ILogger<CitasController> _logger;


        public CitasController(ICitasFlujo citasFlujo, ILogger<CitasController> logger)
                {
                    _citasFlujo = citasFlujo;
                    _logger = logger;
                }


        [HttpPost]
        public async Task<IActionResult> AgregarCitas([FromBody]CitasRequest request)
        {
            var respuesta = await _citasFlujo.AgregarCitas(request);

            return CreatedAtAction(nameof(ObtenerCitas), new
            {
                 idCitas = respuesta
            }
         );
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Editar([FromRoute]Guid id, [FromBody]CitasRequest request)
        {
           var respuesta = await _citasFlujo.Editar(id, request);
            return Ok(respuesta);
        }

        [HttpPut("EditarEstado/{id}/{estado}")]
        public async Task<IActionResult> EditarEstado([FromRoute]Guid id, [FromRoute]int estado)
        {
            var respuesta = await _citasFlujo.EditarEstado(id, estado);
            return Ok(new
            {
                response = respuesta,
                estado = $"Realizado con existo {estado}"
            });
        }

        [HttpDelete("{idCita}")]
        public async Task<IActionResult> Eliminar([FromRoute]Guid idCita)
        {
           var respuesta =  await _citasFlujo.Eliminar(idCita);
            return NoContent();
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerCitas()
        {
            var respuesta = await  _citasFlujo.ObtenerCitas();

            return Ok(respuesta);   
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerCitas([FromRoute]Guid id)
        {
            var respuesta = await _citasFlujo.ObtenerCitas(id);

            return Ok(respuesta);
        }

        [HttpGet]
        [Route("ObtenerTotalCitas")]
        public async Task<IActionResult> ObtenerTotalCitas()
        {
            var respuesta = await _citasFlujo.ObtenerTotalCitas();

            return Ok(respuesta);
        }
        [HttpGet]
        [Route("ObtenerCitasPendientes")]
        public async Task<IActionResult> ObtenerCitasPendientes()
        {
            var respuesta = await _citasFlujo.ObtenerCitasPendientes();

            return Ok(respuesta);
        }

        [HttpGet]
        [Route("ObtenerCitasCompletadas")]
        public async Task<IActionResult> ObtenerCitasCompletadas()
        {
            
            var respuesta = await _citasFlujo.ObtenerCitasCompletadas();

            return Ok(respuesta);

        }
    }
}
