import { Users, Activity, UserCheck, UserX } from 'lucide-react';

export const DataCardDoctores = ({
    totalDoctores = 0,
    doctoresNuevos = 0,
    doctoresActivos = 0,
    doctoresInactivos = 0
}) => [
    {
        nombre: 'Doctores',
        icon: Users,
        valor: totalDoctores.toString(),
        color: '#8B5CF6'
    },
    {
        nombre: 'Doctores Nuevos',
        icon: Activity,
        valor: doctoresNuevos.toString(),
        color: '#2fa8f0'
    },
    {
        nombre: 'Doctores Activos',
        icon: UserCheck,
        valor: doctoresActivos.toString(),
        color: '#3adc33'
    },
    {
        nombre: 'Doctores Inactivos',
        icon: UserX,
        valor: doctoresInactivos.toString(),
        color: '#f00808'
    }
];
