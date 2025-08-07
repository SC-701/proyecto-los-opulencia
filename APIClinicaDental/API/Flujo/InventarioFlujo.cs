using System.Runtime.InteropServices;
using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;

namespace Flujo
{
    public class InventarioFlujo : IInventarioFlujo
    {
        private readonly IInventarioDA _inventarioDA;

        public InventarioFlujo(IInventarioDA inventarioDA)
        {
            _inventarioDA = inventarioDA;
        }

        public async Task<Guid> AgregarInventario(InventarioRequest request)
        {
            return await _inventarioDA.AgregarInventario(request);
        }

        public async Task<Guid> Editar(Guid id, InventarioRequest request)
        {
            return await _inventarioDA.Editar(id, request);
        }

        public async Task<Guid> EditarEstado(Guid id, int idEstado)
        {
            return await _inventarioDA.EditarEstado(id, idEstado);
        }

        public async Task<Guid> Eliminar(Guid idInventario)
        {
            return await _inventarioDA.Eliminar(idInventario);
        }

        public async Task<IEnumerable<InventarioResponse>> ObtenerInventario()
        {
            return await _inventarioDA.ObtenerInventario();
        }

        public async Task<InventarioResponse> ObtenerInventario(Guid id)
        {
            return await _inventarioDA.ObtenerInventario(id);
        }

        public async Task<int> ActualizarEstadosVencidos()
        {
            return await _inventarioDA.ActualizarEstadosVencidos();
        }

        public async Task<int> ContarTotalInsumos()
        {
            return await _inventarioDA.ObtenerTotalInsumos();
        }

        public async Task<int> ContarInsumosPorEstado(int estado)
        {
            return await _inventarioDA.ContarInsumosPorEstado(estado);
        }

        public async Task<IEnumerable<InventarioPorEstado>> ConteoPorEstado()
        {
            return await _inventarioDA.ConteoPorEstado();
        }

        public async Task<IEnumerable<InventarioPorCategoria>> ConteoPorCategoria()
        {
            return await _inventarioDA.ConteoPorCategoria();
        }
    }
}
