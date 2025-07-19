import { useEffect, useState } from "react";
import { obtenerServicios } from "../services/Servicios";

export const useServicios = () => {
    const [servicios, setServicios] = useState([]);

    const cargarServicios = async () => {
        try {
            const datos = await obtenerServicios();
            setServicios(datos);
        } catch (err) {
            console.error("Error obteniendo servicios:", err);
            return [];
        }
    };

    useEffect(() => {
        cargarServicios();
    },
        []);

    return { servicios, cargarServicios };
};