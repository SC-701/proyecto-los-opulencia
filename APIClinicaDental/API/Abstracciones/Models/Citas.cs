using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
    public class Citas
    {

        public DateTime fecha { get; set; }

        public TimeSpan hora { get; set; }

        public string ? notaMedica { get; set; }


    }
    

    public class CitasRequest : Citas
    {
        public Guid idServicio { get; set; }

        public Guid idDoctor { get; set; }

        public Guid idPaciente { get; set; }

        public Guid idConsultorio { get; set; }

        public int idEstado { get; set; }

    }

    public class CitasResponse : Citas
    {

        public Guid idCita { get; set; }

        public string ? Servicio { get; set; }

        public string ? Doctor { get; set; }

        public string ? Paciente { get; set; }

        public string ? Consultorio { get; set; }

        public string ? Estado { get; set; }


    }



}
