import axios from './AxiosInstance.service';


export const obtenerCitas = async () => {
    const response = await axios.get('/citas');
    return response.data;
}

export const editarEstadoCita = async (id, estado) => {
    const response = await axios.put(`/citas/EditarEstado/${id}/${estado}`);
    return response.data;
};


export const obtenerTotalCitas = async () => {
    const response = await axios.get('/citas/ObtenerTotalCitas')
    return response.data;
}

export const obtenerCitasPendientes = async () => {
    const response = await axios.get('/citas/ObtenerCitasPendientes');
    return response.data;
}

export const ObtenerCitasCompletadas = async () => {
    const response = await axios.get('/citas/ObtenerCitasCompletadas');
    return response.data; 
}

export const obtenerCitasCanceladas = async () => {
    const response = await axios.get('/citas/ObtenerCitasCanceladas');
    return response.data;
}

export const obtenerCitasDiarias = async () => {
    const response = await axios.get('/citas/ObtenerCitasDiarias');
    return response.data;
}