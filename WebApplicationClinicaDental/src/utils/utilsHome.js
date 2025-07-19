import { Activity, BarChart2, HeartMinus, Users } from "lucide-react";

export const DataCard = ({ CitasHoy = 0, pacientes = 0, citasPendientesHoy = 0, facturacionDiaria = 0 }) => [
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
        valor: citasPendientesHoy.toString(),
        color: "#EC4899",
    },
    {
        nombre: "Facturación del día",
        icon: BarChart2,
        valor: "$12.600",
        color: "#10B981",
    },
];