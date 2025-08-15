using Abstracciones.Reglas;
using Abstracciones.DA;
using Abstracciones.Modelos;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BC
{
    public class AutenticacionReglas : IAutenticacionBC
    {
        public IConfiguration _configuration;
        public IAdministrativoDA _administrativoDA;
        private AdministrativoLoginResponse _administrativo;

        public AutenticacionReglas(IConfiguration configuration, IAdministrativoDA administrativoDA)
        {
            _configuration = configuration;
            _administrativoDA = administrativoDA;
        }

        public async Task<Token> LoginAync(LoginBase login)
        {
            Token respuestaToken = new Token() { AccessToken = string.Empty, ValidacionExitosa = false };
            _administrativo = await _administrativoDA.ObtenerAdministrativo(login.CorreoElectronico);
            if (_administrativo == null)
                return respuestaToken;
            var resultadoVerificacionCredenciales = await VerificarHashContraseniaAsync(login);
            if (!resultadoVerificacionCredenciales)
                return respuestaToken;
            TokenConfiguracion tokenConfiguracion = _configuration.GetSection("Token").Get<TokenConfiguracion>();
            JwtSecurityToken token = await GenerarTokenJWT(login, tokenConfiguracion);
            respuestaToken.AccessToken = new JwtSecurityTokenHandler().WriteToken(token);
            respuestaToken.ValidacionExitosa = true;
            return respuestaToken;
        }

        private async Task<bool> VerificarHashContraseniaAsync(LoginBase login)
        {
            return (login != null && login.PasswordHash == _administrativo.PasswordHash);
        }

        private async Task<JwtSecurityToken> GenerarTokenJWT(LoginBase login, TokenConfiguracion tokenConfiguracion)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenConfiguracion.key));
            List<Claim> claims = await GenerarClaims();
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(tokenConfiguracion.Issuer, tokenConfiguracion.Audience, claims, expires: DateTime.Now.AddMinutes(tokenConfiguracion.Expires), signingCredentials: credentials);
            return token;
        }

        private async Task<List<Claim>> GenerarClaims()
        {
            List<Claim> claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.NameIdentifier, _administrativo.IdAdministrativo.ToString()));
            claims.Add(new Claim(ClaimTypes.Email, _administrativo.Email));
            return claims;
        }

        private async Task<RolesxUsuario> ObtenerPerfiles(LoginBase login)
        {
            return await _administrativoDA.ObtenerRolAdministrativo(login.CorreoElectronico);
        }

    }
}