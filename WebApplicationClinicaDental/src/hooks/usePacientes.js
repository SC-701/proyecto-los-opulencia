import { useState, useEffect } from 'react';
import { 
    obtenerPacientes, 
    obtenerPacientesActivos, 
    obtenerPacientesInactivos, 
    obtenerPacientesTotal, 
    obtenerPacientesNuevos,
    agregarPaciente,
    editarPaciente,
    eliminarPaciente,
    editarEstadoPaciente
} from '../services/Pacientes';

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


export const useAgregarPaciente = () => {
    const agregar = async (data) => {
        try {
            const response = await agregarPaciente(data);
            return response;
        } catch (err) {
            console.error('Error al agregar paciente', err);
        }
    };

    return { agregar };
};

export const useEditarPaciente = () => {
    const editar = async (id, data) => {
        try {
            const response = await editarPaciente(id, data);
            return response;
        } catch (err) {
            console.error('Error al editar paciente', err);
        }
    };

    return { editar };
};

export const useEliminarPaciente = () => {
    const eliminar = async (id) => {
        try {
            const response = await eliminarPaciente(id);
            return response;
        } catch (err) {
            console.error('Error al eliminar paciente', err);
        }
    };

    return { eliminar };
};



export const usePacientesTotal = () => {
    const [totalPacientes, setTotalPacientes] = useState(0);

    const cargarTotalPacientes = async () => {
        try {
            const response = await obtenerPacientesTotal();
            setTotalPacientes(response);
        } catch (err) {
            console.error('Error al cargar total de pacientes', err);
        }
    };

    useEffect(() => {
        cargarTotalPacientes();
    }, []);

    return { totalPacientes, cargarTotalPacientes };
};

export const usePacientesActivos = () => {
    const [pacientesActivos, setPacientesActivos] = useState(0);

    const cargarPacientesActivos = async () => {
        try {
            const response = await obtenerPacientesActivos();
            setPacientesActivos(response);
        } catch (err) {
            console.error('Error al cargar pacientes activos', err);
        }
    };

    useEffect(() => {
        cargarPacientesActivos();
    }, []);

    return { pacientesActivos, cargarPacientesActivos };
};

export const usePacientesInactivos = () => {
    const [pacientesInactivos, setPacientesInactivos] = useState(0);

    const cargarPacientesInactivos = async () => {
        try {
            const response = await obtenerPacientesInactivos();
            setPacientesInactivos(response);
        } catch (err) {
            console.error('Error al cargar pacientes inactivos', err);
        }
    };

    useEffect(() => {
        cargarPacientesInactivos();
    }, []);

    return { pacientesInactivos, cargarPacientesInactivos };
};

export const usePacientesNuevos = () => {
    const [pacientesNuevos, setPacientesNuevos] = useState(0);

    const cargarPacientesNuevos = async () => {
        try {
            const response = await obtenerPacientesNuevos();
            setPacientesNuevos(response);
        } catch (err) {
            console.error('Error al cargar pacientes nuevos', err);
        }
    };

    useEffect(() => {
        cargarPacientesNuevos();
    }, []);

    return { pacientesNuevos, cargarPacientesNuevos };
};


export const usePacientesEditarEstado = () => {
    const editarEstado = async (id, estado) => {
        try {
            const response = await editarEstadoPaciente(id, estado);
            return response;
        } catch (err) {
            console.error('Error al editar estado del paciente', err);
        }
    };

    return { editarEstado };
};