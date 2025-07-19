import {
  Users,
  BarChart2,
  Activity,
  HeartMinus,
  CircleCheckBig,
  Clock4,
  Clipboard,
  CircleCheck,
  CircleX,
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
import { useCitasDiarias } from "../../hooks/useCita";
import Citas from "../../pages/Citas";

//! Info DashBoard



export const DataCard = ({CitasHoy = 0, pacientes = 0, citasPendientesHoy = 0, facturacionDiaria = 0}) => [
  {
    nombre: "Citas Hoy",
    icon: Activity,
    valor: CitasHoy.toString(),
    color: "#6366F1",
  },
  {
    nombre: "Pacientes",
    icon: Users,
    valor: "1,234",
    color: "#8B5CF6",
  },
  {
    nombre: "Citas Pendientes Hoy",
    icon: HeartMinus,
    valor: "4",
    color: "#EC4899",
  },
  {
    nombre: "Facturación del día",
    icon: BarChart2,
    valor: "$12.600",
    color: "#10B981",
  },
];

//! Info DashBoard Citas



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

export const DataCardFacturacion = [
  {
    nombre: "Ingresos totales",
    icon: BadgeCent,
    valor: "$100.000",
    color: "#10B981",
  },
  {
    nombre: "Facturas Realizadas",
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
  {
    nombre: "Facturas Vencidas",
    icon: WalletMinimal,
    valor: "18",
    color: "#d107a3",
  },
];

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