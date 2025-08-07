import axios from '../services/AxiosInstance.service';

const pacientes = '/pacientes'



export const obtenerPacientes = async () => {
    const response = await axios.get(pacientes);
    return response.data;
}

export const obtenerPacientePorId = async (id) => {
    const response = await axios.get(`${pacientes}/${id}`);
    return response.data;
};


export const agregarPaciente = async (data) => {
    const response = await axios.post(pacientes, data);
    return response.data;
};


export const editarPaciente = async (id, data) => {
    const response = await axios.put(`${pacientes}/${id}`, data);
    return response.data;
};


export const eliminarPaciente = async (id) => {
    const response = await axios.delete(`${pacientes}/${id}`);
    return response.data;
};



export const obtenerPacientesTotal = async () => {
    const response = await axios.get(`${pacientes}/total`);
    return response.data;
};

export const obtenerPacientesActivos = async () => {
    const response = await axios.get(`${pacientes}/activos`);
    return response.data;
};

export const obtenerPacientesInactivos = async () => {
    const response = await axios.get(`${pacientes}/inactivos`);
    return response.data;
};

export const obtenerPacientesNuevos = async () => {
    const response = await axios.get(`${pacientes}/nuevos`);
    return response.data;
};

export const editarEstadoPaciente = async (id, estado) => {
    const response = await axios.put(`${pacientes}/EditarEstado/${id}/${estado}`);
    return response.data;
};