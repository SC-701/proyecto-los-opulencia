
namespace Abstracciones.Models
{
    public class Paciente
    {
        
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Email { get; set; }
        public int Cedula { get; set; }
        public int Telefono { get; set; }
        public string Direccion { get; set; }
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
