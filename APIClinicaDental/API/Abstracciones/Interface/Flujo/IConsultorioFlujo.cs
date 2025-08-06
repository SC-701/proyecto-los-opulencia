using Abstracciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Interface.Flujo
{
    public interface IConsultorioFlujo
    {
        public Task<IEnumerable<ConsultorioResponse>> ObtenerConsultorios();
        public Task<ConsultorioResponse> ObtenerConsultorio(Guid id);
        public Task<Guid> Agregar(ConsultorioRequest request);
        public Task<Guid> Editar(Guid id, ConsultorioRequest request);
        public Task<Guid> Eliminar(Guid idConsultorio);
    }
}
