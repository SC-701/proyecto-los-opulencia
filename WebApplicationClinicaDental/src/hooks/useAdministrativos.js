import { useEffect, useState } from "react";
import {
  obtenerAdministrativos,
  editarAdministrativo,
  eliminarAdministrativo,
  obtenerAdministrativosTotal,
  obtenerTotalAdministadores,
  obtenerTotalRecepcionistas,
  obtenerAdministrativosInactivos,
  editarEstadoAdministrativo,
  registrarAdministrativo,
} from "../services/Administrativo";

export const useAdministrativos = () => {
  const [administrativos, setAdministrativos] = useState([]);

  const cargarAdministrativos = async () => {
    try {
      const response = await obtenerAdministrativos();
      setAdministrativos(response);
      return response;
    } catch (err) {
      console.error("Error al cargar administrativos", err);
    }
  };

  useEffect(() => {
    cargarAdministrativos();
  }, []);

  return { administrativos, cargarAdministrativos };
};

export const useEditarAdministrativo = () => {
  const editar = async (id, data) => {
    try {
      const response = await editarAdministrativo(id, data);
      return response;
    } catch (err) {
      console.error("Error al editar administrativo", err);
    }
  };

  return { editar };
};

export const useEliminarAdministrativo = () => {
  const eliminar = async (id) => {
    try {
      const response = await eliminarAdministrativo(id);
      return response;
    } catch (err) {
      console.error("Error al eliminar administrativo", err);
    }
  };

  return { eliminar };
};

export const useAdministrativosTotal = () => {
  const [totalAdministrativos, setTotalAdministrativos] = useState(0);

  const cargarTotalAdministrativos = async () => {
    try {
      const response = await obtenerAdministrativosTotal();
      setTotalAdministrativos(response);
    } catch (err) {
      console.error("Error al cargar total de administrativos", err);
    }
  };

  useEffect(() => {
    cargarTotalAdministrativos();
  }, []);

  return { totalAdministrativos, cargarTotalAdministrativos };
};

export const useTotalAdministadores = () => {
  const [totalAdministadores, setTotalAdministadores] = useState(0);

  const cargarTotalAdministadores = async () => {
    try {
      const response = await obtenerTotalAdministadores();
      setTotalAdministadores(response);
    } catch (err) {
      console.error("Error al cargar total de administradores", err);
    }
  };

  useEffect(() => {
    cargarTotalAdministadores();
  }, []);

  return { totalAdministadores, cargarTotalAdministadores };
};

export const useTotalRecepcionistas = () => {
  const [totalRecepcionistas, setTotalRecepcionistas] = useState(0);

  const cargarTotalRecepcionistas = async () => {
    try {
      const response = await obtenerTotalRecepcionistas();
      setTotalRecepcionistas(response);
    } catch (err) {
      console.error("Error al cargar total de recepcionistas", err);
    }
  };

  useEffect(() => {
    cargarTotalRecepcionistas();
  }, []);

  return { totalRecepcionistas, cargarTotalRecepcionistas };
};

export const useAdministrativosInactivos = () => {
  const [administrativosInactivos, setAdministrativosInactivos] = useState(0);

  const cargarAdministrativosInactivos = async () => {
    try {
      const response = await obtenerAdministrativosInactivos();
      setAdministrativosInactivos(response);
    } catch (err) {
      console.error("Error al cargar administrativos inactivos", err);
    }
  };

  useEffect(() => {
    cargarAdministrativosInactivos();
  }, []);

  return { administrativosInactivos, cargarAdministrativosInactivos };
};

export const useAdministrativosEditarEstado = () => {
  const editarEstado = async (id, estado) => {
    try {
      const response = await editarEstadoAdministrativo(id, estado);
      return response;
    } catch (err) {
      console.error("Error al editar estado del administrativo", err);
    }
  };

  return { editarEstado };
};


export const useRegistrarAdministrativo = () => {
  const registrar = async (data) => {
    try {
      const response = await registrarAdministrativo(data);
      return response;
    } catch (err) {
      console.error("Error al registrar administrativo", err);
    }
  };
  return { registrar };
};