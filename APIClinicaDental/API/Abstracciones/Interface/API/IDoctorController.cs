using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;


namespace Abstracciones.Interface.API
{
    public interface IDoctorController
    {
        public Task<IActionResult> ObtenerDoctores();
        public Task<IActionResult> ObtenerDoctores(Guid id);

        public Task<IActionResult> AgregarDoctor(DoctorRequest request);
        public Task<IActionResult> Editar(Guid id, DoctorRequest request);
        public Task<IActionResult> Eliminar(Guid idDoctor);


    }
}
