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

        public Task<Guid> AgregarDoctor(DoctorRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<Guid> Editar(Guid id, DoctorRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<Guid> Eliminar(Guid idDoctor)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<DoctorResponse>> ObtenerDoctores()
        {
            return await _doctoresDA.ObtenerDoctores();
        }
        public async Task<DoctorResponse> ObtenerDoctores(Guid id)
        {
            return await _doctoresDA.ObtenerDoctores(id);
        }
    }
}
