import { Users, BarChart2, Activity, HeartMinus } from 'lucide-react'

export const DataCard = [
    {
        nombre : 'Citas Hoy',
        icon: Activity,
        valor: '10',
        color: '#6366F1'
    },
    {
        nombre : 'Pacientes',
        icon: Users,
        valor: '1,234',
        color: '#8B5CF6'
    },
    {
        nombre : 'Citas Pendientes Hoy',
        icon: HeartMinus,
        valor: '4',
        color: '#EC4899'
    },
    {
        nombre : 'Facturación del día',
        icon: BarChart2,
        valor: '$12.600',
        color: '#10B981'
    }
]