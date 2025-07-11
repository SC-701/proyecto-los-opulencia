﻿using Abstracciones.Models;


namespace Abstracciones.Interface.Flujo
{
    public interface IDoctoresFlujo
    {
        public Task<IEnumerable<DoctorResponse>> ObtenerDoctores();

        public Task<DoctorResponse> ObtenerDoctores(Guid id);

        public Task<Guid> AgregarDoctor(DoctorRequest request);

        public Task<Guid> Editar(Guid id, DoctorRequest request);

        public Task<Guid> Eliminar(Guid idDoctor);
    }
}
