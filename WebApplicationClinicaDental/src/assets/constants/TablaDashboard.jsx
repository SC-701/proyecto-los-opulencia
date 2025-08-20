import { createColumnHelper } from "@tanstack/react-table";
import Acciones from "../../components/Acciones/Acciones";
import {
  EstadoFacturacion,
  EstadosCitas,
  EstadosServicios,
  EstadosPacientes,
  EstadosDoctores,
  EstadosInventario,
  EstadosConsultorios,
  EstadosAdministrativos ,
} from "./Estados.jsx";
import { Ban, CalendarCheck, CircleAlert } from "lucide-react";
import ModalEditar from "../../components/Modals/ModalEditarCitas/ModalEditar.jsx";
import { Link } from "react-router-dom";

//!Tabla Dashboard
const columnHelper = createColumnHelper();

export const columns = (editarEstadoCita, onEditarClick) => [
  columnHelper.accessor("paciente", {
    header: "Paciente",
    cell: ({ getValue, row }) => {
      const paciente = getValue();
      const { idCita } = row.original;
      const handleEditarClick = () => {
        onEditarClick(idCita);
        setTimeout(() => {
          document.getElementById("my_modal_info_extra").checked = true;
        }, 50);
      };
      return (
        <label
          htmlFor="my_modal_info_extra"
          className="hover:font-bold duration-100 delay-50 ease-in-out"
          style={{ cursor: "pointer" }}
          onClick={handleEditarClick}
        >
          {paciente}
        </label>
      );
    },
  }),
  columnHelper.accessor("servicio", {
    header: "Servicio",
  }),
  columnHelper.accessor("doctor", {
    header: "Doctor",
  }),
  columnHelper.accessor("fecha", {
    header: "Fecha",
  }),
  columnHelper.accessor("hora", {
    header: "Hora",
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
          manager={EstadosCitas}
          estado={estado}
          onToggleEstado={() =>
            editarEstadoCita(idCita, EstadosCitas.conversionEstado(estado))
          }
          onEditar={() => onEditarClick(idCita)}
          modalNameEditar="my_modal_edit"
        />
      );
    },
  }),
];

export const columnsServicios = (editarEstadoServicio, onEditarClick) => [
  columnHelper.accessor("nombre", {
    header: "Servicio",
  }),
  columnHelper.accessor("descripcion", {
    header: "Descripción",
  }),
  columnHelper.accessor("precio", {
    header: "Costo",
  }),
  columnHelper.accessor("estado", {
    header: "Estado",
    cell: ({ getValue }) => {
      const estado = getValue();
      const color = EstadosServicios.obtenerColor(estado);

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
      const { id, estado } = row.original;
      return (
        <Acciones
          manager={EstadosServicios}
          estado={estado}
          onToggleEstado={() =>
            editarEstadoServicio(id, EstadosServicios.conversionEstado(estado))
          }
          onEditar={() => onEditarClick(id)}
          modalNameEditar="my_modal_editar_servicio"
        />
      );
    },
  }),
];

export const columnsInventario = (
  editarEstadoInventario,
  onEditarClick,
  onEliminar
) => [
  columnHelper.accessor("producto", { header: "Insumo" }),
  columnHelper.accessor("categoria", { header: "Categoría" }),
  columnHelper.accessor("cantidad", { header: "Cantidad" }),
  columnHelper.accessor("unidad", { header: "Unidad" }),

  columnHelper.accessor("fechaVencimiento", {
    header: "Vencimiento",
    cell: ({ getValue }) => {
      const fecha = getValue();
      if (!fecha) return "—";
      const d = new Date(fecha);
      return isNaN(d) ? "—" : d.toISOString().split("T")[0];
    },
  }),

  columnHelper.accessor("estado", {
    header: "Estado",
    cell: ({ getValue }) => {
      const estado = getValue();
      const color = EstadosInventario.obtenerColor(estado);
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
      const { idInventario, estado } = row.original;

      return (
        <Acciones
          manager={EstadosInventario}
          estado={estado}
          onToggleEstado={() => {
            const idActual = EstadosInventario.conversionEstado(estado);
            const nextId = EstadosInventario.siguienteId(idActual);
            editarEstadoInventario(idInventario, nextId);
          }}
          onEditar={() => onEditarClick(idInventario)}
          onEliminar={() => onEliminar(idInventario)}
          modalNameEditar="modal_editar_inventario"
        />
      );
    },
  }),
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
export const columnsCitas = (editarEstadoCita, onEditarClick) => [
  columnHelper.accessor("paciente", {
    header: "Paciente",
    cell: ({ getValue, row }) => {
      const paciente = getValue();
      const { idCita } = row.original;

      return (
        <label
          htmlFor="my_modal_info_extra"
          className="hover:font-bold duration-100 delay-50 ease-in-out"
          style={{ cursor: "pointer" }}
          onClick={() => onEditarClick(idCita)}
        >
          {paciente}
        </label>
      );
    },
  }),
  columnHelper.accessor("servicio", {
    header: "Servicio",
  }),
  columnHelper.accessor("doctor", {
    header: "Doctor",
  }),
  columnHelper.accessor("fecha", {
    header: "Fecha",
  }),
  columnHelper.accessor("hora", {
    header: "Hora",
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
        <>
          <Acciones
            manager={EstadosCitas}
            estado={estado}
            onToggleEstado={() =>
              editarEstadoCita(idCita, EstadosCitas.conversionEstado(estado))
            }
            onEditar={() => onEditarClick(idCita)}
            modalNameEditar="my_modal_edit"
          />
        </>
      );
    },
  }),
];

//! Columnas Tabla Facturas
export const columnsFacturas = (editarEstadoFactura, onEditarClick, onPagarClick) =>
    [

        columnHelper.accessor("servicio", {
            header: "Servicio"
        }),
        columnHelper.accessor("doctor", {
            header: "Doctor"
        }),
        columnHelper.accessor("paciente", {
            header: "Paciente"
        }),

        columnHelper.accessor("fecha", {
            header: "Fecha"
        }),
        columnHelper.accessor("subtotal", {
            header: "subtotal"
        }),
        columnHelper.accessor("total", {
            header: "Total",
            cell: ({ getValue }) => {
                const total = getValue();
                return (
                    <>   {total == 0 ? 
                     <span className={`px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-800`}>
                        pagado
                    </span> 
                    : total}
                    </>
                );
            },
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
        columnHelper.accessor("pagar", {
            header: "Pagar",
            cell: ({ row }) => {
                const { idFactura } = row.original;
                return (
                    <>
                        <Acciones
                          
                            onEditarPagarFactura={() => onPagarClick(idFactura)}
                            modalNameEditarPago="my_modal_pagar"
                        />
                    </>
                )
            },
        }),

  columnHelper.accessor("acciones", {
    header: "Acciones",
    cell: ({ row }) => {
      const { idFactura, estado } = row.original;
      return (
        <>
          <Acciones
            manager={EstadoFacturacion}
            estado={estado}
            onToggleEstado={() =>
              editarEstadoFactura(
                idFactura,
                EstadoFacturacion.conversionEstado(estado)
              )
            }
            onEditar={() => onEditarClick(idFactura)}
            modalNameEditar="my_modal_edit"
          />
        </>
      );
    },
  }),
];

//tabla pacientes

export const columnsPacientes = (editarEstadoPaciente, onEditarClick) => [
  columnHelper.accessor("nombre", {
    header: "Paciente",
    cell: ({ getValue, row }) => {
      const nombre = getValue();
      const { idPaciente } = row.original;

      return (
        <label
          htmlFor="modal_editar_paciente"
          className="hover:font-bold duration-100 delay-50 ease-in-out"
          style={{ cursor: "pointer" }}
          onClick={() => onEditarClick(idPaciente)}
        >
          {nombre}
        </label>
      );
    },
  }),
  columnHelper.accessor("cedula", {
    header: "Cédula",
  }),
  columnHelper.accessor("email", {
    header: "Correo",
  }),
  columnHelper.accessor("telefono", {
    header: "Teléfono",
  }),
  columnHelper.accessor("estado", {
    header: "Estado",
    cell: ({ getValue }) => {
      const estado = getValue();
      const color = EstadosPacientes.obtenerColor(estado);

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
      const { idPaciente, estado } = row.original;

      return (
        <Acciones
          manager={EstadosPacientes}
          estado={estado}
          onToggleEstado={() => {
            editarEstadoPaciente(
              idPaciente,
              EstadosPacientes.conversionEstado(estado)
            );
          }}
          onEditar={() => onEditarClick(idPaciente)}
          modalNameEditar="modal_editar_paciente"
        />
      );
    },
  }),
];

//tabla Doctores
export const columnsDoctores = (editarEstadoDoctor, onEditarClick) => [
  columnHelper.accessor("nombre", {
    header: "Doctor",
    cell: ({ getValue, row }) => {
      const nombre = getValue();
      const { idDoctor } = row.original;

      return (
        <label
          htmlFor="modal_editar_doctor"
          className="hover:font-bold duration-100 delay-50 ease-in-out"
          style={{ cursor: "pointer" }}
          onClick={() => onEditarClick(idDoctor)}
        >
          {nombre}
        </label>
      );
    },
  }),
  columnHelper.accessor("cedula", {
    header: "Cédula",
  }),
  columnHelper.accessor("especialidad", {
    header: "Especialidad",
  }),
  columnHelper.accessor("servicio", {
    header: "servicio",
  }),
  columnHelper.accessor("estado", {
    header: "Estado",
    cell: ({ getValue }) => {
      const estado = getValue();
      const color = EstadosDoctores.obtenerColor(estado);

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
      const { idDoctor, estado } = row.original;

      return (
        <Acciones
          manager={EstadosDoctores}
          estado={estado}
          onToggleEstado={() => {
            editarEstadoDoctor(
              idDoctor,
              EstadosDoctores.conversionEstado(estado)
            );
          }}
          onEditar={() => onEditarClick(idDoctor)}
          modalNameEditar="modal_editar_doctor"
        />
      );
    },
  }),
];

export const dataPacientes = [
  {
    cedula: "123456789",
    nombre: "Arriana Baker",
    correo: "Arriana@gmail.com",
    telefono: "1234-5678",
    estado: "Activo",
  },
  {
    cedula: "123456789",
    nombre: "Emanuel Perez",
    correo: "Emanuel@gmail.com",
    telefono: "1234-5678",
    estado: "Inactivo",
  },
];

//! Info Tabla Consultorios

//! Columnas Tabla Consultorios
export const columnsConsultorios = (editarEstadoConsultorios, onEditarClick) => [
  columnHelper.accessor("nombre", {
    header: "Nombre",
  }),
  columnHelper.accessor("ubicacion", {
    header: "Ubicación", 
  }),
    columnHelper.accessor("doctor", {
    header: "Doctor", 
  }),
  columnHelper.accessor("estado", {
    header: "Estado",
    cell: ({ getValue }) => {
      const estado = getValue();
      const color = EstadosConsultorios.obtenerColor(estado);
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
      const { id, estado } = row.original;

      return (
        <Acciones
          manager={EstadosConsultorios}
          estado={estado}
          onToggleEstado={() => {
            editarEstadoConsultorios(
              id,
              EstadosConsultorios.conversionEstado(estado)
            );
          }}
          onEditar={() => onEditarClick(id)}
          modalNameEditar="modal_editar_servicio"
        />
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
export const columnsAdministrativos = (editarEstadoAdministrativo, onEditarClick) => [
  columnHelper.accessor("nombre", {
    header: "Administrativo",
    cell: ({ getValue, row }) => {
      const nombre = getValue();
      const { idAdministrativo } = row.original;

      return (
        <label
          htmlFor="modal_editar_administrativo"
          className="hover:font-bold duration-100 delay-50 ease-in-out"
          style={{ cursor: "pointer" }}
          onClick={() => onEditarClick(idAdministrativo)}
        >
          {nombre}
        </label>
      );
    },
  }),
  columnHelper.accessor("rol", {
    header: "Rol",
  }),
  columnHelper.accessor("email", {
    header: "Correo",
  }),
  columnHelper.accessor("estado", {
    header: "Estado",
    cell: ({ getValue }) => {
      const estado = getValue();
      const color = EstadosAdministrativos.obtenerColor(estado);
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
      const { idAdministrativo, estado } = row.original;
      return (
        <Acciones
          manager={EstadosAdministrativos}
          estado={estado}
          onToggleEstado={() =>
            editarEstadoAdministrativo(
              idAdministrativo,
              EstadosAdministrativos.conversionEstado(estado)
            )
          }
          onEditar={() => onEditarClick(idAdministrativo)}
          modalNameEditar="modal_editar_administrativo"
        />
      );
    },
  }),
];
