using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;
using Microsoft.AspNetCore.Mvc;

namespace Abstracciones.Interface.API
{
    public interface ICitasController
    {

        public Task<IActionResult> ObtenerCitas();
        public Task<IActionResult> ObtenerCitas(Guid idCita);
        public Task<IActionResult> AgregarCitas(CitasRequest request);
        public Task<IActionResult> Editar(Guid id, CitasRequest request);
        public Task<IActionResult> EditarEstado(Guid id, int estado);
        public Task<IActionResult> Eliminar(Guid idCita);
        public Task<IActionResult> ObtenerTotalCitas();
        public Task<IActionResult> ObtenerCitasPendientes();
        public Task<IActionResult> ObtenerCitasCompletadas();
        public Task<IActionResult> ObtenerCitasCanceladas();
        public Task<IActionResult> ObtenerConteoCitasDiarias();



    }
}
