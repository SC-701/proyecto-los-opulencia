using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Flujo;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacturasController : ControllerBase, IFacturasController
    {
        private readonly IFacturasFlujo _facturasFlujo;
        private ILogger<FacturasController> _logger;

            public FacturasController (IFacturasFlujo facturasFlujo, ILogger<FacturasController> logger)
        {
            _facturasFlujo = facturasFlujo;
            _logger = logger;
                }

        [HttpPost]
        public async Task<IActionResult> AgregarFacturas([FromBody]FacturasRequest request)
        {
            var respuesta = await _facturasFlujo.AgregarFacturas(request);

            return CreatedAtAction(nameof(ObtenerFacturas), new
            {
                id = respuesta
            }
         );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar([FromRoute]Guid id, [FromBody] FacturasRequest request)
        {
            var respuesta = await _facturasFlujo.Editar(id, request);
            return Ok(respuesta);
        }



        [HttpPut("EditarEstado/{idFac}/{estado}")]
        public async Task<IActionResult> EditarEstado([FromRoute]Guid idFac, [FromRoute]int estado)
        {
            var respuesta = await _facturasFlujo.EditarEstado(idFac, estado);
            return Ok(new
            {
                response = respuesta,
                estado = $"Realizado con existo {estado}"
            });
        }



        [HttpDelete("{idFactura}")]
        public async Task<IActionResult> Eliminar([FromRoute] Guid idFactura)
        {
            var respuesta = await _facturasFlujo.Eliminar(idFactura);
            return NoContent();
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerFacturas()
        {
            var respuesta = await _facturasFlujo.ObtenerFacturas();

            return Ok(respuesta);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerFacturas([FromRoute] Guid id)
        {
            var respuesta = await _facturasFlujo.ObtenerFacturas(id);

            return Ok(respuesta);
        }


        [HttpGet]
        [Route("ObtenerFacturasCompletadas")]
        public async Task<IActionResult> ObtenerFacturasCompletadas()
        {
            var respuesta = await _facturasFlujo.ObtenerTotalFacturas();

            return Ok(respuesta);
        }


        [HttpGet]
        [Route("ObtenerFacturasPendientes")]
        public async Task<IActionResult> ObtenerFacturasPendientes()
        {
            var respuesta = await _facturasFlujo.ObtenerFacturasPendientes();

            return Ok(respuesta);
        }


        [HttpGet]
        [Route("ObtenerTotalFacturas")]
        public async Task<IActionResult> ObtenerTotalFacturas()
        {
            var respuesta = await _facturasFlujo.ObtenerTotalFacturas();

            return Ok(respuesta);
        }
    }
}
