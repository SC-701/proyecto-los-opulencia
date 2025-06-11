import {
    createColumnHelper,
} from '@tanstack/react-table'

//!Tabla Dashboard
const columnHelper = createColumnHelper()

export const columns = [
    columnHelper.accessor('paciente',
        {
            header: 'Paciente',
            cell: data => data.getValue(),
        }),
    columnHelper.accessor('hora', {
        header: 'Hora',
    }),
    columnHelper.accessor('servicio', {
        header: 'Servicio',
    }),
    columnHelper.accessor('estado', {
        header: 'Estado',
        cell: ({ getValue }) => {
            const estado = getValue()
            const color = {
                Confirmada: 'bg-green-100 text-green-800',
                Pendiente: 'bg-yellow-100 text-yellow-800',
                Cancelada: 'bg-red-100 text-red-800',
            }[estado] || 'bg-gray-100 text-gray-800'

            return (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                    {estado}
                </span>
            )
        }
    }),
]


//! Info Tabla Dashboard
export const data = [
    {
        paciente: 'Juan Pérez',
        hora: '09:00 AM',
        servicio: 'Limpieza dental',
        estado: 'Confirmada',
    },
    {
        paciente: 'María López',
        hora: '10:30 AM',
        servicio: 'Extracción',
        estado: 'Pendiente',
    },
    {
        paciente: 'Carlos Ruiz',
        hora: '12:00 PM',
        servicio: 'Revisión',
        estado: 'Cancelada',
    },
    {
        paciente: 'Ana Torres',
        hora: '02:00 PM',
        servicio: 'Ortodoncia',
        estado: 'Confirmada',
    }
]


