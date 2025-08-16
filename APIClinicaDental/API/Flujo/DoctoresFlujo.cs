using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
namespace Flujo
{
    public class DoctoresFlujo : IDoctoresFlujo
    {
        private readonly IDoctoresDA _doctoresDA;
        public DoctoresFlujo(IDoctoresDA doctoresDA)
        {
            _doctoresDA = doctoresDA;
        }

        public async Task<Guid> AgregarDoctor(DoctorRequest request)
        {
            return await _doctoresDA.AgregarDoctor(request);
        }


        public async Task<Guid> Editar(Guid id, DoctorRequest request)
        {
           return await _doctoresDA.Editar(id, request);
        }

        public async Task<Guid> EditarEstado(Guid idDoctor, int idEstado)
        {
           return await _doctoresDA.EditarEstado(idDoctor, idEstado);
        }

        public async Task<Guid> Eliminar(Guid idDoctor)
        {
            return await _doctoresDA.Eliminar(idDoctor);
        }

        public async Task<IEnumerable<DoctorResponse>> ObtenerDoctores()
        {
            return await _doctoresDA.ObtenerDoctores();
        }
        public async Task<DoctorResponse> ObtenerDoctores(Guid id)
        {
            return await _doctoresDA.ObtenerDoctores(id);
        }
        public async Task<int> DoctoresActivos()
        {
           return await _doctoresDA.DoctoresActivos();
        }

        public async Task<int> DoctoresInactivos()
        {
           return await _doctoresDA.DoctoresInactivos();
        }

        public async Task<int> DoctoresNuevos()
        {
            return await _doctoresDA.DoctoresNuevos();
        }
        public async Task<int> TotalDoctores()
        {
           return await _doctoresDA.TotalDoctores();
        }
    }
}
