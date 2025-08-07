using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
    public class Consultorio
    {
        public string ? nombre { get; set; }
        public string ubicacion { get; set; }
    }

    public class  ConsultorioRequest : Consultorio
    {
        public Guid idDoctor { get; set; }
        public int idEstado { get; set; }

    }

    public class ConsultorioResponse : Consultorio
    {
        public Guid id { get; set; }
        public string ? doctor { get; set; }
        public string ? Estado { get; set; }
    }
}
