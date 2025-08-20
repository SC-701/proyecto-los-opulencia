using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;

namespace Flujo
{
    public class AdministrativoFlujo : IAdministrativoFlujo
    {
        private readonly IAdministrativoDA _administrativoDA;

        public AdministrativoFlujo(IAdministrativoDA administrativoDA)
        {
            _administrativoDA = administrativoDA;
        }

        public async Task<IEnumerable<AdministrativoResponse>> ObtenerAdministrativos()
        {
            return await _administrativoDA.ObtenerAdministrativos();
        }

        public async Task<AdministrativoResponse> ObtenerAdministrativos(Guid id)
        {
            return await _administrativoDA.ObtenerAdministrativos(id);
        }

        public async Task<Guid> Editar(Guid id, AdministrativoRequest request)
        {
            return await _administrativoDA.Editar(id, request);
        }

        public async Task<Guid> Eliminar(Guid idAdministrativo)
        {
            return await _administrativoDA.Eliminar(idAdministrativo);
        }

        public async Task<int> TotalAdministrativos()
        {
            return await _administrativoDA.TotalAdministrativos();
        }

        public async Task<int> TotalAdministadores()
        {
            return await _administrativoDA.TotalAdministadores();
        }

        public async Task<int> TotalRecepcionistas()
        {
            return await _administrativoDA.TotalRecepcionistas();
        }

        public async Task<int> AdministrativosInactivos()
        {
            return await _administrativoDA.AdministrativosInactivos();
        }

        public async Task<Guid> EditarEstado(Guid idAdministrativo, int idEstado)
        {
            return await _administrativoDA.EditarEstado(idAdministrativo, idEstado);
        }
    }
}
