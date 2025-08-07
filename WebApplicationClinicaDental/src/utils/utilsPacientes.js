import { Users, Activity, UserCheck, UserX } from 'lucide-react';

export const DataCardPacientes = ({
    totalPacientes = 0,
    pacientesNuevos = 0,
    pacientesActivos = 0,
    pacientesInactivos = 0
}) => [
    {
        nombre: 'Pacientes',
        icon: Users,
        valor: totalPacientes.toString(),
        color: '#8B5CF6'
    },
    {
        nombre: 'Pacientes Nuevos',
        icon: Activity,
        valor: pacientesNuevos.toString(),
        color: '#2fa8f0'
    },
    {
        nombre: 'Pacientes Activos',
        icon: UserCheck,
        valor: pacientesActivos.toString(),
        color: '#3adc33'
    },
    {
        nombre: 'Pacientes Inactivos',
        icon: UserX,
        valor: pacientesInactivos.toString(),
        color: '#f00808'
    }
];
