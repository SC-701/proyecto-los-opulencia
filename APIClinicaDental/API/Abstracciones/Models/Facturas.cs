using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
   public class Facturas
    {
        [Required(ErrorMessage = "La hora es requerida")]
        public DateTime fecha { get; set; }
        [Required(ErrorMessage = "El subtotal es requerido")]
        public decimal subtotal { get; set; }
        [Required(ErrorMessage = "El total es requerido")]
        public decimal total { get; set; }
    

    }

    public class FacturasRequest : Facturas
    {
        [Required(ErrorMessage = "El id del servicio es requerido")]
        public Guid idServicio { get; set; }
        [Required(ErrorMessage = "El id del doctor es requerido")]
        public Guid idDoctor { get; set; }
        [Required(ErrorMessage = "El id del estado es requerido")]
        public int idEstado { get; set; }
        [Required(ErrorMessage = "El id del paciente es requerido")]
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
