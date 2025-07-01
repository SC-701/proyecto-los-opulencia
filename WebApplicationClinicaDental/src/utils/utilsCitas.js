import { Clipboard, Clock4, CircleCheck, CircleX } from 'lucide-react';
export const DataCardCitas = ({totalCitas = 0, citasPendientes = 0, citasCompletadas = 0, citasCanceladas= 0}) => [
  
  {
    nombre: "Citas Totales",
    icon: Clipboard,
    valor: totalCitas.toString(),
    color: "#36f0c3",
  },
  {
    nombre: "Citas Pendientes",
    icon: Clock4,
    valor: citasPendientes.toString(),
    color: "#eeb833",
  },
  {
    nombre: "Citas Completadas",
    icon: CircleCheck,
    valor: citasCompletadas.toString(),
    color: "#3adc33",
  },
  {
    nombre: "Citas Canceladas",
    icon: CircleX,
    valor: citasCanceladas.toString(),
    color: "#f00808",
  },
];
