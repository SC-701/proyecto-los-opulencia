using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abstracciones.Interface.DA;
using Abstracciones.Models;
using Dapper;
using Microsoft.Data.SqlClient;

namespace DA
{
    public class CitasDA : ICitasDA
    {

        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public CitasDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio();
        }

        #region CRUD

        public async Task<Guid> AgregarCitas(CitasRequest request)
        {
            var query = @"AgregarCita";

            var idEstado = request.idEstado >= 0  ? 4 : request.idEstado;

    
            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {

                id = Guid.NewGuid(),
                idServicio = request.idServicio,
                idDoctor = request.idDoctor,
                idPaciente = request.idPaciente,
                fecha = request.fecha,
                hora = request.hora,
                notaMedica = request.notaMedica,
                idConsultorio = request.idConsultorio,
                idEstado = idEstado

            });

            return respuesta;

        }

        public async Task<Guid> Editar(Guid id, CitasRequest request)
        {
            await VerificarExistenciaId(id);

            string query = @"EditarCita";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = id,
                idServicio = request.idServicio,
                idDoctor = request.idDoctor,
                idPaciente = request.idPaciente,
                fecha = request.fecha,
                hora = request.hora,
                notaMedica = request.notaMedica,
                idConsultorio = request.idConsultorio,
                idEstado = request.idEstado
            });

            return resultado;

        }

        public async Task<Guid> EditarEstado(Guid id, int estado)
        {
            await VerificarExistenciaId(id);


            string query = @"EditarCitaEstado";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = id,
                idEstado = estado
            });

            return resultado;

        }

        public async Task<Guid> Eliminar(Guid idCita)
        {

            await VerificarExistenciaId(idCita);

            string query = @"EliminarCita";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = idCita
            });

            return resultado;

        }

        public async Task<IEnumerable<CitasResponse>> ObtenerCitas()
        {
            string query = @"ObtenerCitas";
            var resultado = await  _Sqlconexion.QueryAsync<CitasResponse>(query);

            return resultado;

        }

        public async Task<CitasResponse> ObtenerCitas(Guid id)
        {
            string query = @"ObtenerCita";

            if (id == Guid.Empty) throw new Exception("No se encontró la cita con el ID proporcionado.");

            var resultado = await _Sqlconexion.QueryAsync<CitasResponse>(query, new
            {
                id = id
            });

            return resultado.FirstOrDefault();  

        }

        public async Task<int> ObtenerCitasCanceladas()
        {
            string query = @"ObtenerConteoCitasCanceladas";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;

        }

        public async Task<int> ObtenerCitasCompletadas()
        {
            
            string query = @"ObtenerConteoCitasCompletas";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;
        }

        public async Task<int> ObtenerCitasPendientes()
        {

            string query = @"ObtenerConteoPendientesCitas";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;


        }

        public async Task<int> ObtenerConteoCitasDiarias()
        {
            string query = @"ObtenerCitasAlDia";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;
        }

        public async Task<int> ObtenerTotalCitas()
        {
            string query = @"ObtenerConteoTotalCitas";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;

        }



        #endregion


        #region HELPERS

        private async Task VerificarExistenciaId(Guid id)
            {
                CitasResponse ? resultado = await ObtenerCitas(id) ??
                    throw new Exception("No se encontró la cita con el ID proporcionado.");
            }

        #endregion
    }
}
