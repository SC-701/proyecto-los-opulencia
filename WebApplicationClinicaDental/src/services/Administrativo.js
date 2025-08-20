import axios from './AxiosInstance.service';

const administrativos = '/Administrativo';
import axiosSeguridad from './AxiosInstanceSeguridad.service';

export const obtenerAdministrativos = async () => {
  const response = await axios.get(administrativos);
  return response.data;
};

export const obtenerAdministrativoPorId = async (id) => {
  const response = await axios.get(`${administrativos}/${id}`);
  return response.data;
};

export const editarAdministrativo = async (id, data) => {
  const response = await axios.put(`${administrativos}/${id}`, data);
  return response.data;
};

export const eliminarAdministrativo = async (id) => {
  const response = await axios.delete(`${administrativos}/${id}`);
  return response.data;
};

export const obtenerAdministrativosTotal = async () => {
  const response = await axios.get(`${administrativos}/total`);
  return response.data;
};

export const obtenerTotalAdministadores = async () => {
  const response = await axios.get(`${administrativos}/administadores`);
  return response.data;
};

export const obtenerTotalRecepcionistas = async () => {
  const response = await axios.get(`${administrativos}/recepcionistas`);
  return response.data;
};

export const obtenerAdministrativosInactivos = async () => {
  const response = await axios.get(`${administrativos}/inactivos`);
  return response.data;
};

export const editarEstadoAdministrativo = async (idAdministrativo, idEstado) => {
  const response = await axios.put(`${administrativos}/EditarEstado/${idAdministrativo}/${idEstado}`);
  return response.data;
};

export const registrarAdministrativo = async (data) => {
  const response = await axiosSeguridad.post('/Administrativo/RegistrarAdministrativo', data);
  return response.data;
};