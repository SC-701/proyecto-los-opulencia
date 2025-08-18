using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;

namespace Flujo
{
    public class PacientesFlujo : IPacienteFlujo
    {
        private readonly IPacientesDA _pacientesDA;

        public PacientesFlujo(IPacientesDA pacientesDA)
        {
            _pacientesDA = pacientesDA;
        }

        public async Task<Guid> AgregarPaciente(PacienteRequest request)
        {
            return await _pacientesDA.AgregarPaciente(request);
        }

        public async Task<Guid> Editar(Guid id, PacienteRequest request)
        {
            return await _pacientesDA.Editar(id, request);
        }

        public async Task<Guid> EditarEstado(Guid idPaciente, int idEstado)
        {
            return await _pacientesDA.EditarEstado(idPaciente, idEstado);
        }

        public async Task<Guid> Eliminar(Guid idPaciente)
        {
            return await _pacientesDA.Eliminar(idPaciente);
        }

        public async Task<IEnumerable<PacienteResponse>> ObtenerPacientes()
        {
            return await _pacientesDA.ObtenerPacientes();
        }

        public async Task<PacienteResponse> ObtenerPacientes(Guid id)
        {
            return await _pacientesDA.ObtenerPacientes(id);
        }

        public async Task<int> PacientesActivos()
        {
            return await _pacientesDA.PacientesActivos();
        }

        public async Task<int> PacientesInactivos()
        {
            return await _pacientesDA.PacientesInactivos();
        }

        public async Task<int> PacientesNuevos()
        {
            return await _pacientesDA.PacientesNuevos();
        }

        public async Task<int> TotalPacientes()
        {
            return await _pacientesDA.TotalPacientes();
        }
    }
}
