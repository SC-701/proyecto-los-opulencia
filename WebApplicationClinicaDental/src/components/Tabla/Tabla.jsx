import React, { useState } from 'react'
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
    getPaginationRowModel,
} from '@tanstack/react-table'
import { ArrowBigLeftDash, ArrowBigRightDash, ChevronsLeft, ChevronsRight } from 'lucide-react'


const columnHelper = createColumnHelper() //! Utilidad para que se definan las columnas de la tabla

const columns = [
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

const data = [
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
]

const Tabla = () => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    })


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination, 
        },
    })
    return (
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white p-4">
            {/* Título */}


            {/* Tabla */}
            <table className="min-w-full text-sm text-left">
                {/* Encabezados */}
                <thead className="text-black font-bold text-xs text-[1rem]">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="px-4 py-2">
                                    {/* Renderiza el contenido del header */}
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                {/* Cuerpo */}
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="bg-white">
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className="px-4 py-2"
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm">
                    Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        <ChevronsLeft />
                    </button>
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        <ArrowBigLeftDash />
                    </button>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        <ArrowBigRightDash />
                    </button>
                    <button
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        <ChevronsRight />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Tabla
