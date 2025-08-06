using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;

namespace Abstracciones.Interface.Flujo
{
    public interface IInventarioFlujo
    {
        // CRUD básico
        public Task<IEnumerable<InventarioResponse>> ObtenerInventario();
        public Task<InventarioResponse> ObtenerInventario(Guid id);
        public Task<Guid> AgregarInventario(InventarioRequest request);
        public Task<Guid> Editar(Guid id, InventarioRequest request);
        public Task<Guid> EditarEstado(Guid id, int idEstado);
        public Task<Guid> Eliminar(Guid idInventario);
        public Task<int> ActualizarEstadosVencidos();

        // ---------- MÉTODOS PARA LAS CARDS DEL DASHBOARD ----------
        public Task<int> ContarTotalInsumos();                // Total de insumos
        public Task<int> ContarInsumosPorEstado(int estado);  // Por ejemplo: Agotado, Vencido, Por vencer

        // ---------- MÉTODOS PARA LOS GRÁFICOS DEL DASHBOARD ----------
        public Task<IEnumerable<InventarioPorEstado>> ConteoPorEstado();     // Pie chart: Estados
        public Task<IEnumerable<InventarioPorCategoria>> ConteoPorCategoria(); // Bar chart: Categorías
    }
}
