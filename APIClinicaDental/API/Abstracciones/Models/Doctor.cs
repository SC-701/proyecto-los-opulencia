using System;
using System.ComponentModel.DataAnnotations;

namespace Abstracciones.Models
{
    public class Doctor
    {
        [Required(ErrorMessage = "El nombre es requerido")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "El apellido es requerido")]
        public string Apellido { get; set; }

        public string Email { get; set; }

        [Required(ErrorMessage = "La cédula es requerida")]
        [RegularExpression(@"^\d{9}$", ErrorMessage = "La cédula debe tener exactamente 9 dígitos")]
        public string Cedula { get; set; }

        [Required(ErrorMessage = "El teléfono es requerido")]
        [RegularExpression(@"^\d{8}$", ErrorMessage = "El teléfono debe tener exactamente 8 dígitos")]
        public string Telefono { get; set; }

        [Required(ErrorMessage = "La dirección es requerida")]
        public string Direccion { get; set; }

        [Required(ErrorMessage = "La fecha de nacimiento es requerida")]
        public DateTime FechaNacimiento { get; set; }
    }

    public class DoctorRequest : Doctor
    {
        [Required(ErrorMessage = "El estado de usuario es requerido")]
        public int IdEstadoUsuario { get; set; }

        [Required(ErrorMessage = "El estado del doctor es requerido")]
        public int IdEstadoDoctor { get; set; }

        [Required(ErrorMessage = "La especialidad es requerida")]
        public string Especialidad { get; set; }

        [Required(ErrorMessage = "La licencia profesional es requerida")]
        public string LicenciaProfesional { get; set; }

        [Required(ErrorMessage = "La fecha de inicio es requerida")]
        public DateTime FechaInicio { get; set; }

        [Required(ErrorMessage = "El servicio es requerido")]
        public Guid IdServicio { get; set; }
    }

    public class DoctorResponse : Doctor
    {
        public Guid IdDoctor { get; set; }
        public string Especialidad { get; set; }
        public string LicenciaProfesional { get; set; }
        public DateTime FechaInicio { get; set; }
        public string Servicio { get; set; }
        public string Estado { get; set; }
    }
}
