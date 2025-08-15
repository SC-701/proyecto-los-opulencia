using Autorizacion.Abstracciones.Flujo;
using Autorizacion.Abstracciones.DA;
using Autorizacion.Abstracciones.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Modelos;

namespace Autorizacion.Flujo
{
    public class AutorizacionFlujo : IAutorizacionFlujo
    {
        private ISeguridadDA _seguridadDA;

        public AutorizacionFlujo(ISeguridadDA seguridadDA)
        {
            _seguridadDA = seguridadDA;
        }

        public async Task<AdministrativoLoginResponse> ObtenerAdministrativo(string correoElectronico)
        {
            return await _seguridadDA.ObtenerAdministrativo(correoElectronico);
        }

        public async Task<AdministrativoRolResponse> ObtenerRolAdministrativo(string correoElectronico)
        {
            return await _seguridadDA.ObtenerRolAdministrativo(correoElectronico);
        }
    }
}
