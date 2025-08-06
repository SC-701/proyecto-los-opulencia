using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;

namespace Abstracciones.Interface.DA
{
    public interface IInventarioDA
    {
        public Task<IEnumerable<InventarioResponse>> ObtenerInventario();
        public Task<InventarioResponse> ObtenerInventario(Guid idInventario);
        public Task<Guid> AgregarInventario(InventarioRequest request);
        public Task<Guid> Editar(Guid idInventario, InventarioRequest request);
        public Task<Guid> EditarEstado(Guid idInventario, int idEstado);
        public Task<Guid> Eliminar(Guid idInventario);
        public Task<int> ActualizarEstadosVencidos();

        // ---------- MÉTODOS PARA LOS CARDS DEL DASHBOARD ----------
        public Task<int> ObtenerTotalInsumos();              // Card: Total de insumos
        public Task<int> ContarInsumosPorEstado(int estado); // Card: Estado específico (Ej: Agotado, Vencido, Por vencer)

        // ---------- MÉTODOS PARA LOS GRÁFICOS DEL DASHBOARD ----------
        public Task<IEnumerable<InventarioPorEstado>> ConteoPorEstado();     // Pie chart: Estados
        public Task<IEnumerable<InventarioPorCategoria>> ConteoPorCategoria(); // Bar chart: Categorías

        
        
    }
}
