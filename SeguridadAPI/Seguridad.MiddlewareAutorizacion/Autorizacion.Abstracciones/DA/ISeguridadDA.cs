using Abstracciones.Modelos;
using Autorizacion.Abstracciones.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Autorizacion.Abstracciones.DA
{
    public interface ISeguridadDA
    {
        Task<AdministrativoLoginResponse> ObtenerAdministrativo(string correoElectronico);
        Task<AdministrativoRolResponse> ObtenerRolAdministrativo(string correoElectronico);
    }
}
