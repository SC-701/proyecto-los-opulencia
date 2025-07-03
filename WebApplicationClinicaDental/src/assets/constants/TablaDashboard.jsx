import { createColumnHelper } from "@tanstack/react-table";
import Acciones from "../../components/Acciones/Acciones";
import { EstadoFacturacion, EstadosCitas } from "./Estados.jsx";
import { Ban, CalendarCheck, CircleAlert } from "lucide-react";



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
export const columnsCitas = (editarEstadoCita) =>
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
        columnHelper.accessor("hora", {
            header: "Hora"
        }),
        columnHelper.accessor("estado", {
            header: "Estado",
            cell: ({ getValue }) => {
                const estado = getValue();
                const color = EstadosCitas.obtenerColor(estado);

                return (
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                        {estado}
                    </span>
                );
            },
        }),
        columnHelper.accessor("acciones", {
            header: "Acciones",
            cell: ({ row }) => {
                const { idCita, estado } = row.original;
                return (
                    <Acciones
                        estado={estado}
                        onToggleEstado={() => editarEstadoCita(idCita, EstadosCitas.conversionEstado(estado))}
                        onEditar={() => console.log(`Editar cita con ID: ${idCita}`)}
                    />
                )
            },
        })
    ]



//! Columnas Tabla Facturas
export const columnsFacturas = (editarEstadoFactura) =>
    [
        columnHelper.accessor("factura", {
            header: "Factura"
        }),

        columnHelper.accessor("fecha", {
            header: "Fecha"
        }),
        columnHelper.accessor("estado", {
            header: "Estado",
            cell: ({ getValue }) => {
                const estado = getValue();
                const color = EstadoFacturacion.obtenerColor(estado);
    
                return (
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                        {estado}
                    </span>
                );
            },
        }),
        columnHelper.accessor("acciones", {
            header: "Acciones",
            cell: ({ row }) => {
                const { idFactura, estado } = row.original;
                return (
                    <Acciones
                        estado={estado}
                        onToggleEstado={() => editarEstadoFactura(idFactura, EstadoFacturacion.conversionEstado(estado))}
                        onEditar={() => console.log(`Editar cita con ID: ${idCita}`)}
                    />
                )
            },
        })
    ]

    
            columnHelper.accessor("acciones", {
                header: "Acciones",
                cell: ({ row }) => {
                    const { idCita, estado } = row.original;
                    return (
                        <Acciones
                            estado={estado}
                            onToggleEstado={() => editarEstadoCita(idCita, EstadosCitas.conversionEstado(estado))}
                            onEditar={() => console.log(`Editar cita con ID: ${idCita}`)}
                        />
                    )
                },
            })



//tabla pacientes 
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



//! Info Tabla Consultorios
export const dataConsultorios = [
    {
        factura: "Consultorio 1",
        nombre: "Consultorio Central",
        fecha: "Piso 1, Ala A",
        estado: "Activo",
    },
    {
        factura: "Consultorio 2",
        nombre: "Consultorio Norte",
        fecha: "Piso 2, Ala B",
        estado: "Inactivo",
    },
    {
        factura: "Consultorio 3",
        nombre: "Consultorio Pediátrico",
        fecha: "Piso 3, Ala C",
        estado: "Mantenimiento",
    },
    {
        factura: "Consultorio 4",
        nombre: "Consultorio Odontología",
        fecha: "Piso 2, Ala D",
        estado: "Activo",
    },
    {
        factura: "Consultorio 5",
        nombre: "Consultorio Emergencias",
        fecha: "Piso 1, Ala E",
        estado: "Reservado",
    },
]
//! Columnas Tabla Consultorios
export const columnsConsultorios = [
    columnHelper.accessor("factura", {
        header: "ID Consultorio" // o simplemente "Consultorio"
    }),
    columnHelper.accessor("nombre", {
        header: "Nombre"
    }),
    columnHelper.accessor("fecha", {
        header: "Ubicación" // estamos usando "fecha" para ubicación, por compatibilidad
    }),
    columnHelper.accessor("estado", {
        header: "Estado",
        cell: ({ getValue }) => {
            const estado = getValue();
            const color =
                {
                    Activo: "bg-green-100 text-green-800",
                    Inactivo: "bg-yellow-100 text-yellow-800",
                    Mantenimiento: "bg-blue-100 text-blue-800",
                    Reservado: "bg-purple-100 text-purple-800",
                }[estado] || "bg-gray-100 text-gray-800";

            return (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                    {estado}
                </span>
            );
        },
    }),
];



//! Info Tabla Administración
export const dataAdministrativos = [
    {
        nombre: "Juan Pérez",
        telefono: "1234-5678",
        email: "Juan@gmail.com",
        estado: "Activo",
    },
    {
        nombre: "María López",
        telefono: "1234-5678",
        email: "María@gmail.com",
        estado: "Inactivo",
    },
    {
        nombre: "Carlos Ruiz",
        telefono: "1234-5678",
        email: "Carlos@gmail.com",
        estado: "Activo",
    },
    {
        nombre: "Ana Torres",
        telefono: "1234-5678",
        email: "Ana@gmail.com",
        estado: "Inactivo",
    },
];


//! Columnas Tabla Administración
export const columnsAdministrativos =
    [
        columnHelper.accessor("nombre", {
            header: "Nombre"
        }),
        columnHelper.accessor("telefono", {
            header: "Teléfono"
        }),
        columnHelper.accessor("email", {
            header: "Correo"
        }),
        columnHelper.accessor("estado", {
            header: "Estado",
            cell: ({ getValue }) => {
                const estado = getValue();
                const color =
                    {
                        Activo: "bg-green-100 text-green-800",
                        Inactivo: "bg-red-100 text-red-800",
                    }[estado] || "bg-gray-100 text-gray-800";

                return (
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
                        {estado}
                    </span>
                );
            },
        }),
    ];