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
