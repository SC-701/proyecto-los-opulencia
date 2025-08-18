using Abstracciones.Modelos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.API
{
    public interface IAdministrativoController
    {
        Task<IActionResult> PostAsync([FromBody] AdministrativoRequest administrativo);
        Task<IActionResult> ObtenerAdministrativo([FromBody] AdministrativoLoginResponse administrativo);

    }
}
