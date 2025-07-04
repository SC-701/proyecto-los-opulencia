using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;

namespace Abstracciones.Interface.DA
{
    public interface ICitasDA
    {
        public Task<IEnumerable<CitasResponse>> ObtenerCitas();

        public Task<CitasResponse> ObtenerCitas(Guid id);

        public Task<Guid>AgregarCitas(CitasRequest request);

        public Task<Guid>Editar(Guid id, CitasRequest request);

        public Task<Guid> EditarEstado(Guid id, int estado);

        public Task<Guid>Eliminar(Guid idCita);

        public Task<int> ObtenerTotalCitas();

        public Task<int> ObtenerCitasPendientes();

        public Task<int> ObtenerCitasCompletadas();

        public Task<int> ObtenerCitasCanceladas();
        public Task<int> ObtenerConteoCitasDiarias();




    }
}
