using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Interface.API
{
    public interface IFacturasController
    {
        public Task<IActionResult> ObtenerFacturas();
        public Task<IActionResult> ObtenerFacturas(Guid idFactura);
        public Task<IActionResult> AgregarFacturas(FacturasRequest request);
        public Task<IActionResult> Editar(Guid id, FacturasRequest request);
        public Task<IActionResult> EditarEstado(Guid id, int estado);
        public Task<IActionResult> Eliminar(Guid idFactura);
        public Task<IActionResult> ObtenerTotalFacturas();
        public Task<IActionResult> ObtenerFacturasPendientes();
        public Task<IActionResult> ObtenerFacturasCompletadas();

    }
}
