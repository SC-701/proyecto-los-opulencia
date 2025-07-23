import React, { useState } from 'react'
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
} from '@tanstack/react-table'


export const useTabla = (data, columns, pageSizeInicial = 10) => {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: pageSizeInicial,
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
        autoResetPageIndex: false,
        autoResetFilters: false,
        autoResetSorting: false,
    })

    return {
        table,
        pagination,
        setPagination,
    }
}
