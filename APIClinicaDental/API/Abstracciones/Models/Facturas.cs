using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
   public class Facturas
    {
public DateTime fecha { get; set; }
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
    }

    public class FacturasRequest : Facturas
    {
        public Guid idServicio { get; set; }

        public Guid idDoctor { get; set; }

        public int idEstado { get; set; }

        public Guid idPaciente { get; set; }
    }

    public class FacturasResponse : Facturas
    {

        public Guid idFactura { get; set; }

        public string? Servicio { get; set; }

        public string? Doctor { get; set; }

        public string? Paciente { get; set; }

        public string? Estado { get; set; }


    }


}
