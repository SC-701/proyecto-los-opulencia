import { useEffect, useState } from "react";
import { agregarServicio, editarServicioEstado, obtenerServicios, ObtenerServiciosActivos, ObtenerServiciosInactivos, ObtenerServiciosSuma, ObtenerServiciosTotales } from "../services/Servicios";

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


export const useServicioEstadoEditar = () => {
    const editarEstado = async (id, estado) => {
        try {
            await editarServicioEstado(id, estado);
        } catch (err) {
            console.error("Error editando estado del servicio:", err);
        }
    };

    return { editarEstado };
};

export const useServicioAgregar = () => {
    const agregarServicioAsync = async (data) => {
        try {
            const respuesta = await agregarServicio(data);
            return respuesta;
        } catch (err) {
            console.error("Error agregando servicio:", err);
        }
    };

    return { agregarServicioAsync };
};

export const useServicioObtenerActivos = () => {
    const [ServiciosActivos, setServicios] = useState([]);
    const obtenerServiciosActivosAsync = async () => {
        try {
            const respuesta = await ObtenerServiciosActivos();
            setServicios(respuesta);
        } catch (err) {
            console.error("Error obteniendo servicios activos:", err);
        }
    };

    useEffect(() => {
        obtenerServiciosActivosAsync();
    }, []);

    return { obtenerServiciosActivosAsync, ServiciosActivos };
};

export const useServicioObtenerTotales = () => {
    const [ServiciosTotales, setServicios] = useState([]);
    const obtenerServiciosTotalesAsync = async () => {
        try {
            const respuesta = await ObtenerServiciosTotales();
            setServicios(respuesta);
        } catch (err) {
            console.error("Error obteniendo servicios totales:", err);
        }
    };

    useEffect(() => {
        obtenerServiciosTotalesAsync();
    }, []);

    return { obtenerServiciosTotalesAsync, ServiciosTotales };
};


export const useServicioObtenerInactivos = () => {
    const [ServiciosInactivos, setServicios] = useState([]);
    const obtenerServiciosInactivosAsync = async () => {
        try {
            const respuesta = await ObtenerServiciosInactivos();
            setServicios(respuesta);
        } catch (err) {
            console.error("Error obteniendo servicios inactivos:", err);
        }
    };

    useEffect(() => {
        obtenerServiciosInactivosAsync();
    }, []);

    return { obtenerServiciosInactivosAsync, ServiciosInactivos };
};

export const useServicioObtenerSumaCosto = () => {
    const [ServiciosSumaCosto, setServicios] = useState([]);
    const obtenerServiciosSumaCostoAsync = async () => {
        try {
            const respuesta = await ObtenerServiciosSuma();
            setServicios(respuesta);
        } catch (err) {
            console.error("Error obteniendo servicios suma costo:", err);
        }
    };

    useEffect(() => {
        obtenerServiciosSumaCostoAsync();
    }, []);

    return { obtenerServiciosSumaCostoAsync, ServiciosSumaCosto };
};
