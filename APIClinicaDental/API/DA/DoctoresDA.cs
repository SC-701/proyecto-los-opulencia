using Abstracciones.Interface.DA;
using Abstracciones.Models;
using Dapper;
using Microsoft.Data.SqlClient;

namespace DA
{
    public class DoctoresDA : IDoctoresDA
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public DoctoresDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio(); ;
        }

        public Task<Guid> AgregarDoctor(DoctorRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<Guid> Editar(Guid id, DoctorRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<Guid> Eliminar(Guid idDoctor)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<DoctorResponse>> ObtenerDoctores()
        {
            string query = @"ObtenerDoctores";
            var resultado = await _Sqlconexion.QueryAsync<DoctorResponse>(query);

            return resultado;
        }

        public async Task<DoctorResponse> ObtenerDoctores(Guid id)
        {
            string query = @"ObtenerDoctor";

            if (id == Guid.Empty) throw new Exception("No se encontró el doctor con el ID proporcionado.");

            var resultado = await _Sqlconexion.QueryAsync<DoctorResponse>(query, new
            {
                idDoctor = id
            });

            return resultado.FirstOrDefault();
        }

        #region HELPERS
        private async Task VerificarExistenciaId(Guid id)
        {
            DoctorResponse? resultado = await ObtenerDoctores(id) ??
                throw new Exception("No se encontró el doctor con el ID proporcionado.");
        }
        #endregion
    }
}
