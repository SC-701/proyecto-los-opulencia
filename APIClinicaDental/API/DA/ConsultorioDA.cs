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



        public async Task<IEnumerable<ConsultorioResponse>> ObtenerConsultorio()
        {
            string query = @"ObtenerConsultorios";

            var resultado = await _Sqlconexion.QueryAsync<ConsultorioResponse>(query);

            return resultado;


        }


    }
}
