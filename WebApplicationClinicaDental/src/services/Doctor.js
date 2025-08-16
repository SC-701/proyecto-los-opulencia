import axios from './AxiosInstance.service';

const doctores = '/Doctores'

export const obtenerDoctores = async () => {
    const response = await axios.get(doctores);
    return response.data;
}


export const obtenerDoctorPorId = async (id) => {
  const response = await axios.get(`${doctores}/${id}`);
  return response.data;
};


export const agregarDoctor = async (data) => {
  const response = await axios.post(doctores, data);
  return response.data;
};


export const editarDoctor = async (id, data) => {
  const response = await axios.put(`${doctores}/${id}`, data);
  return response.data;
};


export const eliminarDoctor = async (id) => {
  const response = await axios.delete(`${doctores}/${id}`);
  return response.data;
};


export const obtenerDoctoresTotal = async () => {
  const response = await axios.get(`${doctores}/total`);
  return response.data;
};

export const obtenerDoctoresActivos = async () => {
  const response = await axios.get(`${doctores}/activos`);
  return response.data;
};

export const obtenerDoctoresInactivos = async () => {
  const response = await axios.get(`${doctores}/inactivos`);
  return response.data;
};

export const obtenerDoctoresNuevos = async () => {
  const response = await axios.get(`${doctores}/nuevos`);
  return response.data;
};


export const editarEstadoDoctor = async (idDoctor, idEstado) => {
  const response = await axios.put(`${doctores}/EditarEstado/${idDoctor}/${idEstado}`);
  return response.data;
};