using System.Data.SqlClient;

namespace Autorizacion.Abstracciones.DA
{
    public interface IRepositorioDapper
    {
        SqlConnection ObtenerRepositorioDapper();
    }
}
