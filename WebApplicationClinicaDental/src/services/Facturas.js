import axios from './AxiosInstance.service';


export const obtenerFacturas = async () => {
    const response = await axios.get('/Facturas');
    return response.data;
}

export const editarEstadoFacturas = async (id, estado) => {
    const response = await axios.put(`/Facturas/EditarEstado/${id}/${estado}`);
    return response.data;
};

