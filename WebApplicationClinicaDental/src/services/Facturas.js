import axios from './AxiosInstance.service';
const facturas = '/Facturas'

export const obtenerFacturas = async () => {
    const response = await axios.get(facturas);
    return response.data;
}


export const editarEstadoFacturas = async (id, estado) => {
    const response = await axios.put(`/Facturas/EditarEstado/${id}/${estado}`);
    return response.data;
};

export const editarFactura = async (data, id) => {
    const response = await axios.put(`${facturas}/${id}`, data);
    return response.data;
}

export const AgregarFactura = async (data) => {
    const response = await axios.post(facturas, data);
    return response.data;
}

export const obtenerTotalFacturas = async () => {
    const response = await axios.get(`${facturas}/ObtenerTotalFacturas`); 
    return response.data;
}

export const ObtenerFacturasPagadas = async () => {
    const response = await axios.get(`${facturas}/ObtenerFacturasPagadas`);
    return response.data;
}

export const ObetenerFacturasPorPagar = async () => {
    const response = await axios.get(`${facturas}/ObtenerFacturasPorPagar`);
    return response.data;
}   




