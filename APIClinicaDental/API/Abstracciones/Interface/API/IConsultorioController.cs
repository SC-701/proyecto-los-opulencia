using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Interface.API
{
    public interface IConsultorioController
    {
        public Task<IActionResult> ObtenerConsultorio();

        public Task<IActionResult> ObtenerConsultorio(Guid idConsultorio);

        public Task<IActionResult> AgregarConsultorio(ConsultorioRequest request);
        
        public Task<IActionResult> EditarConsultorio(Guid id, ConsultorioRequest request);
        
        public Task<IActionResult> EliminarConsultorio(Guid idConsultorio);

    }
}
