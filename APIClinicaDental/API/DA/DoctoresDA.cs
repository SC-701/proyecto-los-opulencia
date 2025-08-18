using Abstracciones.Interface.DA;
using Abstracciones.Models;
using Dapper;
using Microsoft.Data.SqlClient;

namespace DA
{
    public class DoctoresDA : IDoctoresDA
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public DoctoresDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio(); ;
        }

        public async Task<Guid> AgregarDoctor(DoctorRequest request)
        {
            var query = @"AgregarDoctor";

            var idEstadoUsuario = request.IdEstadoUsuario == 0 ? 1 : request.IdEstadoUsuario;
            var idEstadoDoctor = request.IdEstadoDoctor == 0 ? 1 : request.IdEstadoDoctor;

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
                idEstadoUsuario = idEstadoUsuario,

                idDoctor = Guid.NewGuid(),
                especialidad = request.Especialidad,
                licenciaProfesional = request.LicenciaProfesional,
                fechaInicio = request.FechaInicio,
                idServicio = request.IdServicio,
                idEstadoDoctor = idEstadoDoctor
            });

            return respuesta;
        }

        public async  Task<Guid> Editar(Guid id, DoctorRequest request)
        {
            await VerificarExistenciaId(id); 

            const string query = @"EditarDoctor";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                idDoctor = id,
                nombre = request.Nombre,
                apellido = request.Apellido,
                email = request.Email,
                cedula = request.Cedula,
                telefono = request.Telefono,
                direccion = request.Direccion,
                fechaNacimiento = request.FechaNacimiento,
                idEstadoUsuario = request.IdEstadoUsuario,

                especialidad = request.Especialidad,
                licenciaProfesional = request.LicenciaProfesional,
                fechaInicio = request.FechaInicio,
                idServicio = request.IdServicio,
                idEstadoDoctor = request.IdEstadoDoctor
            });

            return resultado;
        }

        public async Task<Guid> EditarEstado(Guid idDoctor, int idEstado)
        {
            await VerificarExistenciaId(idDoctor);
            string query = @"EditarDoctorEstado";
            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = idDoctor,
                idEstado = idEstado
            });
            return resultado;
        }


        public async Task<Guid> Eliminar(Guid idDoctor)
        {
            await VerificarExistenciaId(idDoctor); 

            const string query = @"EliminarDoctor";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                idDoctor = idDoctor
            });

            return resultado;
        }

        public async Task<IEnumerable<DoctorResponse>> ObtenerDoctores()
        {
            string query = @"ObtenerDoctores";
            var resultado = await _Sqlconexion.QueryAsync<DoctorResponse>(query);

            return resultado;
        }

        public async Task<DoctorResponse> ObtenerDoctores(Guid id)
        {
            string query = @"ObtenerDoctor";

            if (id == Guid.Empty) throw new Exception("No se encontró el doctor con el ID proporcionado.");

            var resultado = await _Sqlconexion.QueryAsync<DoctorResponse>(query, new
            {
                idDoctor = id
            });

            return resultado.FirstOrDefault();
        }

        public async Task<int> TotalDoctores()
        {
            string query = @"TotalDoctores";
            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);
            return resultado;
        }

        public async Task<int> DoctoresActivos()
        {
            string query = @"DoctoresActivos";
            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);
            return resultado;
        }

        public async Task<int> DoctoresInactivos()
        {
            string query = @"DoctoresInactivos";
            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);
            return resultado;
        }

        public async Task<int> DoctoresNuevos()
        {
            string query = @"DoctoresNuevos";
            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);
            return resultado;
        }


        #region HELPERS
        private async Task VerificarExistenciaId(Guid id)
        {
            DoctorResponse? resultado = await ObtenerDoctores(id) ??
                throw new Exception("No se encontró el doctor con el ID proporcionado.");
        }
        #endregion
    }
}
