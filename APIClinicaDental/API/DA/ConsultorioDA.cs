using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Interface.DA;
using Abstracciones.Models;
using Dapper;
using Microsoft.Data.SqlClient;

namespace DA
{
    public class ConsultorioDA : IConsultorioDA
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public ConsultorioDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio();
        }

        public Task<IEnumerable<ConsultorioResponse>> ObtenerConsultorios()
        {
            string query = @"ObtenerConsultorios";
            var resultado = _Sqlconexion.QueryAsync<ConsultorioResponse>(query);
            return resultado;

        }

        public async Task<ConsultorioResponse> ObtenerConsultorio(Guid id)
        {
            string query = @"ObtenerConsultorio";

            if (id == Guid.Empty) throw new Exception("No se encontró el consultorio");

            var resultado = await _Sqlconexion.QueryAsync<ConsultorioResponse>(query, new
            {
                idConsultorio = id
            });
            return resultado.FirstOrDefault();
        }

        public async Task<Guid> Agregar(ConsultorioRequest request)
        {
            string query = @"AgregarConsultorio";

            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                idConsultorio = Guid.NewGuid(),
                nombre = request.Nombre,
                ubicacion = request.Ubicacion,
                doctor = request.idDoctor,
                Estado = request.idEstado
            });

            return respuesta;
        }

        Task<Guid> IConsultorioDA.Editar(Guid id, ConsultorioRequest request)
        {
            throw new NotImplementedException();
        }

        Task<Guid> IConsultorioDA.Eliminar(Guid idConsultorio)
        {
            throw new NotImplementedException();
        }
    }
}
