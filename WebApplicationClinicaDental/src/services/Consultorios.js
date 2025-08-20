import axios from './AxiosInstance.service';
const consultorios = '/consultorios'


export const obtenerConsultorios = async () => {
    const response = await axios.get(consultorios);
    return response.data;
}

export const ActualizarEstadoConsultorio = async (id, estado) => {
    const response = await axios.put(`${consultorios}/EditarEstado/${id}/${estado}`);
    return response.data;
}


export const AgregarConsultorio = async (data) => {
    const response = await axios.post(consultorios, data);
    return response.data;
}

export const EditarConsultorio = async (data, id) => {
    const response = await axios.put(`${consultorios}/${id}`, data);
    return response.data;
}
