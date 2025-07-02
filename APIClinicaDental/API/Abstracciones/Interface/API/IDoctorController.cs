using Microsoft.AspNetCore.Mvc;


namespace Abstracciones.Interface.API
{
    public interface IDoctorController
    {
        public Task<IActionResult> ObtenerDoctores();
        public Task<IActionResult> ObtenerDoctores(Guid id);
    }
}
