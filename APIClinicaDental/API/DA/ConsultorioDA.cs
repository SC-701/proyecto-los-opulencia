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
                id = id
            });
            return resultado.FirstOrDefault();
        }

        public async Task<Guid> Agregar(ConsultorioRequest request)
        {
            string query = @"AgregarConsultorio";

            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = Guid.NewGuid(),
                nombre = request.nombre,
                ubicacion = request.ubicacion,
                idDoctor = request.idDoctor,
                idEstado = request.idEstado
            });

            return respuesta;
        }

        public async Task<Guid> Editar(Guid id, ConsultorioRequest request)
        {
            string query = @"EditarConsultorio";

            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = id,
                nombre = request.nombre,
                ubicacion = request.ubicacion,
                idDoctor = request.idDoctor,
                idEstado = request.idEstado
            });

            return respuesta;

        }

        public async Task<Guid> EditarEstado(Guid id, int estado)
        {
            string query = @"EditarConsultorioEstado";

            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = id,
                idEstado = estado
            });

            return respuesta;
        }

        public Task<Guid> Eliminar(Guid id)
        {

            string query = @"EliminarConsultorio";
            var respuesta = _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = id
            });

            return respuesta;

        }
    }
}
