import {
  ChartNoAxesCombined,
  HeartPlus,
  House,
  NotebookPen,
  PackageOpen,
  Stethoscope,
  Users,
} from "lucide-react";

export const sidebar_item = [
  {
    nombre: "Inicio",
    icon: House,
    color: "#375CA6",
    path: "/",
  },
  {
    nombre: "Citas",
    icon: NotebookPen,
    color: "#375CA6",
    path: "/citas",
  },
  {
    nombre: "Pacientes",
    icon: Users,
    color: "#375CA6",
    path: "/pacientes",
  },
  {
    nombre: "Inventario",
    icon: PackageOpen,
    color: "#375CA6",
    path: "/Inventario",
  },
  {
    nombre: "Administrativos",
    icon: Stethoscope,
    color: "#375CA6",
    path: "/administrativos",
  },
  {
    nombre: "Consultorios",
    icon: HeartPlus,
    color: "#375CA6",
    path: "/Consultorios",
  },
  {
    nombre: "Facturación",
    icon: ChartNoAxesCombined,
    color: "#375CA6",
    path: "/Facturacion",
  },
];
