import axios from './AxiosInstance.service';
const citas = '/citas'


export const obtenerCitas = async () => {
    const response = await axios.get(citas);
    return response.data;
}

export const editarEstadoCita = async (id, estado) => {
    const response = await axios.put(`${citas}/EditarEstado/${id}/${estado}`);
    return response.data;
};


export const obtenerTotalCitas = async () => {
    const response = await axios.get(`${citas}/ObtenerTotalCitas`)
    return response.data;
}

export const obtenerCitasPendientes = async () => {
    const response = await axios.get(`${citas}/ObtenerCitasPendientes`);
    return response.data;
}

export const ObtenerCitasCompletadas = async () => {
    const response = await axios.get(`${citas}/ObtenerCitasCompletadas`);
    return response.data; 
}

export const obtenerCitasCanceladas = async () => {
    const response = await axios.get(`${citas}/ObtenerCitasCanceladas`);
    return response.data;
}

export const obtenerCitasDiarias = async () => {
    const response = await axios.get(`${citas}/ObtenerCitasDiarias`);
    return response.data;
}

export const obtenerCitasDiariasPendientes = async () => {
    const response = await axios.get(`${citas}/ObtenerCitasPendientesDiarias`);
    return response.data;
}

export const ObtenerCitasDiariasPacientes = async () => {
    const response = await axios.get(`${citas}/ObtenerCitasPacientesDiarias`);
    return response.data;
}

export const AgregarCita = async (data) => {
    const response = await axios.post(citas, data);
    return response.data;
}

export const editarCita = async (data, id) => {
    const response = await axios.put(`${citas}/${id}`, data);
    return response.data;
}

export const ObtenerCitasPorFecha = async () => {
    const response = await axios.get(`${citas}/ObtenerCitasPorFecha`);
    return response.data;
}

export const ObtenerInfoCitasExtra = async (id) => {
    const response = await axios.get(`${citas}/ObtenerCitasInfoExtra/${id}`);
    return response.data;
}
