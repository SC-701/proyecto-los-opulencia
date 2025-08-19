using Abstracciones.API;
using Abstracciones.Flujo;
using Abstracciones.Modelos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

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

        [HttpGet("verificar")]
        [Authorize] 
        public async Task<IActionResult> ObtenerDelToken()
        {
            var email = User.FindFirstValue(System.Security.Claims.ClaimTypes.Email);
            if (string.IsNullOrWhiteSpace(email))
                return Unauthorized();     

            var resultado = await _administrativoFlujo.ObtenerAdministrativo(email);
            if (resultado == null)
                return NotFound();         

            return Ok(resultado);
        }

    }
}
