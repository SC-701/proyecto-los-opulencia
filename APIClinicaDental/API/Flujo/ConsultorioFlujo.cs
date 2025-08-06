using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;

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

        Task<Guid> IConsultorioFlujo.Editar(Guid id, ConsultorioRequest request)
        {
            throw new NotImplementedException();
        }

        Task<Guid> IConsultorioFlujo.Eliminar(Guid idConsultorio)
        {
            throw new NotImplementedException();
        }
    }
}
