using Abstracciones.Interface.DA;
using Abstracciones.Models;
using Dapper;
using Microsoft.Data.SqlClient;

namespace DA
{
    public class PacientesDA : IPacientesDA 
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public PacientesDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio();
        }

        public  async Task<Guid> AgregarPaciente(PacienteRequest request)
        {
            var query = @"AgregarPaciente";


            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {

                idUsuario = Guid.NewGuid(),
                nombre = request.Nombre,
                apellido = request.Apellido,
                email = request.Email,
                cedula = request.Cedula,
                telefono = request.Telefono,
                direccion = request.Direccion,
                fechaNacimiento = request.FechaNacimiento,
                idEstadoUsuario = request.IdEstadoUsuario,

                idPaciente = Guid.NewGuid(),
                grupoSangineo = request.GrupoSangineo,
                alergias = request.Alergias,
                observaciones = request.Observaciones,
                idEstadoPaciente = request.IdEstadoPaciente

            });

            return respuesta;
        }

        public async Task<Guid> Editar(Guid id, PacienteRequest request)
        {
            await VerificarExistenciaId(id);
            string query = @"EditarPaciente";
            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {

                idPaciente = id,
                nombre = request.Nombre,
                apellido = request.Apellido,
                email = request.Email,
                cedula = request.Cedula,
                telefono = request.Telefono,
                direccion = request.Direccion,
                fechaNacimiento = request.FechaNacimiento,
                idEstadoUsuario = request.IdEstadoUsuario,
                grupoSangineo = request.GrupoSangineo,
                alergias = request.Alergias,
                observaciones = request.Observaciones,
                idEstadoPaciente = request.IdEstadoPaciente
            });
            return resultado;
        }

        public async Task<Guid> Eliminar(Guid idPaciente)
        {
            await VerificarExistenciaId(idPaciente);

            string query = @"EliminarPaciente";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                idPaciente = idPaciente
            });

            return resultado;
        }

        public async Task<IEnumerable<PacienteResponse>> ObtenerPacientes()
        {
            string query = @"ObtenerPacientes";
            var resultado = await _Sqlconexion.QueryAsync<PacienteResponse>(query);

            return resultado;
        }

        public async Task<PacienteResponse> ObtenerPacientes(Guid id)
        {
            string query = @"ObtenerPaciente";

            if (id == Guid.Empty) throw new Exception("No se encontró el paciente con el ID proporcionado.");

            var resultado = await _Sqlconexion.QueryAsync<PacienteResponse>(query, new
            {
                idPaciente = id
            });

            return resultado.FirstOrDefault();
        
        }


        #region HELPERS

        private async Task VerificarExistenciaId(Guid id)
        {
            PacienteResponse? resultado = await ObtenerPacientes(id) ??
                throw new Exception("No se encontró el paciente con el ID proporcionado.");
        }

        #endregion
    }

}
