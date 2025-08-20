using System;
using System.ComponentModel.DataAnnotations;

namespace Abstracciones.Models
{
    public class Administrativo
    {
        [Required(ErrorMessage = "El nombre del administrativo es requerido")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "El apellido del administrativo es requerido")]
        public string Apellido { get; set; }

        [EmailAddress(ErrorMessage = "El correo electrónico no tiene un formato válido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "La cédula del administrativo es requerida")]
        [RegularExpression(@"^\d{9}$", ErrorMessage = "La cédula debe tener exactamente 9 dígitos")]
        public string Cedula { get; set; }

        [Required(ErrorMessage = "El teléfono del administrativo es requerido")]
        [RegularExpression(@"^\d{8}$", ErrorMessage = "El teléfono debe tener exactamente 8 dígitos")]
        public string Telefono { get; set; }

        [Required(ErrorMessage = "La dirección del administrativo es requerida")]
        public string Direccion { get; set; }

        [Required(ErrorMessage = "La fecha de nacimiento del administrativo es requerida")]
        public DateTime FechaNacimiento { get; set; }
    }

    public class AdministrativoRequest : Administrativo
    {
        [Required(ErrorMessage = "El estado de usuario es requerido")]
        public int IdEstadoUsuario { get; set; }

        [Required(ErrorMessage = "El estado del administrativo es requerido")]
        public int IdEstadoAdministrativo { get; set; }

        [Required(ErrorMessage = "El rol del administrativo es requerido")]
        public int IdRol { get; set; }

        [RegularExpression(@"^(?=.*[A-Z])(?!.*[A-Z].*[A-Z]).{8}$", ErrorMessage = "La contraseña debe tener exactamente 8 caracteres y exactamente 1 mayúscula")]
        public string? PasswordHash { get; set; }
    }

    public class AdministrativoResponse : Administrativo
    {
        public Guid IdAdministrativo { get; set; }
        public string Rol { get; set; }
        public string Estado { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}
