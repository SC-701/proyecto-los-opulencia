using System;
using System.ComponentModel.DataAnnotations;

namespace Abstracciones.Models
{
    public class Paciente
    {
        [Required(ErrorMessage = "El nombre del paciente es requerido")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "El apellido del paciente es requerido")]
        public string Apellido { get; set; }

        [EmailAddress(ErrorMessage = "El correo electrónico no tiene un formato válido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "La cédula del paciente es requerida")]
        [RegularExpression(@"^\d{9}$", ErrorMessage = "La cédula debe tener exactamente 9 dígitos")]
        public string Cedula { get; set; }

        [Required(ErrorMessage = "El teléfono del paciente es requerido")]
        [RegularExpression(@"^\d{8}$", ErrorMessage = "El teléfono debe tener exactamente 8 dígitos")]
        public string Telefono { get; set; }

        [Required(ErrorMessage = "La dirección del paciente es requerida")]
        public string Direccion { get; set; }

        [Required(ErrorMessage = "La fecha de nacimiento del paciente es requerida")]
        public DateTime FechaNacimiento { get; set; }
    }

    public class PacienteRequest : Paciente
    {
        [Required(ErrorMessage = "El estado de usuario es requerido")]
        public int IdEstadoUsuario { get; set; }

        [Required(ErrorMessage = "El estado del paciente es requerido")]
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
        public DateTime FechaCreacion { get; set; }
    }
}
