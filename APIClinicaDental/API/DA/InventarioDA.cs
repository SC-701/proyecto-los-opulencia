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
    public class InventarioDA : IInventarioDA
    {
        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public InventarioDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio();
        }

        #region CRUD

        public async Task<Guid> AgregarInventario(InventarioRequest request)
        {
            var query = @"AgregarInventario";

            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = Guid.NewGuid(),
                producto = request.Producto,
                descripcion = request.Descripcion,
                cantidad = request.Cantidad,
                idEstado = request.IdEstado,
                fechaVencimiento = request.FechaVencimiento,
                categoria = request.Categoria,
                unidad = request.Unidad
            });

            return respuesta;
        }


        public async Task<Guid> Editar(Guid idInventario, InventarioRequest request)
        {
            await VerificarExistenciaId(idInventario);

            var query = @"EditarInventario";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = idInventario,
                producto = request.Producto,
                descripcion = request.Descripcion,
                cantidad = request.Cantidad,
                idEstado = request.IdEstado,
                fechaVencimiento = request.FechaVencimiento,
                categoria = request.Categoria,
                unidad = request.Unidad
            });


            return resultado;
        }

        public async Task<Guid> EditarEstado(Guid idInventario, int idEstado)
        {
            await VerificarExistenciaId(idInventario);

            var query = @"EditarInventarioEstado"; 

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                idInventario = idInventario,  
                idEstado = idEstado
            });


            return resultado;
        }

        public async Task<Guid> Eliminar(Guid idInventario)
        {
            await VerificarExistenciaId(idInventario);

            var query = @"EliminarInventario";

            var resultado = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = idInventario
            });

            return resultado;
        }

        public async Task<IEnumerable<InventarioResponse>> ObtenerInventario()
        {
            var query = @"ObtenerInventario";

            var resultado = await _Sqlconexion.QueryAsync<InventarioResponse>(query);

            return resultado;
        }

        public async Task<InventarioResponse> ObtenerInventario(Guid idInventario)
        {
            var query = @"ObtenerInventarioPorId";

            if (idInventario == Guid.Empty) throw new Exception("No se encontró el inventario con el ID proporcionado.");

            var resultado = await _Sqlconexion.QueryAsync<InventarioResponse>(query, new
            {
                id = idInventario
            });

            return resultado.FirstOrDefault();
        }

        public async Task<int> ActualizarEstadosVencidos()
        {
            var query = @"ActualizarEstadosInventario";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;
        }

        #endregion

        #region MÉTODOS PARA LOS CARDS

        public async Task<int> ObtenerTotalInsumos()
        {
            var query = @"ContarTotalInsumos";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query);

            return resultado;
        }

        public async Task<int> ContarInsumosPorEstado(int estado)
        {
            var query = @"ContarInsumosPorEstado";

            var resultado = await _Sqlconexion.QuerySingleAsync<int>(query, new
            {
                idEstado = estado
            });

            return resultado;
        }

        #endregion

        #region MÉTODOS PARA GRÁFICOS

        public async Task<IEnumerable<InventarioPorEstado>> ConteoPorEstado()
        {
            var query = @"ConteoInsumosPorEstado";

            var resultado = await _Sqlconexion.QueryAsync<InventarioPorEstado>(query);

            return resultado;
        }

        public async Task<IEnumerable<InventarioPorCategoria>> ConteoPorCategoria()
        {
            var query = @"ConteoInsumosPorCategoria";

            var resultado = await _Sqlconexion.QueryAsync<InventarioPorCategoria>(query);

            return resultado;
        }

        #endregion

        #region HELPERS

        private async Task VerificarExistenciaId(Guid id)
        {
            InventarioResponse? resultado = await ObtenerInventario(id) ??
                throw new Exception("No se encontró el inventario con el ID proporcionado.");
        }

        #endregion
    }
}
