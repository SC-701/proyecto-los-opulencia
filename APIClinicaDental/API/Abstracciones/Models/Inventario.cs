using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Abstracciones.Models
{
    public class Inventario
    {
        [Required(ErrorMessage = "El nombre del producto es requerido")]
        public string Producto { get; set; } = string.Empty;

        [Required(ErrorMessage = "La descripción es requerida")]
        public string Descripcion { get; set; } = string.Empty;

        [Required(ErrorMessage = "La cantidad es requerida")]
        public int Cantidad { get; set; }

        [Required(ErrorMessage = "El estado es requerido")]
        public int IdEstado { get; set; }

        public DateTime? FechaVencimiento { get; set; }

        [Required(ErrorMessage = "La categoría es requerida")]
        public string Categoria { get; set; } = string.Empty;

        [Required(ErrorMessage = "La unidad es requerida")]
        public string Unidad { get; set; } = string.Empty;


    }

    public class InventarioRequest : Inventario
    {
        public bool FechaEsValida()
        {
            return !FechaVencimiento.HasValue || FechaVencimiento.Value.Date >= DateTime.Today;
        }
    }

    public class InventarioResponse : Inventario
    {
        public Guid IdInventario { get; set; }
        public string? Estado { get; set; }
    }

    // ----------------- CLASES PARA GRÁFICOS -----------------

    public class InventarioPorEstado
    {
        public int IdEstado { get; set; }
        public int Total { get; set; }
    }

    public class InventarioPorCategoria
    {
        public string Categoria { get; set; } = string.Empty;
        public int Total { get; set; }
    }
}
