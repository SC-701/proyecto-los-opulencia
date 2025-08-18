import axios from './AxiosInstance.service';
const servicios = '/servicios'


export const obtenerServicios = async () => {
    const response = await axios.get(servicios);
    return response.data;
}

export const editarServicioEstado = async (id, estado) => {
    const response = await axios.put(`${servicios}/EditarEstado/${id}/${estado}`);
    return response.data;
}

export const agregarServicio = async (data) => {
    const response = await axios.post(servicios, data);
    return response.data;
}

export const ObtenerServiciosActivos = async () => {
    const response = await axios.get(`${servicios}/ObtenerServiciosActivos`);
    return response.data;
}

export const ObtenerServiciosInactivos = async () => {
    const response = await axios.get(`${servicios}/ObtenerServiciosInactivos`);
    return response.data;
}

export const ObtenerServiciosTotales = async () => {
    const response = await axios.get(`${servicios}/ObtenerServiciosTotales`);
    return response.data;
}

export const ObtenerServiciosSuma = async () => {
    const response = await axios.get(`${servicios}/ObtenerSumaCosto`);
    return response.data;
}
