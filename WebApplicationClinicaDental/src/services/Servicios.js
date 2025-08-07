import axios from './AxiosInstance.service';
const servicios = '/servicios'


export const obtenerServicios = async () => {
    const response = await axios.get(servicios);
    return response.data;
}

export const editarServicioEstado = async (id, estado) => {
    const response = await axios.put(`${servicios}/${id}`, { estado });
    return response.data;
}