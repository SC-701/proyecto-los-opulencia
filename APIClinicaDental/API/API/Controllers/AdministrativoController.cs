using Abstracciones.Interface.API;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdministrativoController : ControllerBase, IAdministrativoController
    {
        private readonly IAdministrativoFlujo _administrativoFlujo;
        private readonly ILogger<AdministrativoController> _logger;

        public AdministrativoController(IAdministrativoFlujo administrativoFlujo, ILogger<AdministrativoController> logger)
        {
            _administrativoFlujo = administrativoFlujo;
            _logger = logger;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Editar(Guid id, [FromBody] AdministrativoRequest request)
        {
            var respuesta = await _administrativoFlujo.Editar(id, request);
            return Ok(respuesta);
        }

        [HttpPut("EditarEstado/{idAdministrativo}/{idEstado}")]
        public async Task<IActionResult> EditarEstado(Guid idAdministrativo, int idEstado)
        {
            if (!await VerificarExistencias(idAdministrativo))
            {
                return NotFound(new
                {
                    message = "No se encontró el administrativo con el ID proporcionado"
                });
            }

            var respuesta = await _administrativoFlujo.EditarEstado(idAdministrativo, idEstado);
            return Ok(new
            {
                response = respuesta,
                message = $"Realizado con éxito {idEstado}"
            });
        }

        [HttpDelete("{idAdministrativo}")]
        public async Task<IActionResult> Eliminar(Guid idAdministrativo)
        {
            var respuesta = await _administrativoFlujo.Eliminar(idAdministrativo);
            return NoContent();
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerAdministrativos()
        {
            var respuesta = await _administrativoFlujo.ObtenerAdministrativos();
            return Ok(respuesta);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ObtenerAdministrativos(Guid id)
        {
            var respuesta = await _administrativoFlujo.ObtenerAdministrativos(id);
            return Ok(respuesta);
        }

        [HttpGet("total")]
        public async Task<IActionResult> TotalAdministrativos()
        {
            var respuesta = await _administrativoFlujo.TotalAdministrativos();
            return Ok(respuesta);
        }

        [HttpGet("administadores")]
        public async Task<IActionResult> TotalAdministadores()
        {
            var respuesta = await _administrativoFlujo.TotalAdministadores();
            return Ok(respuesta);
        }

        [HttpGet("recepcionistas")]
        public async Task<IActionResult> TotalRecepcionistas()
        {
            var respuesta = await _administrativoFlujo.TotalRecepcionistas();
            return Ok(respuesta);
        }

        [HttpGet("inactivos")]
        public async Task<IActionResult> AdministrativosInactivos()
        {
            var respuesta = await _administrativoFlujo.AdministrativosInactivos();
            return Ok(respuesta);
        }

        #region HELPERS
        private async Task<bool> VerificarExistencias(Guid id)
        {
            var respuesta = await _administrativoFlujo.ObtenerAdministrativos(id);
            return respuesta != null;
        }
        #endregion
    }
}
