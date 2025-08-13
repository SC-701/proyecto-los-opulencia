using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;

namespace Abstracciones.Interface.DA
{
    public interface IServicioDA
    {

        public Task<IEnumerable<ServiciosResponse>> ObtenerServicios();

        public Task<ServiciosResponse> ObtenerServicios(Guid id);

        public Task<Guid> AgregarServicio(ServiciosRequest request);
        public Task<Guid> Editar(Guid id, ServiciosRequest request);
        public Task<Guid> Eliminar(Guid idServicio);
        public Task<Guid> EditarEstado(Guid id, int estado);
        public Task<int> ObtenerServiciosTotales();
        public Task<int> ObtenerServiciosActivos();
        public Task<int> ObtenerServiciosInactivos();
        public Task<int> ObtenerSumaCosto();


    }
}
