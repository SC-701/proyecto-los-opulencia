import { editarEstadoCita, obtenerCitas, ObtenerCitasCompletadas, obtenerCitasPendientes, obtenerTotalCitas } from "../services/Citas";
import { useEffect, useState } from "react";


export const useCitas = () => {
    const [citas, setCitas] = useState([]);

    const cargar = async () => {
        try {
            const data = await obtenerCitas();
            setCitas(data);
        } catch (err) {
            console.error('Error al cargar citas', err);
        }
    };

    useEffect(() => {
        cargar();
    }, []);

    return { citas, cargar };
};


export const useCitasEditarEstado = () => {
    const editarEstado = async (id, estado) => {
        try {
            const response = await editarEstadoCita(id, estado);
            return response.data;
        } catch (err) {
            console.error('Error al editar estado de cita', err);
        }
    };

    return { editarEstado };
};

export const useCitasTotal = () => {
    const [totalCitas, setTotalCitas] = useState(0);

    const cargarTotalCitas = async () => {
        try {
            const response = await obtenerTotalCitas();
            setTotalCitas(response);
        } catch (err) {
            console.error('Error al cargar total de citas', err);
        }
    };

    useEffect(() => {
        cargarTotalCitas();
    }, []);

    return { totalCitas, cargarTotalCitas };
}

export const useCitasPendientes = () => {
    const [citasPendientes, setCitasPendientes] = useState([]);

    const cargarCitasPendientes = async () => {
        try {
            const response = await obtenerCitasPendientes();
            setCitasPendientes(response);
        } catch (err) {
            console.error('Error al cargar citas pendientes', err);
        }
    };

    useEffect(() => {
        cargarCitasPendientes();
    }, []);

    return { citasPendientes, cargarCitasPendientes };
};

export const useCitasCompletadas = () => {
    const [citasCompletadas, setCitasCompletadas] = useState(0);

    const cargarCitasCompletadas = async () => {
        try {
            const response = await ObtenerCitasCompletadas();
            setCitasCompletadas(response);
        } catch (err) {
            console.error('Error al cargar citas completadas', err);
        }
    };
    useEffect(() => {
        cargarCitasCompletadas();
    }, []);

    return { citasCompletadas, cargarCitasCompletadas };

}