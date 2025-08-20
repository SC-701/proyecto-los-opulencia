using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;
using Azure.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Flujo
{
    public class FacturasFlujo : IFacturasFlujo
    {
        private readonly IFacturasDA _facturasDA;

        public FacturasFlujo (IFacturasDA facturasDA)
    {
            _facturasDA = facturasDA;
    }
 
        public async Task<Guid> AgregarFacturas(FacturasRequest request)
        {
            return await _facturasDA.AgregarFacturas(request);
        }

        public async Task<Guid> Editar(Guid id, FacturasRequest request)
        {
            return await _facturasDA.Editar(id, request);
                }

        public async Task<Guid> EditarEstado(Guid id, int estado)
        {
            return await  _facturasDA.EditarEstado(id, estado); 
  
        }

        public async Task<Guid> Eliminar(Guid idFactura)
        {
            return await _facturasDA.Eliminar(idFactura);
        }

        public async Task<IEnumerable<FacturaFecha>> ObtenerFacturaPorFecha()
        {
            return await _facturasDA.ObtenerFacturaPorFecha();
        }

        public async Task<IEnumerable<FacturasResponse>> ObtenerFacturas()
        {
            return await _facturasDA.ObtenerFacturas();
        }

        public async Task<FacturasResponse> ObtenerFacturas(Guid id)
        {
            return await _facturasDA.ObtenerFacturas(id);
        }

        public async Task<int> ObtenerFacturasPagadas()
        {
            return await _facturasDA.ObtenerFacturasPagadas();
        }

        public async Task<int> ObtenerFacturasPorPagar()
        {
            return await _facturasDA.ObtenerFacturasPorPagar();
        }

        public async Task<int> ObtenerIngresosMes()
        {
            return await _facturasDA.ObtenerIngresosMes();
        }

        public async Task<int> ObtenerTotalFacturas()
        {
            return await _facturasDA.ObtenerTotalFacturas();

        }

        public async Task<Guid> PagoFactura(Guid id, pagar pago)
        {
            return await _facturasDA.PagoFactura(id, pago);
        }
    }
}
