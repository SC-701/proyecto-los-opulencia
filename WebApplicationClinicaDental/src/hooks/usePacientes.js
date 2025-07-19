import { useState, useEffect } from 'react';
import { obtenerPacientes } from '../services/Pacientes';

export const usePacientes = () => {
    const [pacientes, setPacientes] = useState([]);

    const cargarPacientes = async () => {
        try {
            const response = await obtenerPacientes();
            setPacientes(response);
            return response;
        } catch (err) {
            console.error('Error al cargar pacientes', err);
        }
    }

    useEffect(() => {
        cargarPacientes();
    }, []);

    return { pacientes, cargarPacientes };
};