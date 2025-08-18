import React, { useEffect, useState } from "react";
import {
  AgregarInventario,
  editarInventario as editarInventarioSvc,
  editarEstadoInventario,
  eliminarInventario,
  obtenerInventario,
  obtenerInventarioPorId,
  obtenerTotalInsumos,
  obtenerInsumosPorEstado,
  obtenerConteoPorEstado,
  obtenerConteoPorCategoria,
  actualizarEstadosVencidos,
} from "../services/Inventario";

// LISTADO
export const useInventario = () => {
  const [items, setItems] = useState([]);

  const cargar = async () => {
    try {
      const data = await obtenerInventario();
      setItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error al cargar inventario", err);
    }
  };

  useEffect(() => { cargar(); }, []);
  return { items, cargar };
};

// DETALLE
export const useInventarioPorId = (id) => {
  const [item, setItem] = useState(null);

  const cargar = async () => {
    try {
      if (!id) return;
      const data = await obtenerInventarioPorId(id);
      setItem(data ?? null);
    } catch (err) {
      console.error("Error al cargar inventario por id", err);
    }
  };

  useEffect(() => { if (id) cargar(); }, [id]);
  return { item, cargar };
};

// EDITAR ESTADO (toggle en tabla)
export const useInventarioEditarEstado = () => {
  const editarEstado = async (id, estado) => {
    try {
      return await editarEstadoInventario(id, estado);
    } catch (err) {
      console.error("Error al editar estado de inventario", err);
      throw err;
    }
  };
  return { editarEstado };
};

// CARDS
export const useInventarioTotal = () => {
  const [total, setTotal] = useState(0);

  const cargarTotal = async () => {
    try { setTotal(await obtenerTotalInsumos()); }
    catch (err) { console.error("Error al cargar total de insumos", err); }
  };

  useEffect(() => { cargarTotal(); }, []);
  return { total, cargarTotal };
};

export const useInventarioPorEstado = (estadoId) => {
  const [totalEstado, setTotalEstado] = useState(0);

  const cargarTotalEstado = async () => {
    try {
      if (estadoId == null) return;
      setTotalEstado(await obtenerInsumosPorEstado(estadoId));
    } catch (err) {
      console.error("Error al cargar insumos por estado", err);
    }
  };

  useEffect(() => { if (estadoId != null) cargarTotalEstado(); }, [estadoId]);
  return { totalEstado, cargarTotalEstado };
};

// CHARTS
export const useInventarioConteoPorEstado = () => {
  const [datos, setDatos] = useState([]);

  const cargarConteo = async () => {
    try {
      setDatos(await obtenerConteoPorEstado());
    } catch (err) {
      console.error("Error conteo por estado", err);
    }
  };

  useEffect(() => { cargarConteo(); }, []);
  return { datos, cargarConteo };
};

export const useInventarioConteoPorCategoria = () => {
  const [datos, setDatos] = useState([]);

  const cargarConteo = async () => {
    try {
      setDatos(await obtenerConteoPorCategoria());
    } catch (err) {
      console.error("Error conteo por categoría", err);
    }
  };

  useEffect(() => { cargarConteo(); }, []);
  return { datos, cargarConteo };
};

// CRUD
export const useInventarioAgregar = () => {
  const agregar = async (data) => {
    try {
      return await AgregarInventario(data);
    } catch (err) {
      console.error("Error al agregar inventario", err);
      throw err;
    }
  };
  return { agregar };
};

export const useInventarioEditar = () => {
  const editar = async (data, id) => {
    try {
      return await editarInventarioSvc(data, id);
    } catch (err) {
      console.error("Error al editar inventario", err);
      throw err;
    }
  };
  return { editar };
};

export const useInventarioEliminar = () => {
  const eliminar = async (id) => {
    try {
      return await eliminarInventario(id);
    } catch (err) {
      console.error("Error al eliminar inventario", err);
      throw err;
    }
  };
  return { eliminar };
};

// JOB (recalcular estados al entrar)
export const useInventarioActualizarVencidos = () => {
  const actualizar = async () => {
    try {
      return await actualizarEstadosVencidos();
    } catch (err) {
      console.error("Error al actualizar vencidos", err);
      throw err;
    }
  };
  return { actualizar };
};
