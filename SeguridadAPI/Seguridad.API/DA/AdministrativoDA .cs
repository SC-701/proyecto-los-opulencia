using Abstracciones.DA;
using Abstracciones.Modelos;
using DA.Repositorios;
using Dapper;
using System.Data.SqlClient;

namespace DA
{
    public class AdministrativoDA : IAdministrativoDA
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _sqlConnection;
        public AdministrativoDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _sqlConnection = _repositorioDapper.ObtenerRepositorioDapper();
        }

        public async Task<Guid> CrearAdministrativo(AdministrativoRequest administrativo)
        {
            var query = @"AgregarAdministrativo";

            var idEstadoUsuario = administrativo.IdEstadoUsuario == 0 ? 1 : administrativo.IdEstadoUsuario;
            var idEstadoAdministrativo = administrativo.IdEstadoAdministrativo == 0 ? 1 : administrativo.IdEstadoAdministrativo;

            var respuesta = await _sqlConnection.ExecuteScalarAsync<Guid>(query, new
            {

                idUsuario = Guid.NewGuid(),
                nombre = administrativo.Nombre,
                apellido = administrativo.Apellido,
                email = administrativo.Email,
                cedula = administrativo.Cedula,
                telefono = administrativo.Telefono,
                direccion = administrativo.Direccion,
                fechaNacimiento = administrativo.FechaNacimiento,
                idEstadoUsuario = idEstadoUsuario,

                idAdministrativo = Guid.NewGuid(),
                idRol = administrativo.IdRol,
                passwordHash = administrativo.PasswordHash,
                idEstadoAdministrativo = idEstadoAdministrativo
            });

            return respuesta;
        }

        public async Task<AdministrativoLoginResponse> ObtenerAdministrativo(string correoElectronico)
        {
            var query = @"ObtenerAdministrativoLogin";

            var respuesta = await _sqlConnection.QueryFirstOrDefaultAsync<AdministrativoLoginResponse>(
                query,
               new { CorreoElectronico = correoElectronico }
            );

            return respuesta;
        }

        public async Task<RolesxUsuario> ObtenerRolAdministrativo(string correoElectronico)
        {
            var query = @"ObtenerRolAdministrativo";

            var respuesta = await _sqlConnection.QueryFirstOrDefaultAsync<RolesxUsuario>(
                query,
                new
                {
                    CorreoElectronico = correoElectronico
                }
            );

            return respuesta;
        }
    }
}
