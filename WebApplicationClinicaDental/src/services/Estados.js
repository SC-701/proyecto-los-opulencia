import axios from './AxiosInstance.service';
const estados = 'estados'

export const obtenerEstados = async () => {
    const response = await axios.get(estados);
    return response.data;
}

export const obtenerEstado = async (id) => {
    const response = await axios.get(`${estados}/${id}`);
    return response.data;
}