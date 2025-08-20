using Abstracciones.Interface.DA;
using Abstracciones.Models;
using Dapper;
using Microsoft.Data.SqlClient;

namespace DA
{
    public class AdministrativoDA : IAdministrativoDA
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public AdministrativoDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio();
        }

        public async Task<IEnumerable<AdministrativoResponse>> ObtenerAdministrativos()
        {
            string query = @"ObtenerAdministrativos";
            var resultado = await _Sqlconexion.QueryAsync<AdministrativoResponse>(query);
            return resultado;
        }

        public async Task<AdministrativoResponse> ObtenerAdministrativos(Guid id)
        {
            string query = @"ObtenerAdministrativo";

            if (id == Guid.Empty) throw new Exception("No se encontró el administrativo con el ID proporcionado.");

            var resultado = await _Sqlconexion.QueryAsync<AdministrativoResponse>(query, new
            {
                idAdministrativo = id
            });

            return resultado.FirstOrDefault();
        }

        public async Task<Guid> Editar(Guid id, AdministrativoRequest request)
        {
            await VerificarExistenciaId(id);

            const string query = @"EditarAdministrativo";

            var passwordParametro = string.IsNullOrWhiteSpace(request.PasswordHash) ? null : request.PasswordHash;

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                idAdministrativo = id,
                nombre = request.Nombre,
                apellido = request.Apellido,
                email = request.Email,
                cedula = request.Cedula,
                telefono = request.Telefono,
                direccion = request.Direccion,
                fechaNacimiento = request.FechaNacimiento,
                idEstadoUsuario = request.IdEstadoUsuario,

                idRol = request.IdRol,
                passwordHash = passwordParametro,
                idEstadoAdministrativo = request.IdEstadoAdministrativo
            });

            return resultado;
        }

        public async Task<Guid> EditarEstado(Guid idAdministrativo, int idEstado)
        {
            await VerificarExistenciaId(idAdministrativo);

            string query = @"EditarAdministrativoEstado";
            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = idAdministrativo,
                idEstado = idEstado
            });
            return resultado;
        }

        public async Task<Guid> Eliminar(Guid idAdministrativo)
        {
            await VerificarExistenciaId(idAdministrativo);

            const string query = @"EliminarAdministrativo";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                idAdministrativo = idAdministrativo
            });

            return resultado;
        }

        public async Task<int> TotalAdministrativos()
        {
            string query = @"TotalAdministrativos";
            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);
            return resultado;
        }

        public async Task<int> TotalAdministadores()
        {
           
            string query = @"ObtenerAdministradores";
            var lista = await _Sqlconexion.QueryAsync<AdministrativoResponse>(query);
            return lista.Count();
        }

        public async Task<int> TotalRecepcionistas()
        {
            string query = @"ObtenerRecepcionistas";
            var lista = await _Sqlconexion.QueryAsync<AdministrativoResponse>(query);
            return lista.Count();
        }

        public async Task<int> AdministrativosInactivos()
        {
            string query = @"AdministrativosInactivos";
            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);
            return resultado;
        }

        #region HELPERS
        private async Task VerificarExistenciaId(Guid id)
        {
            AdministrativoResponse? resultado = await ObtenerAdministrativos(id) ??
                throw new Exception("No se encontró el administrativo con el ID proporcionado.");
        }
        #endregion
    }
}
