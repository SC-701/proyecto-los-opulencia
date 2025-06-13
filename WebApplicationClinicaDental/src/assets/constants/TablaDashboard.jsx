import { createColumnHelper } from "@tanstack/react-table";

//!Tabla Dashboard
const columnHelper = createColumnHelper();

export const columns = [
    columnHelper.accessor("paciente", {
        header: "Paciente",
        cell: (data) => data.getValue(),
    }),
    columnHelper.accessor("hora", {
        header: "Hora",
    }),
    columnHelper.accessor("servicio", {
        header: "Servicio",
    }),
    columnHelper.accessor("estado", {
        header: "Estado",
        cell: ({ getValue }) => {
            const estado = getValue();
            const color =
                {
                    Confirmada: "bg-green-100 text-green-800",
                    Pendiente: "bg-yellow-100 text-yellow-800",
                    Cancelada: "bg-red-100 text-red-800",
                }[estado] || "bg-gray-100 text-gray-800";

            return (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                    {estado}
                </span>
            );
        },
    }),
];

const columnHelperInventario = createColumnHelper();
export const columnsInventario = [
    columnHelperInventario.accessor("insumo", {
        header: "Insumo",
    }),
    columnHelperInventario.accessor("categoria", {
        header: "Categoría",
    }),
    columnHelperInventario.accessor("cantidad", {
        header: "Cantidad",
    }),
    columnHelperInventario.accessor("unidad", {
        header: "Unidad",
    }),
    columnHelperInventario.accessor("vencimiento", {
        header: "Vencimiento",
    }),
    columnHelperInventario.accessor("estado", {
        header: "Estado",
        cell: ({ getValue }) => {
            const estado = getValue();
            const color =
                {
                    Disponible: "bg-green-100 text-green-800",
                    "Por vencer": "bg-yellow-100 text-yellow-800",
                    Agotado: "bg-red-100 text-red-800",
                    Vencido: "bg-purple-100 text-purple-800",
                }[estado] || "bg-gray-100 text-gray-800";

            return (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                    {estado}
                </span>
            );
        },
    }),
];



//! Info Tabla Dashboard
export const data = [
    {
        paciente: "Juan Pérez",
        hora: "09:00 AM",
        servicio: "Limpieza dental",
        estado: "Confirmada",
    },
    {
        paciente: "María López",
        hora: "10:30 AM",
        servicio: "Extracción",
        estado: "Pendiente",
    },
    {
        paciente: "Carlos Ruiz",
        hora: "12:00 PM",
        servicio: "Revisión",
        estado: "Cancelada",
    },
    {
        paciente: "Ana Torres",
        hora: "02:00 PM",
        servicio: "Ortodoncia",
        estado: "Confirmada",
    },
];

//! Info Tabla Inventario
export const dataInventario = [
    {
        insumo: "Guantes de látex",
        categoria: "Protección",
        cantidad: 150,
        unidad: "pares",
        vencimiento: "2025-12-31",
        estado: "Disponible",
    },
    {
        insumo: "Anestesia local",
        categoria: "Medicamentos",
        cantidad: 20,
        unidad: "ampollas",
        vencimiento: "2024-11-15",
        estado: "Por vencer",
    },
    {
        insumo: "Hilo dental",
        categoria: "Higiene",
        cantidad: 0,
        unidad: "rollos",
        vencimiento: "—",
        estado: "Agotado",
    },
    {
        insumo: "Mascarillas quirúrgicas",
        categoria: "Protección",
        cantidad: 80,
        unidad: "unidades",
        vencimiento: "2026-03-10",
        estado: "Disponible",
    },
    {
        insumo: "Algodón estéril",
        categoria: "Consumo",
        cantidad: 10,
        unidad: "bolsas",
        vencimiento: "2023-10-01",
        estado: "Vencido",
    },
];


//! Columnas Tabla Citas
export const columnsCitas = 
[
    columnHelper.accessor("paciente", {
        header: "Paciente"
    }),
    columnHelper.accessor("servicio", {
        header: "Servicio"
    }),
    columnHelper.accessor("doctor", {
        header: "Doctor"
    }),
    columnHelper.accessor("fecha", {
        header: "Fecha"
    }),
    columnHelper.accessor("estado", {
        header: "Estado",
        cell: ({ getValue }) => {
            const estado = getValue();
            const color =
                {
                    Confirmada: "bg-green-100 text-green-800",
                    Pendiente: "bg-yellow-100 text-yellow-800",
                    Cancelada: "bg-red-100 text-red-800",
                }[estado] || "bg-gray-100 text-gray-800";

            return (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                    {estado}
                </span>
            );
        },
    }),
]

export const dataCitas = [
    {
        paciente: "Juan Pérez",
        servicio: "Limpieza dental",
        doctor: "Dr. Juan Pérez",
        fecha: "10/10/2022",
        estado: "Confirmada",
    },
    {
        paciente: "María López",
        servicio: "Extracción",
        doctor: "Dr. María López",
        fecha: "10/10/2022",
        estado: "Pendiente",
    },
    {
        paciente: "Carlos Ruiz",
        servicio: "Revisión",
        doctor: "Dr. Carlos Ruiz",
        fecha: "10/10/2022",
        estado: "Cancelada",
    },
    {
        paciente: "Ana Torres",
        servicio: "Ortodoncia",
        doctor: "Dr. Ana Torres",
        fecha: "10/10/2022",
        estado: "Confirmada",
    },
];


const columnHelperPacientes = createColumnHelper()

export const columnsPacientes = [
    columnHelperPacientes.accessor('cedula', {
        header: 'Cédula',
    }),
    columnHelperPacientes.accessor('nombre', {
        header: 'Nombre',
    }),
    columnHelperPacientes.accessor('correo', {
        header: 'Correo',
    }),
    columnHelperPacientes.accessor('telefono', {
        header: 'Teléfono',
    }),
    columnHelperPacientes.accessor('estado', {
        header: 'Estado',
        cell: ({ getValue }) => {
            const estado = getValue()
            const color = {
                Activo: 'bg-green-100 text-green-800',
                Inactivo: 'bg-red-100 text-red-800',
            }[estado] || 'bg-gray-100 text-gray-800'

            return (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                    {estado}
                </span>
            )
        }
    }),
]

export const dataPacientes = [
    {
        cedula: '123456789',
        nombre: 'Arriana Baker',
        correo: 'Arriana@gmail.com',
        telefono: '1234-5678',
        estado: 'Activo',
    },
    {
        cedula: '123456789',
        nombre: 'Emanuel Perez',
        correo: 'Emanuel@gmail.com',
        telefono: '1234-5678',
        estado: 'Inactivo',
    },
]


//! Info Tabla Facturas
export const dataFacturas = [
    {
        factura: "Factura 1",
        nombre: "Juan Pérez",
        fecha: "10/10/2022",
        estado: "Realizada",
    },
    {
        factura: "Factura 2",
        nombre: "María López",
        fecha: "10/10/2022",
        estado: "Pendiente",
    },
    {
        factura: "Factura 3",
        nombre: "Carlos Ruiz",
        fecha: "10/10/2022",
        estado: "Vencida",
    },
    {
        factura: "Factura 4",
        nombre: "Ana Torres",
        fecha: "10/10/2022",
        estado: "Cancelada",
    },
    {
        factura: "Factura 5",
        nombre: "Luis Gómez",
        fecha: "10/10/2022",
        estado: "Realizada",
    },
    {
        factura: "Factura 6",
        nombre: "Juan Pérez",
        fecha: "10/10/2022",
        estado: "Realizada",
    },
];


//! Columnas Tabla Facturas
export const columnsFacturas = 
[
    columnHelper.accessor("factura", {
        header: "Factura"
    }),
    columnHelper.accessor("nombre", {
        header: "Nombre"
    }),
    columnHelper.accessor("fecha", {
        header: "Fecha"
    }),
    columnHelper.accessor("estado", {
        header: "Estado",
        cell: ({ getValue }) => {
            const estado = getValue();
            const color =
                {
                    Realizada: "bg-green-100 text-green-800",
                    Pendiente: "bg-yellow-100 text-yellow-800",
                    Cancelada: "bg-red-100 text-red-800",
                }[estado] || "bg-gray-100 text-gray-800";

            return (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                    {estado}
                </span>
            );
        },
    }),
]