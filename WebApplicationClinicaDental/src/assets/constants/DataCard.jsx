import {
  Users,
  Activity,
  Clipboard,
  AlertTriangle,
  PackageSearch,
  PackageCheck,
  BadgeCent,
  ChartNoAxesCombined,
  WalletMinimal,
  Landmark,
  UserCog,
  UserSearch,
} from "lucide-react";


//! Info DashBoard





export const DataCardInventarios = [
  {
    nombre: "Total de insumos",
    icon: Clipboard,
    valor: "120",
    color: "#36f0c3",
  },
  {
    nombre: "Insumos por agotarse",
    icon: AlertTriangle,
    valor: "7",
    color: "#facc15", 
  },
  {
    nombre: "Insumos vencidos",
    icon: PackageSearch,
    valor: "3",
    color: "#f87171", 
  },
  {
    nombre: "Insumos disponibles",
    icon: PackageCheck,
    valor: "110",
    color: "#34d399", 
  }
];

export const DataCardPacientes = [
    {
        nombre: 'Pacientes',
        icon: Users,
        valor: '1,234',
        color: '#8B5CF6'
    },
    {
        nombre: 'Pacientes Nuevos',
        icon: Activity,
        valor: '5', 
        color: '#2fa8f0'
    },
    {
        nombre: 'Pacientes Activos',
        icon: Users,
        valor: '120', 
        color: '#3adc33'
    },
    {
        nombre: 'Pacientes Inactivos',
        icon: Users,
        valor: '32', 
        color: '#f00808'
    }
];

/*
export const DataCardFacturacion = [
  {
    nombre: "Ingresos totales",
    icon: BadgeCent,
    valor: "$100.000",
    color: "#10B981",
  },
  {
    nombre: "Facturas Pagadas",
    icon: ChartNoAxesCombined,
    valor: "130",
    color: "#5804ff",
  },
  {
    nombre: "Facturas Pendientes",
    icon: Landmark,
    valor: "12",
    color: "#ffe104",
  },
];
*/

export const DataCardAdministrativo = [
  {
    nombre: "Administrativos",
    icon: Users,
    valor: "1,234",
    color: "#8B5CF6",
  },
  {
    nombre: "Administradores",
    icon: UserCog,
    valor: "5",
    color: "#2fa8f0",
  },
  {
    nombre: "Recepcionistas",
    icon: UserSearch,
    valor: "120",
    color: "#3adc33",
  },
  {
    nombre: "Administrativos Inactivos",
    icon: Users,
    valor: "32",
    color: "#f00808",
  },
];