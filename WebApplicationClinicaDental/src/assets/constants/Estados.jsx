import { Ban, CalendarCheck, CircleAlert } from "lucide-react";

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
        EstadosCitas.obtenerElNombre(estadoNombre)?.color ?? "bg-gray-100 text-gray-800",

    obtenerIcono: (estadoNombre) =>
        EstadosCitas.obtenerElNombre(estadoNombre)?.icono ?? null

}


export const EstadoFacturacion = {
    estados: [
{
nombre: "Pendiente",
color: "bg-yellow-100 text-yellow-800",
icono: <CircleAlert size={20} className="text-yellow-500" />,
id: 4,
},

{
    nombre: "Completada",
    color: "bg-green-100 text-green-800",
    icono: <CalendarCheck size={20} className="text-green-500" />,
    id: 3,
},
{
    nombre: "Cancelada",
    color: "bg-red-100 text-red-800",
    icono: <Ban size={20} className="text-red-500" />,
    id: 5,
},
],

obtenerElNombre: (nombre) =>
    EstadoFacturacion.estados.find((e) => e.nombre === nombre),

conversionEstado: (estadoNombre) =>
    EstadoFacturacion.obtenerElNombre(estadoNombre)?.id ?? null,

obtenerColor: (estadoNombre) =>
    EstadoFacturacion.obtenerElNombre(estadoNombre)?.color ?? "bg-gray-100 text-gray-800",

obtenerIcono: (estadoNombre) =>
    EstadoFacturacion.obtenerElNombre(estadoNombre)?.icono ?? null
}   