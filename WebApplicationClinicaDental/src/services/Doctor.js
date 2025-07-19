import axios from './AxiosInstance.service';

const doctor = '/Doctores'

export const obtenerDoctores = async () => {
    const response = await axios.get(doctor);
    return response.data;
}