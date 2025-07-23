import { useEffect, useState } from "react";
import { obtenerDoctores } from "../services/Doctor";

export const useDoctores = () => {
    const [doctores, setDoctores] = useState([]);

    const cargarDoctores = async () => {
        try {
            const response = await obtenerDoctores();
            setDoctores(response);
            return response;
        } catch (err) {
            console.error('Error al cargar doctores', err);
        }
    };

    useEffect(() => {
        cargarDoctores();
    }, []);

    return { doctores, cargarDoctores}
}