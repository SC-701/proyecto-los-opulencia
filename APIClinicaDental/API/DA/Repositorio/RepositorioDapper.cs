using Abstracciones.Interface.DA;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;


namespace DA.Repositorio
{
    public class RepositorioDapper : IRepositorioDapper
    {
        private readonly IConfiguration _configuracion;
        private readonly SqlConnection _conexionDB;

        public RepositorioDapper(IConfiguration configuracion)
        {
            _configuracion = configuracion;
            _conexionDB = new SqlConnection(_configuracion.GetConnectionString("BD"));
        }


        public SqlConnection ObtenerRepositorio()
        {
            return _conexionDB;
        }
    }
}
