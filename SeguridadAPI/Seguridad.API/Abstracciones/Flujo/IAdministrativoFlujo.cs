using Abstracciones.Modelos;

namespace Abstracciones.Flujo
{
    public interface IAdministrativoFlujo
    {
        Task<Guid> CrearAdministrativo(AdministrativoRequest administrativo);

        Task<AdministrativoLoginResponse> ObtenerAdministrativo(string correoElectronico);


    }
}
