import { useEffect, useState } from "react";
import { ActualizarEstadoConsultorio, AgregarConsultorio, EditarConsultorio, obtenerConsultorios } from "../services/Consultorios";

export const useConsultorios = () => {
    const [consultorios, setConsultorios] = useState([]);

    const cargarConsultorios = async () => {
        try {
            const response = await obtenerConsultorios();
            setConsultorios(response);
            return response;
        } catch (err) {
            console.error('Error cargando consultorios:', err);
        }
    };
    useEffect(() => {
        cargarConsultorios();
    }, []);

    return { consultorios, cargarConsultorios };
};

export const useConsultoriosEditarEstado = () => {
    const editarEstado = async (id, estado) => {
        try {
            const response = await ActualizarEstadoConsultorio(id, estado);
            return response.data;
        } catch (err) {
            console.error('Error al editar estado de consultorio', err);
        }
    };

    return { editarEstado };
};

export const useConsultoriosAgregar = () => {
    const agregarConsultorio = async (data) => {
        try {
            const response = await AgregarConsultorio(data);
            return response.data;
        } catch (err) {
            console.error('Error al agregar consultorio', err);
        }
    };

    return { agregarConsultorio };
}

export const useConsultoriosEditar = () => {
    const editarConsultorio = async (data, id) => {
        try {
            const response = await EditarConsultorio(data, id);
            return response.data;
        } catch (err) {
            console.error('Error al editar consultorio', err);
        }
    };

    return { editarConsultorio };
};