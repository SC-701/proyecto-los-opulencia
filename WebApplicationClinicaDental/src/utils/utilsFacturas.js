import { Clipboard} from 'lucide-react';
export const DataCardFacturacion = ({totalFacturas = 0}) => [
  
  {
    nombre: "Facturas Totales",
    icon: Clipboard,
    valor: totalFacturas.toString(),
    color: "#36f0c3",
  },
  
];
