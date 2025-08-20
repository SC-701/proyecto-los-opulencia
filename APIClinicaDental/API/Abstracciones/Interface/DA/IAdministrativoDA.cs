using Abstracciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Interface.DA
{
    public interface IAdministrativoDA
    {
        Task<IEnumerable<AdministrativoResponse>> ObtenerAdministrativos();
        Task<AdministrativoResponse> ObtenerAdministrativos(Guid id);

        Task<Guid> Editar(Guid id, AdministrativoRequest request);
        Task<Guid> Eliminar(Guid idAdministrativo);

        Task<int> TotalAdministrativos();
        Task<int> TotalAdministadores();
        Task<int> TotalRecepcionistas();
        Task<int> AdministrativosInactivos();

        Task<Guid> EditarEstado(Guid idAdministrativo, int idEstado);
    }
}
