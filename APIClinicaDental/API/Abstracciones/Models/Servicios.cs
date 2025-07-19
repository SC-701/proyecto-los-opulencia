using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
    public class Servicios
    {
        public string ? nombre { get; set; }

        public string ? descripcion { get; set; }
        public decimal precio { get; set; }

    }

    public class  ServiciosRequest : Servicios
    {
        
        public int idEstado { get; set; }


    }


    public class ServiciosResponse : Servicios
    {
        public Guid id { get; set; }
        public string? Estado { get; set; }
    }


}
