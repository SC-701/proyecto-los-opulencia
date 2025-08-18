import { Accessibility, ClipboardMinus, ClipboardPlus, Pill } from "lucide-react";

export const DataCardServicios=  ({ServiciosTotales = 0, ServiciosActivos = 0, ServiciosInactivos = 0, ServiciosSumaCosto = 0}) => [
    {
        nombre: "Servicios Totales",
        icon: Accessibility,
        valor: ServiciosTotales.toString(),
        color: '#13e5e2ff'
    },
    {
        nombre: "Servicios Activos",
        icon: ClipboardPlus,
        valor: ServiciosActivos.toString(),
        color: '#3adc33'
    },
    {
        nombre: "Servicios Inactivos",
        icon: ClipboardMinus,
        valor: ServiciosInactivos.toString(),
        color: '#f00808'
    },
    {
        nombre: "Costo total de Servicios",
        icon: Pill,
        valor: `₡${ServiciosSumaCosto.toString()}`,
        color: '#e10de8ff'
    }
]