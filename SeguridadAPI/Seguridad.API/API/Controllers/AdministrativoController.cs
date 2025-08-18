using Abstracciones.API;
using Abstracciones.Flujo;
using Abstracciones.Modelos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AdministrativoController : ControllerBase
    {
        private readonly IAdministrativoFlujo _administrativoFlujo;

        public AdministrativoController(IAdministrativoFlujo administrativoFlujo)
        {
            _administrativoFlujo = administrativoFlujo;
        }

        [Authorize(Roles = "1")]
        [HttpPost("ObtenerInformacionAdministrativo")]
        public async Task<IActionResult> ObtenerAdministrativo([FromBody] CorreoRequest request)
        {
            var resultado = await _administrativoFlujo.ObtenerAdministrativo(request.Email);
            return Ok(resultado);
        }

        [AllowAnonymous]
        [HttpPost("RegistrarAdministrativo")]
        public async Task<IActionResult> PostAsync([FromBody] AdministrativoRequest administrativo)
        {
            var resultado = await _administrativoFlujo.CrearAdministrativo(administrativo);
            return CreatedAtAction(nameof(ObtenerAdministrativo), null, resultado);
        }

    }
}
