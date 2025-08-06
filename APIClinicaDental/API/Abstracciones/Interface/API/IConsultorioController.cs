using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;


namespace Abstracciones.Interface.API
{
    public interface IConsultorioController
    {
        public Task<IActionResult> Agregar(ConsultorioRequest request);
        public Task<IActionResult> Editar(Guid id, ConsultorioRequest request);
        public Task<IActionResult> Eliminar(Guid idConsultorio);
        public Task<IActionResult> ObtenerConsultorios();
        public Task<IActionResult> ObtenerConsultorio(Guid id);

    }
}
