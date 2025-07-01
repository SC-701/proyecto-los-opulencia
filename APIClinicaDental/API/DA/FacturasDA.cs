using Abstracciones.Interface.DA;
using Abstracciones.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace DA
{
    public class FacturasDA : IFacturasDA
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public FacturasDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio();
        }

        #region
        private async Task VerificarExistenciaIdFac(Guid id)
        {
            FacturasResponse? resultado = await ObtenerFacturas(id) ??
                throw new Exception("No se encontró la factura con el ID proporcionado.");
        }
        #endregion

        public async Task<Guid> AgregarFacturas(FacturasRequest request)
        {
            var query = @"AgregarFactura";

            var idEstado = request.idEstado >= 0 ? 4 : request.idEstado;


            var respuestaFac = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {

                id = Guid.NewGuid(),
                idServicio = request.idServicio,
                idDoctor = request.idDoctor,
                idPaciente = request.idPaciente,
                fecha = request.fecha,
                subtotal = request.@subtotal,
                total = request.total,
                idEstado = idEstado

            });

            return respuestaFac;

        }

        public async Task<Guid> Editar(Guid id, FacturasRequest request)
        {
            await VerificarExistenciaIdFac(id);
                string query = @"EditarFacturas";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = id,
                idServicio = request.idServicio,
                idDoctor = request.idDoctor,
                idPaciente = request.idPaciente,
                fecha = request.fecha,
                subtotal = request.@subtotal,
                total = request.total,
                idEstado = request.idEstado

            });

            return resultado;
        }
        public async Task<Guid> EditarEstado(Guid id, int estado)
        {
            await VerificarExistenciaIdFac(id);
            string query = @"EditarFacturaEstado";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                idFac = id,
                idEstado = estado
            });

            return resultado;

        }
        public async Task<Guid> Eliminar(Guid idFactura)
        {
            await VerificarExistenciaIdFac(idFactura);

            string query = @"EliminarFactura";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = idFactura
            });

            return resultado;

        }

        public async Task<IEnumerable<FacturasResponse>> ObtenerFacturas()
        {
            string query = @"ObtenerFacturas";
            var resultado = await _Sqlconexion.QueryAsync<FacturasResponse>(query);

            return resultado;
        }

        public async Task<FacturasResponse> ObtenerFacturas(Guid id)
        {
            string query = @"ObtenerFactura";

            if (id == Guid.Empty) throw new Exception("No se encontró la factura con el ID proporcionado.");

            var resultado = await _Sqlconexion.QueryAsync<FacturasResponse>(query, new
            {
                id = id
            });

            return resultado.FirstOrDefault();
        }

        public async Task<int> ObtenerFacturasCompletadas()
        {
            string query = @"ObtenerConteoFacturasCompletas";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;
        }

        public async Task<int> ObtenerFacturasPendientes() { 
            string query = @"ObtenerConteoPendientesFacturas";

        var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;


        }

        public async Task<int> ObtenerTotalFacturas()
        {
            string query = @"ObtenerConteoTotalFacturas";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;

        }
    }
}
