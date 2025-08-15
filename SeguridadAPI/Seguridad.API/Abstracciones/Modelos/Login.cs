using System;
using System.ComponentModel.DataAnnotations;

namespace Abstracciones.Modelos
{
    public class LoginBase
    {
        [Required(ErrorMessage = "La contraseña es requerida")]
        public string PasswordHash { get; set; }

        [Required(ErrorMessage = "El correo electrónico es requerido")]
        [EmailAddress(ErrorMessage = "El correo electrónico no tiene un formato válido")]
        public string CorreoElectronico { get; set; }
    }

    public class Login : LoginBase
    {
        [Required]
        public Guid Id { get; set; }
    }
}
