import { Users, BarChart2, Activity, HeartMinus, CircleCheckBig, Clock4, Clipboard, CircleCheck, CircleX } from 'lucide-react'


//! Info DashBoard
export const DataCard = [
    {
        nombre: 'Citas Hoy',
        icon: Activity,
        valor: '10',
        color: '#6366F1'
    },
    {
        nombre: 'Pacientes',
        icon: Users,
        valor: '1,234',
        color: '#8B5CF6'
    },
    {
        nombre: 'Citas Pendientes Hoy',
        icon: HeartMinus,
        valor: '4',
        color: '#EC4899'
    },
    {
        nombre: 'Facturación del día',
        icon: BarChart2,
        valor: '$12.600',
        color: '#10B981'
    }
]

//! Info DashBoard Citas

export const DataCardCitas = [
    {
        nombre: 'Citas Totales',
        icon: Clipboard,
        valor: '10',
        color: '#36f0c3'
    },
    {
        nombre: 'Citas Pendientes',
        icon: Clock4,
        valor: '4',
        color: '#eeb833'
    },
    {
        nombre: 'Citas Completadas',
        icon: CircleCheck,
        valor: '6',
        color: '#3adc33'
    },
    {
        nombre: 'Citas Canceladas',
        icon: CircleX,
        valor: '2',
        color: '#f00808'
    }
]