using System.Runtime.InteropServices;
using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;

namespace Flujo
{
    public class CitasFlujo : ICitasFlujo
    {

        private readonly ICitasDA _citasDA;
        

        public CitasFlujo(ICitasDA citasDA)
        {
            _citasDA = citasDA;
        }


        public async Task<Guid> AgregarCitas(CitasRequest request)
        {
            return await _citasDA.AgregarCitas(request);
        }

        public async Task<Guid> Editar(Guid id, CitasRequest request)
        {
            return await _citasDA.Editar(id, request); 
        }

        public async Task<Guid> EditarEstado(Guid id, int estado)
        {
            return await _citasDA.EditarEstado(id, estado);
        }

        public async Task<Guid> Eliminar(Guid idCita)
        {
            return await _citasDA.Eliminar(idCita);
        }

        public async Task<IEnumerable<CitasResponse>> ObtenerCitas()
        {
            return await  _citasDA.ObtenerCitas();
        }

        public async Task<CitasResponse> ObtenerCitas(Guid id)
        {
            return await _citasDA.ObtenerCitas(id);
        }

        public async Task<int> ObtenerTotalCitas()
        {
            return await _citasDA.ObtenerTotalCitas();
        }

        public async Task<int> ObtenerCitasPendientes()
        {
            return await _citasDA.ObtenerCitasPendientes();
        }

        public async Task<int> ObtenerCitasCompletadas()
        {
            return await _citasDA.ObtenerCitasCompletadas();
        }

        public async Task<int> ObtenerCitasCanceladas()
        {
            return await _citasDA.ObtenerCitasCanceladas();
        }

        public async Task<int> ObtenerConteoCitasDiarias()
        {
            return await _citasDA.ObtenerConteoCitasDiarias();
        }
    }
}
