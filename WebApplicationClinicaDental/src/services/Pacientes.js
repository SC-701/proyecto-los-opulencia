import axios from '../services/AxiosInstance.service';

const pacientes = '/pacientes'

export const obtenerPacientes = async () => {
    const response = await axios.get(pacientes);
    return response.data;
}