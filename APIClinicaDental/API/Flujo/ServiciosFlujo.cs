using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Interface.DA;
using Abstracciones.Interface.Flujo;
using Abstracciones.Models;

namespace Flujo
{
    public class ServiciosFlujo : IServicioFlujo
    {
        private readonly IServicioDA _servicioDA;

        public ServiciosFlujo(IServicioDA servicioDA)
        {
            _servicioDA = servicioDA;
        }   

        public async Task<Guid> AgregarServicio(ServiciosRequest request)
        {
            return await _servicioDA.AgregarServicio(request); 
        }

        public async Task<Guid> Editar(Guid id, ServiciosRequest request)
        {
            return await _servicioDA.Editar(id, request);
        }

        public async Task<Guid> EditarEstado(Guid id, int estado)
        {
            return await _servicioDA.EditarEstado(id, estado);
        }

        public async Task<Guid> Eliminar(Guid idServicio)
        {
            return await _servicioDA.Eliminar(idServicio);
        }

        public async Task<IEnumerable<ServiciosResponse>> ObtenerServicios()
        {
            return await _servicioDA.ObtenerServicios();
        }

        public async Task<ServiciosResponse> ObtenerServicios(Guid id)
        {
            return await _servicioDA.ObtenerServicios(id);
        }

        public async Task<int> ObtenerServiciosActivos()
        {
            return await _servicioDA.ObtenerServiciosActivos();
        }

        public async Task<int> ObtenerServiciosInactivos()
        {
            return await _servicioDA.ObtenerServiciosInactivos();
        }

        public async Task<int> ObtenerServiciosTotales()
        {
            return await _servicioDA.ObtenerServiciosTotales();
        }

        public async Task<int> ObtenerSumaCosto()
        {
            return await _servicioDA.ObtenerSumaCosto();
        }
    }
}
