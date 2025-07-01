using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;

namespace Abstracciones.Interface.API
{
    public interface IPacientesController
    {
        public Task<IActionResult> ObtenerPacientes();
        public Task<IActionResult> ObtenerPacientes(Guid id);
        public Task<IActionResult> AgregarPaciente(PacienteRequest request);
        public Task<IActionResult> Editar(Guid id, PacienteRequest request);
        public Task<IActionResult> Eliminar(Guid idPaciente);
    }
}
