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
    public class ServicioDA : IServicioDA
    {

        private readonly IRepositorioDapper _repositorioDapper;
        private readonly SqlConnection _Sqlconexion;

        public ServicioDA(IRepositorioDapper repositorioDapper)
        {
            _repositorioDapper = repositorioDapper;
            _Sqlconexion = _repositorioDapper.ObtenerRepositorio();
        }



        public async Task<Guid> AgregarServicio(ServiciosRequest request)
        {
            string query = @"AgregarServicio";

            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = Guid.NewGuid(),
                nombre = request.nombre,
                descripcion = request.descripcion,
                precio = request.precio,
                idEstado = request.idEstado
            });

            return respuesta;
        }

        public async Task<Guid> Editar(Guid id, ServiciosRequest request)
        {
            string query = @"EditarServicio";

            var respuesta = await _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = id,
                nombre = request.nombre,
                descripcion = request.descripcion,
                precio = request.precio,
                idEstado = request.idEstado
            });

            return respuesta;

        }

        public Task<Guid> Eliminar(Guid idServicio)
        {
            
            string query = @"EliminarServicio";
            var respuesta = _Sqlconexion.ExecuteScalarAsync<Guid>(query, new
            {
                id = idServicio
            });
            return respuesta;

        }

        public Task<IEnumerable<ServiciosResponse>> ObtenerServicios()
        {
            
            string query = @"ObtenerServicios";
            var resultado = _Sqlconexion.QueryAsync<ServiciosResponse>(query);
            return resultado;

        }

        public async Task<ServiciosResponse> ObtenerServicios(Guid id)
        {
           string query = @"ObtenerServicio";

            if(id == Guid.Empty) throw new Exception("No se encontró el servicio con el ID proporcionado.");

            var resultado = await _Sqlconexion.QueryAsync<ServiciosResponse>(query, new
            {
                id = id
            });
            return resultado.FirstOrDefault();
        }
    }
}
