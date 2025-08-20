using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Interface.API
{
    public interface IAdministrativoController
    {
        Task<IActionResult> ObtenerAdministrativos();
        Task<IActionResult> ObtenerAdministrativos(Guid id);
        Task<IActionResult> Editar(Guid id, AdministrativoRequest request);
        Task<IActionResult> Eliminar(Guid idAdministrativo);
        Task<IActionResult> TotalAdministrativos();
        Task<IActionResult> TotalAdministadores();
        Task<IActionResult> TotalRecepcionistas();
        Task<IActionResult> AdministrativosInactivos();
        Task<IActionResult> EditarEstado(Guid idAdministrativo, int idEstado);

    }
}
