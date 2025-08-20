using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Flujo;
using Microsoft.AspNetCore.Mvc;
using System.Net.WebSockets;

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
        [Route("ObtenerFacturaPorFecha")]
        public async Task<IActionResult> ObtenerFacturaPorFecha()
        {
            var respuesta = await _facturasFlujo.ObtenerFacturaPorFecha();
            return Ok(respuesta);
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
        [Route("ObtenerFacturasPagadas")]
        public async Task<IActionResult> ObtenerFacturasPagadas()
        {
            var respuesta = await _facturasFlujo.ObtenerFacturasPagadas();

            return Ok(respuesta);
        }


        [HttpGet]
        [Route("ObtenerFacturasPorPagar")]
        public async Task<IActionResult> ObtenerFacturasPorPagar()
        {
            var respuesta = await _facturasFlujo.ObtenerFacturasPorPagar();

            return Ok(respuesta);
        }

        [HttpGet]
        [Route("ObtenerIngresosMes")]
        public async Task<IActionResult> ObtenerIngresosMes()
        {
            var respuestas = await _facturasFlujo.ObtenerIngresosMes();

            return Ok(respuestas);
        }

        [HttpGet]
        [Route("ObtenerTotalFacturas")]
        public async Task<IActionResult> ObtenerTotalFacturas()
        {
            var respuesta = await _facturasFlujo.ObtenerTotalFacturas();

            return Ok(respuesta);
        }

        [HttpPut]
        [Route("Pagofactura")]

        public async Task<IActionResult> PagoFactura(Guid id, [FromBody]pagar pago)
        {
            var ObtenerFacturaID = await _facturasFlujo.ObtenerFacturas(id);
            var total = ObtenerFacturaID.total;
            if (pago.pago <= 0) return BadRequest(new
            {
                pago = "El pago no puede ser menor o igual a  0"
            });

            if (pago.pago > total) return BadRequest(new
            {
                pago = "El pago no puede ser mayor al total"
            });

            var respuesta = await _facturasFlujo.PagoFactura(id, pago);



            return Ok(respuesta);

        }


    }
}
