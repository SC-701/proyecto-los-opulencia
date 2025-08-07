﻿using Abstracciones.Models;


namespace Abstracciones.Interface.Flujo
{
    public interface IPacienteFlujo
    {
        public Task<IEnumerable<PacienteResponse>> ObtenerPacientes();

        public Task<PacienteResponse> ObtenerPacientes(Guid id);

        public Task<Guid> AgregarPaciente(PacienteRequest request);

        public Task<Guid> Editar(Guid id, PacienteRequest request);

        public Task<Guid> Eliminar(Guid idPaciente);
        public Task<int> TotalPacientes();
        public Task<int> PacientesActivos();
        public Task<int> PacientesInactivos();
        public Task<int> PacientesNuevos();
        public Task<Guid> EditarEstado(Guid idPaciente, int idEstado);

    }
}
