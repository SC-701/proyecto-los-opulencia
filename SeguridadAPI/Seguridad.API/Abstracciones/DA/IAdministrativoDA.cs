using Abstracciones.Modelos;

namespace Abstracciones.DA
{
    public interface IAdministrativoDA
    {
        Task<AdministrativoLoginResponse> ObtenerAdministrativo(string correoElectronico);

        Task<RolesxUsuario> ObtenerRolAdministrativo(string correoElectronico);

        Task<Guid> CrearAdministrativo(AdministrativoRequest administrativo);
    }
}
