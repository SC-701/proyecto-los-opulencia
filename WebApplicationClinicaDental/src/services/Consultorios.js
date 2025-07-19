import axios from './AxiosInstance.service';
const consultorios = '/consultorios'


export const obtenerConsultorios = async () => {
    const response = await axios.get(consultorios);
    return response.data;
}