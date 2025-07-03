import { useEffect } from "react"
import { editarEstadoFacturas, obtenerFacturas } from "../services/Facturas";


export const useFacturas = () => {
    const [Facturas, setFacturas] = useState([]);

    const cargar = async () => {
        try {
            const data = await obtenerFacturas();
            setFacturas(data);
        } catch (err) {
            console.error('Error al cargar facturas', err);
        }
    };

    useEffect(() => {
        cargar();
    }, []);

    return { Facturas, cargar };
};


export const useFacturasEditarEstado = () => {
    const editarEstado = async (id, estado) => {
        try {
            const response = await editarEstadoFacturas(id, estado);
            return response.data;
        } catch (err) {
            console.error('Error al editar estado de factura', err);
        }
    };

    return { editarEstado };
};