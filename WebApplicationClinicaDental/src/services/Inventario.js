import axios from "./AxiosInstance.service";
const inventario = "/inventario";

export const obtenerInventario = async () => {
  const { data } = await axios.get(inventario);
  return data;
};

export const obtenerInventarioPorId = async (id) => {
  const { data } = await axios.get(`${inventario}/${id}`);
  return data;
};


export const AgregarInventario = async (body) => {
  const { data } = await axios.post(inventario, body);
  return data;
};

export const editarInventario = async (body, id) => {
  const { data } = await axios.put(`${inventario}/${id}`, body);
  return data;
};

export const editarEstadoInventario = async (id, idEstado) => {
  const { data } = await axios.put(`${inventario}/EditarEstado/${id}/${idEstado}`);
  return data;
};

export const eliminarInventario = async (id) => {
  const { data } = await axios.delete(`${inventario}/${id}`);
  return data;
};

export const obtenerTotalInsumos = async () => {
  const { data } = await axios.get(`${inventario}/ContarTotalInsumos`);
  const n = typeof data === "number" ? data : Number(data?.Total ?? data?.total ?? 0);
  return Number.isFinite(n) ? n : 0;
};

export const obtenerInsumosPorEstado = async (idEstado) => {
  const { data } = await axios.get(`${inventario}/ContarInsumosPorEstado/${idEstado}`);
  const n = typeof data === "number" ? data : Number(data?.Total ?? data?.total ?? 0);
  return Number.isFinite(n) ? n : 0;
};

export const obtenerConteoPorEstado = async () => {
  const { data } = await axios.get(`${inventario}/ConteoPorEstado`);
  return Array.isArray(data)
    ? data.map((x) => ({
        idEstado: x.idEstado ?? x.estado ?? x.estadoId ?? null,
        total: x.Total ?? x.total ?? x.cantidad ?? 0,
      }))
    : [];
};

export const obtenerConteoPorCategoria = async () => {
  const { data } = await axios.get(`${inventario}/ConteoPorCategoria`);
  return Array.isArray(data)
    ? data.map((x) => ({
        categoria: x.Categoria ?? x.categoria ?? x.nombreCategoria ?? x.nombre ?? "Sin categoría",
        total: x.Total ?? x.total ?? x.cantidad ?? 0,
      }))
    : [];
};

export const actualizarEstadosVencidos = async () => {
  const { data } = await axios.put(`${inventario}/ActualizarEstadosVencidos`);
  return data;
};
