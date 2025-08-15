
using System.ComponentModel.DataAnnotations;


namespace Abstracciones.Modelos
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
        public int Cedula { get; set; }

        [Required(ErrorMessage = "El teléfono del administrativo es requerido")]
        public int Telefono { get; set; }

        [Required(ErrorMessage = "La dirección del administrativo es requerida")]
        public string Direccion { get; set; }

        [Required(ErrorMessage = "La fecha de nacimiento del administrativo es requerida")]
        public DateTime FechaNacimiento { get; set; }
    }

    //public class AdministrativoRequest : Administrativo
    //{
    //    public int IdEstadoUsuario { get; set; }
    //    public int IdEstadoAdministrativo { get; set; }

    //    [Required(ErrorMessage = "El rol del administrativo es requerido")]
    //    public int IdRol { get; set; }

    //    [Required(ErrorMessage = "La contraseña es requerida")]
    //    public string PasswordHash { get; set; }
    //}

    public class AdministrativoResponse : Administrativo
    {
        public Guid IdAdministrativo { get; set; }
        public string Rol { get; set; }
        public string Estado { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
   
    public class AdministrativoRolResponse
    {
        public int IdRol { get; set; }
        public string NombreRol { get; set; }
    }

    public class AdministrativoLoginResponse
    {
        public Guid IdAdministrativo { get; set; }
        public string Nombre { get; set; } 
        public string Apellido { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; } 
    }

}
