using Abstracciones.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Abstracciones.Interface.Flujo
{
    public interface IDoctoresFlujo
    {
        public Task<IEnumerable<DoctorResponse>> ObtenerDoctores();

        public Task<DoctorResponse> ObtenerDoctores(Guid id);
    }
}
