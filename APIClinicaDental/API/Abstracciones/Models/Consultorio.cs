using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
    public class Consultorio
    {
        public int Nombre { get; set; }
        public string Ubicacion { get; set; }
    }

    public class  ConsultorioRequest : Consultorio
    {
        public int idEstado { get; set; }
    }

    public class ConsultorioResponse : Consultorio
    {
        public Guid idConsultorio { get; set; }
        public string? Estado { get; set; }
    }
}
