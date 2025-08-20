import React, { useState, useEffect } from 'react';
import { AgregarFactura, editarFactura ,editarEstadoFacturas, obtenerFacturas, obtenerTotalFacturas, ObtenerFacturasPagadas, ObetenerFacturasPorPagar, PagoFactura, ObtenerIngresosMes, ObtenerFacturasPorFecha } from "../services/Facturas";


export const useFacturas = () => {
    const [Facturas, setFacturas] = useState([]);

    const cargar = async () => {
        try {
            const data = await obtenerFacturas();
            setFacturas(data);
        } catch (err) {
            console.error('Error al cargar facturas', err);
        }
    };

    useEffect(() => {
        cargar();
    }, []);

    return { Facturas, cargar };
};


export const useFacturasEditarEstado = () => {
    const editarEstado = async (id, estado) => {
        try {
            const response = await editarEstadoFacturas(id, estado);
            return response.data;
        } catch (err) {
            console.error('Error al editar estado de factura', err);
        }
    };

    return { editarEstado };
};

export const useFacturasEditar = () => {
    const editarFacturaSub = async (data, id) => {
        try {
            const response = await editarFactura(data, id);
            return response;
        } catch (err) {
            console.error('Error al editar factura', err);
        }
    };

    return { editarFacturaSub };
};


export const useFacturasAgregar = () => {
    const agregarFactura = async (data) => {
        try {
            const response = await AgregarFactura(data);
            return response;
        } catch (err) {
            console.error('Error al agregar factura', err);
        }
    };

    return { agregarFactura };
};

export const useFacturasTotal = () => {
    const [TotalFacturas, setTotalFacturas] = useState(0);
    
    const cargarTotalFacturas = async () => {
        try {
            const response = await obtenerTotalFacturas();
            setTotalFacturas(response);
        } catch (err) {
            console.error('Error al cargar total de facturas', err);
        }
    };

    useEffect(() => {
        cargarTotalFacturas();
    }, []);

    return { TotalFacturas, cargarTotalFacturas };
};

export const useFacturasPagadas = () => {
    const [FacturasPagadas, setFacturasPagadas] = useState([]);

    const cargarFacturasPagadas = async () => {
        try {
            const response = await ObtenerFacturasPagadas();
            setFacturasPagadas(response);
        } catch (err) {
            console.error('Error al cargar facturas pagadas', err);
        }
    };
    useEffect(() => {
        cargarFacturasPagadas();
    }, []);

    return { FacturasPagadas, cargarFacturasPagadas };
};

export const useFacturasPorPagar = () => {
    const [FacturasPorPagar, setFacturasPorPagar] = useState([]);

    const cargarFacturasPorPagar = async () => {
        try {
            const response = await ObetenerFacturasPorPagar();
            setFacturasPorPagar(response);
        } catch (err) {
            console.error('Error al cargar facturas por pagar', err);
        }
    };
    useEffect(() => {
        cargarFacturasPorPagar();
    }, []);

    return { FacturasPorPagar, cargarFacturasPorPagar };
};

export const usePagoFactura = () => {
    const PagoFacturaAsync = async (data, id) => {
        try {
            const response = await PagoFactura( data, id);
            return response.data;
        } catch (err) {
            console.error('Error al pagar factura', err);
        }
    };
    return { PagoFacturaAsync };
};

export const useIngresosMes = () => {
    const [IngresosMes, setIngresosMes] = useState(0);

    const cargarIngresosMes = async () => {
        try {
            const response = await ObtenerIngresosMes();
            setIngresosMes(response);
        } catch (err) {
            console.error('Error al cargar ingresos del mes', err);
        }
    };

    useEffect(() => {
        cargarIngresosMes();
    }, []);

    return { IngresosMes, cargarIngresosMes };
};

export const useFacturasPorFecha = () => {
    const [FacturasPorFecha, setFacturasPorFecha] = useState([]);

    const cargarFacturasPorFecha = async () => {
        try {
            const response = await ObtenerFacturasPorFecha();
            setFacturasPorFecha(response);
        } catch (err) {
            console.error('Error al cargar facturas por fecha', err);
        }
    };

    useEffect(() => {
        cargarFacturasPorFecha();
    }, []);

    return { FacturasPorFecha, cargarFacturasPorFecha };
};