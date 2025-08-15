using Abstracciones.Flujo;
using Abstracciones.DA;
using Abstracciones.Modelos;
namespace Flujo
{
    public class AdministrativoFlujo : IAdministrativoFlujo
    {
        private readonly IAdministrativoDA _administrativoDA;

        public AdministrativoFlujo(IAdministrativoDA administrativoDA)
        {
            _administrativoDA = administrativoDA;
        }

        public async Task<Guid> CrearAdministrativo(AdministrativoRequest administrativo)
        {
            return await _administrativoDA.CrearAdministrativo(administrativo);
        }

        public async Task<AdministrativoLoginResponse> ObtenerAdministrativo(string correoElectronico)
        {
            return await _administrativoDA.ObtenerAdministrativo(correoElectronico);
        }

   
    }
}
