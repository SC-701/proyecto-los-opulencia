
using System.ComponentModel.DataAnnotations;

namespace Abstracciones.Models
{
    public class Paciente
    {

        [Required(ErrorMessage = "El nombre del paciente es requerido")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "El apellido del paciente es requerido")]
        public string Apellido { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "La cedula del paciente es requerido")]
        public int Cedula { get; set; }

        [Required(ErrorMessage = "El telefono del paciente es requerido")]
        public int Telefono { get; set; }

        [Required(ErrorMessage = "La direccion del paciente es requerido")]
        public string Direccion { get; set; }

        [Required(ErrorMessage = "La Fecha de Nacimiento del paciente es requerido")]
        public DateTime FechaNacimiento { get; set; }
    }

    public class PacienteRequest : Paciente
    {
        
        public int IdEstadoUsuario { get; set; } 
        public int IdEstadoPaciente { get; set; } 

        
        public string GrupoSangineo { get; set; }
        public string Alergias { get; set; }
        public string Observaciones { get; set; }
    }

    public class PacienteResponse : Paciente
    {
        
        public Guid IdPaciente { get; set; }
        public string GrupoSangineo { get; set; }
        public string Alergias { get; set; }
        public string Observaciones { get; set; }
        public string Estado { get; set; }
    }
}
