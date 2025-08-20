using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
    public class Servicios
    {
        [Required]
        public string ? nombre { get; set; }
        [Required]
        public string ? descripcion { get; set; }
        [Required]
        public decimal precio { get; set; }

    }

    public class  ServiciosRequest : Servicios
    {

        [Required]
        public int idEstado { get; set; }


    }


    public class ServiciosResponse : Servicios
    {
        public Guid id { get; set; }
        public string? Estado { get; set; }
    }


}
