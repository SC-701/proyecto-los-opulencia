import {
    flexRender,
} from '@tanstack/react-table'
import { ArrowBigLeftDash, ArrowBigRightDash, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useTabla } from '../../hooks/useTabla'



const Tabla = ({ data, columns, pageSizeInicial = 10 }) => {

    const { table } = useTabla(data, columns, pageSizeInicial)


    return (
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white p-4">
            <table className="min-w-full text-sm text-left">
                <thead className="text-black font-bold text-xs text-[1rem]">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="px-4 py-2">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className="bg-white">
                            {row.getVisibleCells().map(cell => (
                                <td
                                    key={cell.id}
                                    className="px-4 py-2">
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
