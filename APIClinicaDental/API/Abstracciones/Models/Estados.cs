using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
    public class Estados
    {
        public string descripcion { get; set; }
        [RegularExpression("^(A|I)$", ErrorMessage = "El estado solo puede ser 'A' o 'I'.")]
        public string estado { get; set; }

    }

    public class EstadosResponse : Estados
    {
        public int IdEstado { get; set; }

    }



}
