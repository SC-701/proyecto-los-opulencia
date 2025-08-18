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
    public class EstadosFlujo : IEstadosFlujo
    {
        private readonly IEstadosDA _estadosDA;

        public EstadosFlujo(IEstadosDA estadosDA)
        {
            _estadosDA = estadosDA;
        }

        public async Task<int> AgregarEstado(Estados estado)
        {
            return await _estadosDA.AgregarEstado(estado);
        }

        public async Task<int> EditarEstado(int id, Estados estado)
        {
            return await _estadosDA.EditarEstado(id, estado);
        }

        public async Task<int> EliminarEstado(int id)
        {
            return await _estadosDA.EliminarEstado(id);
        }

        public async Task<EstadosResponse> ObtenerEstado(int id)
        {
            return await _estadosDA.ObtenerEstado(id);
        }

        public Task<IEnumerable<EstadosResponse>> ObtenerEstados()
        {
            return _estadosDA.ObtenerEstados();
        }
    }
}
