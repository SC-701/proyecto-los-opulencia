using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;

namespace Abstracciones.Interface.API
{
    public interface IServicioController
    {

        public Task<IActionResult> AgregarServicio(ServiciosRequest request);
        public Task<IActionResult> EditarServicio(Guid id, ServiciosRequest request);
        public Task<IActionResult> EliminarServicio(Guid idServicio);
        public Task<IActionResult> ObtenerServicios();
        public Task<IActionResult> ObtenerServicios(Guid id);
        public Task<IActionResult> EditarEstado(Guid id, int estado);
        public Task<IActionResult> ObtenerServiciosTotales();
        public Task<IActionResult> ObtenerServiciosActivos();
        public Task<IActionResult> ObtenerServiciosInactivos();
        public Task<IActionResult> ObtenerSumaCosto();
    }
}
