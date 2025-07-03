using Abstracciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Interface.DA
{
    public interface IConsultorioDA
    {
        public Task<IEnumerable<ConsultorioResponse>> ObtenerConsultorio();

        public Task<ConsultorioResponse> ObtenerConsultorio(Guid id);

        public Task<Guid> AgregarConsultorio(ConsultorioRequest request);

        public Task<Guid> EditarConsultorio(Guid id, ConsultorioRequest request);

        public Task<Guid> EliminarConsultorio(Guid idConsultorio);
    }
}
