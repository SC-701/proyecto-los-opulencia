using Abstracciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Interface.DA
{
    public interface IFacturasDA
    {
        public Task<IEnumerable<FacturasResponse>> ObtenerFacturas();

        public Task<FacturasResponse> ObtenerFacturas(Guid id);

        public Task<Guid> AgregarFacturas(FacturasRequest request);

        public Task<Guid> Editar(Guid id, FacturasRequest request);

        public Task<Guid> EditarEstado(Guid id, int estado);

        public Task<Guid> Eliminar(Guid idFactura);

        public Task<int> ObtenerTotalFacturas();

        public Task<int> ObtenerFacturasPendientes();

        public Task<int> ObtenerFacturasCompletadas();
    }
}
