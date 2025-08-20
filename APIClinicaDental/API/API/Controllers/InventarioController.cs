using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventarioController : ControllerBase, IInventarioController
    {
        private readonly IInventarioFlujo _inventarioFlujo;
        private readonly ILogger<InventarioController> _logger;

        public InventarioController(IInventarioFlujo inventarioFlujo, ILogger<InventarioController> logger)
        {
            _inventarioFlujo = inventarioFlujo;
            _logger = logger;
        }

        // ------------------- CRUD BÁSICO -------------------

        [HttpGet]
        public async Task<IActionResult> ObtenerInventario()
        {
            var respuesta = await _inventarioFlujo.ObtenerInventario();
            return Ok(respuesta);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerInventario([FromRoute] Guid id)
        {
            if (id == Guid.Empty) return NotFound(new { message = "Id inválido" });

            var respuesta = await _inventarioFlujo.ObtenerInventario(id);
            if (respuesta == null) return NotFound(new { message = "No se encontró el inventario" });

            return Ok(respuesta);
        }

        [HttpPost]
        public async Task<IActionResult> AgregarInventario([FromBody] InventarioRequest request)
        {
            
            if (!request.FechaEsValida())
                return BadRequest(new { message = "La fecha de vencimiento no puede ser anterior a hoy." });

            
            if (request.IdEstado == 13)
                return BadRequest(new { message = "No se puede crear un item con estado Vencido." });

            var respuesta = await _inventarioFlujo.AgregarInventario(request);
            return CreatedAtAction(nameof(ObtenerInventario), new { id = respuesta });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar([FromRoute] Guid id, [FromBody] InventarioRequest request)
        {
            if (!await VerificarExistencias(id))
                return NotFound(new { message = "No se encontró el inventario" });

            
            if (!request.FechaEsValida())
                return BadRequest(new { message = "La fecha de vencimiento no puede ser anterior a hoy." });

            

            var respuesta = await _inventarioFlujo.Editar(id, request);
            return Ok(respuesta);
        }

        [HttpPut("EditarEstado/{id}/{estado}")]
        public async Task<IActionResult> EditarEstado([FromRoute] Guid id, [FromRoute] int estado)
        {
            if (!await VerificarExistencias(id))
                return NotFound(new { message = "No se encontró el inventario" });

            var respuesta = await _inventarioFlujo.EditarEstado(id, estado);
            return Ok(new { response = respuesta, estado = $"Editado correctamente a estado {estado}" });
        }

        [HttpDelete("{idInventario}")]
        public async Task<IActionResult> Eliminar([FromRoute] Guid idInventario)
        {
            if (!await VerificarExistencias(idInventario))
                return NotFound(new { message = "No se encontró el inventario" });

            var respuesta = await _inventarioFlujo.Eliminar(idInventario);
            return NoContent();
        }

        [HttpPut("ActualizarEstadosVencidos")]
        public async Task<IActionResult> ActualizarEstadosVencidos()
        {
            var respuesta = await _inventarioFlujo.ActualizarEstadosVencidos();
            return Ok(new { modificados = respuesta });
        }

        // ------------------- CARDS DEL DASHBOARD -------------------

        [HttpGet("ContarTotalInsumos")]
        public async Task<IActionResult> ContarTotalInsumos()
        {
            var total = await _inventarioFlujo.ContarTotalInsumos();
            return Ok(total);
        }

        [HttpGet("ContarInsumosPorEstado/{estado}")]
        public async Task<IActionResult> ContarInsumosPorEstado([FromRoute] int estado)
        {
            var total = await _inventarioFlujo.ContarInsumosPorEstado(estado);
            return Ok(total);
        }

        // ------------------- GRÁFICOS DEL DASHBOARD -------------------

        [HttpGet("ConteoPorEstado")]
        public async Task<IActionResult> ConteoPorEstado()
        {
            var datos = await _inventarioFlujo.ConteoPorEstado();
            return Ok(datos);
        }

        [HttpGet("ConteoPorCategoria")]
        public async Task<IActionResult> ConteoPorCategoria()
        {
            var datos = await _inventarioFlujo.ConteoPorCategoria();
            return Ok(datos);
        }

        private async Task<bool> VerificarExistencias(Guid id)
        {
            var inventario = await _inventarioFlujo.ObtenerInventario(id);
            return inventario != null;
        }
    }
}
