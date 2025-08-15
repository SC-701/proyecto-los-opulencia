using Autorizacion.Abstracciones.DA;
using Autorizacion.Abstracciones.Modelos;
using System.Data.SqlClient;
using Dapper;
using Abstracciones.Modelos;


namespace Autorizacion.DA
{
    public class SeguridadDA : ISeguridadDA
    {
        IRepositorioDapper _repositorioDapper;
        private SqlConnection _sqlConnection;

        public SeguridadDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _sqlConnection = repositorioDapper.ObtenerRepositorioDapper();
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

        public async Task<AdministrativoRolResponse> ObtenerRolAdministrativo(string correoElectronico)
        {
            var query = @"ObtenerRolAdministrativo";

            var respuesta = await _sqlConnection.QueryFirstOrDefaultAsync<AdministrativoRolResponse>(
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
