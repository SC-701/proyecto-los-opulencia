import { Clipboard, AlertTriangle, PackageSearch, PackageCheck, PackageX } from "lucide-react";

export const DataCardInventarios = ({
  total = 0,
  porVencer = 0,
  vencidos = 0,
  disponibles = 0,
  agotados = 0,
}) => [
  {
    nombre: "Insumos por vencer",
    icon: AlertTriangle,
    valor: porVencer.toString(),
    color: "#eeb833",
  },
  {
    nombre: "Insumos vencidos",
    icon: PackageSearch,
    valor: vencidos.toString(),
    color: "#f00808",
  },
  {
    nombre: "Insumos disponibles",
    icon: PackageCheck,
    valor: disponibles.toString(),
    color: "#3adc33",
  },
  {
    nombre: "Insumos agotados",   
    icon: PackageX,
    valor: agotados.toString(),
    color: "#ff6666",
  },
];
