using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;

namespace Abstracciones.Interface.DA
{
    public interface IPacientesDA
    {
        public Task<IEnumerable<PacienteResponse>> ObtenerPacientes();
        public Task<PacienteResponse> ObtenerPacientes(Guid id);
        public Task<Guid> AgregarPaciente(PacienteRequest request);
        public Task<Guid> Editar(Guid id, PacienteRequest request);
        public Task<Guid> Eliminar(Guid idPaciente);
    }
}
