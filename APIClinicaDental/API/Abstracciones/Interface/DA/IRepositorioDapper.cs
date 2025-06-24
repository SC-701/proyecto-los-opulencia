using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;

namespace Abstracciones.Interface.DA
{
    public interface IRepositorioDapper
    {

        SqlConnection ObtenerRepositorio();


    }
}
