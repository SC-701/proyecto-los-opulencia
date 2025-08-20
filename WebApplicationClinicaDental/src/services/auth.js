import axios from "./AxiosInstanceSeguridad.service";

const verificar  = '/Administrativo/verificar'


export const verificarUser = async () => {
  const response = await axios.get(verificar);
  return response.data;
};