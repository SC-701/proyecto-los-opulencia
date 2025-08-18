using Autorizacion.Abstracciones.Flujo;
using Autorizacion.Abstracciones.Modelos;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Modelos;

namespace Autorizacion.Middleware
{
    public class ClaimsPerfiles
    {

        private readonly RequestDelegate _next;
        private readonly IConfiguration _configuration;
        private IAutorizacionFlujo _autorizacionFlujo;

        public ClaimsPerfiles(RequestDelegate next, IConfiguration configuration)
        {
            _next = next;
            _configuration = configuration;
        }

        public async Task InvokeAsync(HttpContext httpContext, IAutorizacionFlujo autorizacionFlujo)
        { 
        _autorizacionFlujo = autorizacionFlujo;
            ClaimsIdentity appIdentity = await verificarAutorizacion(httpContext);
            httpContext.User.AddIdentity(appIdentity);
            await _next(httpContext);
        }

        private async Task<ClaimsIdentity> verificarAutorizacion(HttpContext httpContext)
        {
            var claims = new List<Claim>();
            if (httpContext.User != null && httpContext.User.Identity.IsAuthenticated)
            {
                await ObtenerPerfiles(httpContext, claims);
            }

            var baseIdentity = httpContext.User.Identities.FirstOrDefault(i => i.IsAuthenticated);
            var appIdentity = new ClaimsIdentity(
                claims,
                baseIdentity?.AuthenticationType ?? "Bearer",
                baseIdentity?.NameClaimType ?? ClaimTypes.Name,
                baseIdentity?.RoleClaimType ?? ClaimTypes.Role
            );

            return appIdentity;
        }


        private async Task ObtenerPerfiles(HttpContext httpContext, List<Claim> claims)
        {
            var rol = await obtenerRolAdministrativo(httpContext);
            if (rol != null)
            {
                claims.Add(new Claim(ClaimTypes.Role, rol.NombreRol ?? rol.IdRol.ToString()));
            }
        }


        private async Task<AdministrativoRolResponse> obtenerRolAdministrativo(HttpContext httpContext)
        {
            var email = httpContext.User.Claims
                           .FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;

            if (string.IsNullOrEmpty(email))
                return null;

            return await _autorizacionFlujo.ObtenerRolAdministrativo(email);
        }

    }
    public static class ClaimsUsuarioMiddlewareExtensions
    {
        public static IApplicationBuilder AutorizacionClaims(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ClaimsPerfiles>();
        }
    }
}
