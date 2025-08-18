using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Models;

namespace Abstracciones.Interface.Flujo
{
    public interface IEstadosFlujo
    {
        public Task<IEnumerable<EstadosResponse>> ObtenerEstados();
        public Task<EstadosResponse> ObtenerEstado(int id);
        public Task<int> AgregarEstado(Estados estado);
        public Task<int> EditarEstado(int id, Estados estado);
        public Task<int> EliminarEstado(int id);
    }
}
