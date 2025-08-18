import { useEffect, useState } from "react";
import {
    obtenerDoctores,
    obtenerDoctoresActivos,
    obtenerDoctoresInactivos,
    obtenerDoctoresTotal,
    obtenerDoctoresNuevos,
    agregarDoctor,
    editarDoctor,
    eliminarDoctor,
    editarEstadoDoctor} from "../services/Doctor";

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

export const useAgregarDoctor = () => {
    const agregar = async (data) => {
        try {
            const response = await agregarDoctor(data);
            return response;
        } catch (err) {
            console.error('Error al agregar doctor', err);
        }
    };

    return { agregar };
};

export const useEditarDoctor = () => {
    const editar = async (id, data) => {
        try {
            const response = await editarDoctor(id, data);
            return response;
        } catch (err) {
            console.error('Error al editar doctor', err);
        }
    };

    return { editar };
};

export const useEliminarDoctor = () => {
    const eliminar = async (id) => {
        try {
            const response = await eliminarDoctor(id);
            return response;
        } catch (err) {
            console.error('Error al eliminar doctor', err);
        }
    };

    return { eliminar };
};

export const useDoctoresTotal = () => {
    const [totalDoctores, setTotalDoctores] = useState(0);

    const cargarTotalDoctores = async () => {
        try {
            const response = await obtenerDoctoresTotal();
            setTotalDoctores(response);
        } catch (err) {
            console.error('Error al cargar total de doctores', err);
        }
    };

    useEffect(() => {
        cargarTotalDoctores();
    }, []);

    return { totalDoctores, cargarTotalDoctores };
};

export const useDoctoresActivos = () => {
    const [doctoresActivos, setDoctoresActivos] = useState(0);

    const cargarDoctoresActivos = async () => {
        try {
            const response = await obtenerDoctoresActivos();
            setDoctoresActivos(response);
        } catch (err) {
            console.error('Error al cargar doctores activos', err);
        }
    };

    useEffect(() => {
        cargarDoctoresActivos();
    }, []);

    return { doctoresActivos, cargarDoctoresActivos };
};

export const useDoctoresInactivos = () => {
    const [doctoresInactivos, setDoctoresInactivos] = useState(0);

    const cargarDoctoresInactivos = async () => {
        try {
            const response = await obtenerDoctoresInactivos();
            setDoctoresInactivos(response);
        } catch (err) {
            console.error('Error al cargar doctores inactivos', err);
        }
    };

    useEffect(() => {
        cargarDoctoresInactivos();
    }, []);

    return { doctoresInactivos, cargarDoctoresInactivos };
};

export const useDoctoresNuevos = () => {
    const [doctoresNuevos, setDoctoresNuevos] = useState(0);

    const cargarDoctoresNuevos = async () => {
        try {
            const response = await obtenerDoctoresNuevos();
            setDoctoresNuevos(response);
        } catch (err) {
            console.error('Error al cargar doctores nuevos', err);
        }
    };

    useEffect(() => {
        cargarDoctoresNuevos();
    }, []);

    return { doctoresNuevos, cargarDoctoresNuevos };
};

export const useDoctoresEditarEstado = () => {
    const editarEstado = async (id, estado) => {
        try {
            const response = await editarEstadoDoctor(id, estado);
            return response;
        } catch (err) {
            console.error('Error al editar estado del doctor', err);
        }
    };

    return { editarEstado };
};