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
    public class EstadosDA : IEstadosDA
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public EstadosDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio();
        }


        public async Task<int> AgregarEstado(Estados estado)
        {
            string query = @"AgregarEstado";

            var response = await _Sqlconexion.ExecuteScalarAsync<int>(query, new
            {
               descripcion = estado.descripcion,
               estado =  estado.estado
            });

            return response;
        }

        public async Task<int> EditarEstado(int id, Estados estado)
        {
            verficarMayorMenorID(id);

            await verificarExistencias(id);

            string query = @"EditarEstado";


            var response = await _Sqlconexion.ExecuteScalarAsync<int>(query, new
            {
                id = id,
                descripcion = estado.descripcion,
                estado = estado.estado
            });

            return response;

        }



        public async Task<int> EliminarEstado(int id)
        {
            verficarMayorMenorID(id);

            await verificarExistencias(id);

            string query = @"EliminarEstado";

            var response = await _Sqlconexion.ExecuteScalarAsync<int>(query, new
            {
                id = id,
            });

            return response;

        }

        public async Task<EstadosResponse> ObtenerEstado(int id)
        {
            verficarMayorMenorID(id);

           

            string query = @"ObtenerEstado";

            var resultado = await _Sqlconexion.QueryAsync<EstadosResponse>(query, new
            {
                id = id
            });

            return resultado.FirstOrDefault();

        }

        public async Task<IEnumerable<EstadosResponse>> ObtenerEstados()
        {
            string query = @"ObtenerEstados";

            var resultado = await _Sqlconexion.QueryAsync<EstadosResponse>(query);

            return resultado;
        }

        #region HELPERS
        private async Task verificarExistencias(int id)
        {
            var idExistente = await ObtenerEstado(id);

            if (idExistente == null) throw new Exception("No existe esa id");
        }

        private static void verficarMayorMenorID(int id)
        {
            if (id <= 0) throw new Exception("La id tiene que ser mayor a 0");
        }
        #endregion
    }
}
