using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;

namespace Abstracciones.Interface.API
{
    public interface IEstadosController
    {
        public Task<IActionResult> ObtenerEstados();
        public Task<IActionResult> ObtenerEstado(int id);
        public Task<IActionResult> AgregarEstado(Estados estado);
        public Task<IActionResult> EditarEstado(int id, Estados estado);
        public Task<IActionResult> EliminarEstado(int id);
    }
}
