using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Azure.Core;

namespace Flujo
{
    public class ConsultorioFlujo : IConsultorioFlujo
    {

        private readonly IConsultorioDA _consultorioDA;

        public ConsultorioFlujo(IConsultorioDA consultorioDA)
        {
            _consultorioDA = consultorioDA;
        }

        public async Task<IEnumerable<ConsultorioResponse>> ObtenerConsultorios()
        {
            return await _consultorioDA.ObtenerConsultorios();
        }

        public async Task<ConsultorioResponse> ObtenerConsultorio(Guid id)
        {
            return await _consultorioDA.ObtenerConsultorio(id);
        }

        public async Task<Guid> Agregar(ConsultorioRequest request)
        {
            return await _consultorioDA.Agregar(request);
        }

        public async Task<Guid> EditarEstado(Guid id, int estado)
        {
            return await _consultorioDA.EditarEstado(id, estado);
        }

        public async Task<Guid> Editar(Guid id, ConsultorioRequest request)
        {
            return await _consultorioDA.Editar(id, request);
        }

        public async Task<Guid> Eliminar(Guid id)
        {
            return await _consultorioDA.Eliminar(id);
        }
    }
}
