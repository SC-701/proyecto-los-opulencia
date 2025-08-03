import { AgregarCita, editarCita, editarEstadoCita, obtenerCitas, obtenerCitasCanceladas, ObtenerCitasCompletadas, obtenerCitasDiarias, ObtenerCitasDiariasPacientes, obtenerCitasDiariasPendientes, obtenerCitasPendientes, ObtenerCitasPorFecha, ObtenerInfoCitasExtra, obtenerTotalCitas } from "../services/Citas";
import React, { useState, useEffect } from 'react';


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
    const [citasPendientes, setCitasPendientes] = useState(0);

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

export const useCitasCanceladas = () => {
    const [citasCanceladas, setCitasCanceladas] = useState(0);

    const cargarCitasCanceladas = async () => {
        try {
            const response = await obtenerCitasCanceladas();
            setCitasCanceladas(response);
        } catch (err) {
            console.error('Error al cargar citas canceladas', err);
        }
    };

    useEffect(() => {
        cargarCitasCanceladas();
    }, []);

    return { citasCanceladas, cargarCitasCanceladas };
}

export const useCitasDiarias = () => {
    const [citasDiarias, setCitasDiarias] = useState(0);

    const cargarCitasDiarias = async () => {
        try {
            const response = await obtenerCitasDiarias();
            setCitasDiarias(response);
        } catch (err) {
            console.error('Error al cargar citas diarias', err);
        }
    };

    useEffect(() => {
        cargarCitasDiarias();
    }, []);

    return { citasDiarias, cargarCitasDiarias };
};

export const useCitasDiariasPendientes = () => {
    const [citasDiariasPendientes, setCitasDiariasPendientes] = useState(0);

    const cargarCitasDiariasPendientes = async () => {
        try {
            const response = await obtenerCitasDiariasPendientes();
            setCitasDiariasPendientes(response);
        } catch (err) {
            console.error('Error al cargar citas diarias pendientes', err);
        }
    };

    useEffect(() => {
        cargarCitasDiariasPendientes();
    }, []);

    return { citasDiariasPendientes, cargarCitasDiariasPendientes };
}

export const useCitasDiariasPacientes = () => {
    const [citasDiariasPacientes, setCitasDiariasPacientes] = useState(0);

    const cargarCitasDiariasPacientes = async () => {
        try {
            const response = await ObtenerCitasDiariasPacientes();
            setCitasDiariasPacientes(response);
        } catch (err) {
            console.error('Error al cargar citas diarias pacientes', err);
        }
    };

    useEffect(() => {
        cargarCitasDiariasPacientes();
    }, []);

    return { citasDiariasPacientes, cargarCitasDiariasPacientes };
};


export const useCitasAgregar = () => {
    const agregarCita = async (data) => {
        try {
            const response = await AgregarCita(data);
            return response;
        } catch (err) {
            console.error('Error al agregar cita', err);
        }
    };

    return { agregarCita };
};


export const useCitasEditar = () => {
    const editarCitaSub = async (data, id) => {
        try {
            const response = await editarCita(data, id);
            return response;
        } catch (err) {
            console.error('Error al editar cita', err);
        }
    };

    return { editarCitaSub };
};

export const useCitasPorFecha = () => {
    const [citasPorFecha, setCitasPorFecha] = useState([]);

    const cargarCitasPorFecha = async () => {
        try {
            const response = await ObtenerCitasPorFecha();
            setCitasPorFecha(response);
        } catch (err) {
            console.error('Error al cargar citas por fecha', err);
        }
    };

    useEffect(() => {
        cargarCitasPorFecha();
    }, []);

    return { citasPorFecha, cargarCitasPorFecha };
};


export const useCitasInfoExtra = (id) => {
    const [citasInfoExtra, setCitasInfoExtra] = useState([]);

    const cargarCitasInfoExtra = async () => {
        try {
            const response = await ObtenerInfoCitasExtra(id);
            setCitasInfoExtra(response);
        } catch (err) {
            console.error('Error al cargar citas info extra', err);
        }
    };

    useEffect(() => {
        if (id) cargarCitasInfoExtra();
    }, [id]);

    return { citasInfoExtra };
};
