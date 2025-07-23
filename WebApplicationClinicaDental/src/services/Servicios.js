import axios from './AxiosInstance.service';
const servicios = '/servicios'


export const obtenerServicios = async () => {
    const response = await axios.get(servicios);
    return response.data;
}