import { useEffect, useState } from "react";
import { obtenerEstado, obtenerEstados } from "../services/Estados";

export const useObtenerEstado = (id) => {
    const [estado, setEstado] = useState(null);

    const cargarEstado = async () => {
        try {
            const response = await obtenerEstado(id);
            setEstado(response);
        } catch (err) {
            console.error('Error al cargar estado', err);
        }
    };

    useEffect(() => {
        if (id) {
            cargarEstado();
        }
    }, [id]);
    return { estado, cargarEstado };
}

export const useObtenerEstados = () => {
    const [estados, setEstados] = useState([]);

    const cargarEstados = async () => {
        try {
            const response = await obtenerEstados();
            setEstados(response);
        } catch (err) {
            console.error('Error al cargar estados', err);
        }
    };

    useEffect(() => {
        cargarEstados();
    }, []);
    return { estados, cargarEstados };
}