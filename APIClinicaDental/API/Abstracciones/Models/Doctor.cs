
namespace Abstracciones.Models
{
    public class Doctor
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }    
        public string Email { get; set; }
        public int Cedula { get; set; }
        public int Telefono { get; set; }
        public string Direccion { get; set; }
        public DateTime FechaNacimiento { get; set; }
    }

    public class DoctorRequest : Doctor
    {
        public int IdEstadoUsuario { get; set; }
        public int IdEstadoDoctor { get; set; }
        public string Especialidad { get; set; }
        public string LicenciaProfesional { get; set; }
        public DateTime FechaInicio { get; set; }
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
