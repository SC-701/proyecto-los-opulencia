import {
  CalendarCheck,
  Check,
  CircleAlert,
  Eye,
  EyeOff,
  PackageCheck,
  AlertTriangle,
  PackageX,
  Ban,
} from "lucide-react";



export const EstadosCitas = {
  estados: [
    {
      nombre: "Pendiente",
      color: "bg-yellow-100 text-yellow-800",
      icono: <CircleAlert size={20} className="text-yellow-500" />,
      id: 3,
    },
    {
      nombre: "Completada",
      color: "bg-green-100 text-green-800",
      icono: <CalendarCheck size={20} className="text-green-500" />,
      id: 5,
    },
    {
      nombre: "Cancelada",
      color: "bg-red-100 text-red-800",
      icono: <Ban size={20} className="text-red-500" />,
      id: 4,
    },
  ],

  obtenerElNombre: (nombre) =>
    EstadosCitas.estados.find((e) => e.nombre === nombre),

  conversionEstado: (estadoNombre) =>
    EstadosCitas.obtenerElNombre(estadoNombre)?.id ?? null,

  obtenerColor: (estadoNombre) =>
    EstadosCitas.obtenerElNombre(estadoNombre)?.color ??
    "bg-gray-100 text-gray-800",

  obtenerIcono: (estadoNombre) =>
    EstadosCitas.obtenerElNombre(estadoNombre)?.icono ?? null,
};

export const EstadoFacturacion = {
  estados: [
    {
      nombre: "Pagada",
      color: "bg-yellow-100 text-yellow-800",
      icono: <CircleAlert size={20} className="text-yellow-500" />,
      id: 8,
    },

    {
      nombre: "Por Pagar",
      color: "bg-green-100 text-green-800",
      icono: <Check size={20} className="text-green-500" />,
      id: 7,
    },
  ],

  obtenerElNombre: (nombre) =>
    EstadoFacturacion.estados.find((e) => e.nombre === nombre),

  conversionEstado: (estadoNombre) =>
    EstadoFacturacion.obtenerElNombre(estadoNombre)?.id ?? null,

  obtenerColor: (estadoNombre) =>
    EstadoFacturacion.obtenerElNombre(estadoNombre)?.color ??
    "bg-gray-100 text-gray-800",

  obtenerIcono: (estadoNombre) =>
    EstadoFacturacion.obtenerElNombre(estadoNombre)?.icono ?? null,
};

export const EstadosServicios = {
  estados: [
    {
      nombre: "Activo",
      color: "bg-green-100 text-green-800",
      icono: <Eye size={20} className="text-green-500" />,
      id: 2,
    },
    {
      nombre: "Inactivo",
      color: "bg-red-100 text-red-800",
      icono: <EyeOff size={20} className="text-red-500" />,
      id: 1,
    },
  ],

  obtenerElNombre: (nombre) =>
    EstadosServicios.estados.find((e) => e.nombre === nombre),

  conversionEstado: (estadoNombre) =>
    EstadosServicios.obtenerElNombre(estadoNombre)?.id ?? null,

  obtenerColor: (estadoNombre) =>
    EstadosServicios.obtenerElNombre(estadoNombre)?.color ??
    "bg-gray-100 text-gray-800",

  obtenerIcono: (estadoNombre) =>
    EstadosServicios.obtenerElNombre(estadoNombre)?.icono ?? null,
};

export const EstadosPacientes = {
  estados: [
    {
      nombre: "Activo",
      color: "bg-green-100 text-green-800",
      icono: <Eye size={20} className="text-green-500" />,
      id: 2,
    },
    {
      nombre: "Inactivo",
      color: "bg-red-100 text-red-800",
      icono: <EyeOff size={20} className="text-red-500" />,
      id: 1,
    },
  ],

  obtenerElNombre: (nombre) =>
    EstadosPacientes.estados.find((e) => e.nombre === nombre),

  conversionEstado: (estadoNombre) =>
    EstadosPacientes.obtenerElNombre(estadoNombre)?.id ?? null,

  obtenerColor: (estadoNombre) =>
    EstadosPacientes.obtenerElNombre(estadoNombre)?.color ??
    "bg-gray-100 text-gray-800",

  obtenerIcono: (estadoNombre) =>
    EstadosPacientes.obtenerElNombre(estadoNombre)?.icono ?? null,
};

export const EstadosDoctores = {
  estados: [
    {
      nombre: "Activo",
      color: "bg-green-100 text-green-800",
      icono: <Eye size={20} className="text-green-500" />,
      id: 2,
    },
    {
      nombre: "Inactivo",
      color: "bg-red-100 text-red-800",
      icono: <EyeOff size={20} className="text-red-500" />,
      id: 1,
    },
  ],

  obtenerElNombre: (nombre) =>
    EstadosDoctores.estados.find((e) => e.nombre === nombre),

  conversionEstado: (estadoNombre) =>
    EstadosDoctores.obtenerElNombre(estadoNombre)?.id ?? null,

  obtenerColor: (estadoNombre) =>
    EstadosDoctores.obtenerElNombre(estadoNombre)?.color ??
    "bg-gray-100 text-gray-800",

  obtenerIcono: (estadoNombre) =>
    EstadosDoctores.obtenerElNombre(estadoNombre)?.icono ?? null,
};



export const EstadosConsultorios = {
estados: [
    {
      nombre: "Activo",
      color: "bg-green-100 text-green-800",
      icono: <Eye size={20} className="text-green-500" />,
      id: 2,
    },
    {
      nombre: "Inactivo",
      color: "bg-red-100 text-red-800",
      icono: <EyeOff size={20} className="text-red-500" />,
      id: 1,
    },
  ],

  obtenerElNombre: (nombre) =>
    EstadosConsultorios.estados.find((e) => e.nombre === nombre),

  conversionEstado: (estadoNombre) =>
    EstadosConsultorios.obtenerElNombre(estadoNombre)?.id ?? null,

  obtenerColor: (estadoNombre) =>
    EstadosConsultorios.obtenerElNombre(estadoNombre)?.color ??
    "bg-gray-100 text-gray-800",

  obtenerIcono: (estadoNombre) =>
    EstadosConsultorios.obtenerElNombre(estadoNombre)?.icono ?? null,
};

export const EstadosInventario = {
  estados: [
    { id: 6,  nombre: "Disponible", color: "bg-green-100 text-green-800",  icono: <PackageCheck size={20} className="text-green-500" /> },
    { id: 11, nombre: "Por vencer",  color: "bg-yellow-100 text-yellow-800", icono: <AlertTriangle size={20} className="text-yellow-500" /> },
    { id: 12, nombre: "Agotado",     color: "bg-red-100 text-red-800",      icono: <PackageX size={20} className="text-red-500" /> },
    { id: 13, nombre: "Vencido",     color: "bg-purple-100 text-purple-800", icono: <Ban size={20} className="text-purple-500" /> },
  ],

  obtenerElNombre: (nombre) =>
    EstadosInventario.estados.find(e => e.nombre === nombre) ?? null,
  conversionEstado: (nombre) =>
    EstadosInventario.obtenerElNombre(nombre)?.id ?? null,
  obtenerColor: (nombre) =>
    EstadosInventario.obtenerElNombre(nombre)?.color ?? "bg-gray-100 text-gray-800",
  obtenerIcono: (nombre) =>
    EstadosInventario.obtenerElNombre(nombre)?.icono ?? null,

  siguienteId: (idActual) => {
    const orden = [6, 11, 12, 13];
    const i = orden.indexOf(Number(idActual));
    return i === -1 ? 6 : orden[(i + 1) % orden.length];
  },
};

export const EstadosAdministrativos = {
  estados: [
    {
      nombre: "Activo",
      color: "bg-green-100 text-green-800",
      icono: <Eye size={20} className="text-green-500" />,
      id: 2,
    },
    {
      nombre: "Inactivo",
      color: "bg-red-100 text-red-800",
      icono: <EyeOff size={20} className="text-red-500" />,
      id: 1,
    },
  ],

  obtenerElNombre: (nombre) =>
    EstadosAdministrativos.estados.find((e) => e.nombre === nombre),

  conversionEstado: (estadoNombre) =>
    EstadosAdministrativos.obtenerElNombre(estadoNombre)?.id ?? null,

  obtenerColor: (estadoNombre) =>
    EstadosAdministrativos.obtenerElNombre(estadoNombre)?.color ??
    "bg-gray-100 text-gray-800",

  obtenerIcono: (estadoNombre) =>
    EstadosAdministrativos.obtenerElNombre(estadoNombre)?.icono ?? null,
};