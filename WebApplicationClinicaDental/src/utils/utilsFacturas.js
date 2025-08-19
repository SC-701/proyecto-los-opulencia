import { Check, Clipboard, Clock4} from 'lucide-react';
export const DataCardFacturacion = ({TotalFacturas = 0, FacturasPagadas = 0, FacturasPorPagar = 0 }) => [
  
  {
    nombre: "Facturas Totales",
    icon: Clipboard,
    valor: TotalFacturas.toString(),
    color: "#36f0c3",
  },
    {
    nombre: "Facturas Pagadas",
    icon: Check,
    valor: FacturasPagadas.toString(),
    color: "#36f0c3",
  },
    {
    nombre: "Facturas Pendientes",
    icon: Clock4,
    valor: FacturasPorPagar.toString(),
    color: "#36f0c3",
  },
  
];
