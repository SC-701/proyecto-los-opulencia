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
    public class ConsultorioFlujo : IConsultorioFlujo
    {

        private readonly IConsultorioDA _consultorioDA;

        public ConsultorioFlujo(IConsultorioDA consultorioDA)
        {
            _consultorioDA = consultorioDA;
        }

        public async Task<IEnumerable<ConsultorioResponse>> ObtenerConsultorio()
        {
            return await _consultorioDA.ObtenerConsultorio(); 
        }
    }
}
