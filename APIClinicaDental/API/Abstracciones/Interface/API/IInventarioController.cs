using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;

namespace Abstracciones.Interface.API
{
    public interface IInventarioController
    {
        // CRUD básico
        public Task<IActionResult> ObtenerInventario();
        public Task<IActionResult> ObtenerInventario(Guid id);
        public Task<IActionResult> AgregarInventario(InventarioRequest request);
        public Task<IActionResult> Editar(Guid id, InventarioRequest request);
        public Task<IActionResult> EditarEstado(Guid id, int idEstado);
        public Task<IActionResult> Eliminar(Guid idInventario);
        public Task<IActionResult> ActualizarEstadosVencidos();

        // ---------- MÉTODOS PARA LAS CARDS DEL DASHBOARD ----------
        public Task<IActionResult> ContarTotalInsumos();                // Total de insumos
        public Task<IActionResult> ContarInsumosPorEstado(int estado); // Por ejemplo: Agotado, Vencido, Por vencer

        // ---------- MÉTODOS PARA LOS GRÁFICOS DEL DASHBOARD ----------
        public Task<IActionResult> ConteoPorEstado();     // Pie chart: Estados
        public Task<IActionResult> ConteoPorCategoria();  // Bar chart: Categorías
    }
}
