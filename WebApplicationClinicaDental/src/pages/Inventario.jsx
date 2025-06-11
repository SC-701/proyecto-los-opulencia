import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header.jsx";
import DashBoardCard from "../components/Cards/DashBoardCard.jsx";
import Tabla from "../components/Tabla/Tabla.jsx";

import { DataCardInventarios } from "../assets/constants/DataCard.js";
import {
  dataInventario,
  columnsInventario,
} from "../assets/constants/TablaDashboard.jsx";
import PieChartBoard from "../components/Charts/PieChartBoard.jsx";
import {
  orderInventario,
  COLORSInventario,
} from "../assets/constants/piechart.js";
import BarChartBoard from "../components/Charts/BarChartBoard.jsx";
import { barChartData } from "../assets/constants/BarChart.js";

const Inventario = () => {
  const [estadoFiltro, setEstadoFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [verGraficos, setVerGraficos] = useState(true);
  const [modal, setModal] = useState({ open: false, tipo: null, insumo: null });

  const inventarioFiltrado =
    estadoFiltro === "Todos"
      ? dataInventario
      : dataInventario.filter((item) => item.estado === estadoFiltro);

  const inventarioVisible = inventarioFiltrado.filter(
    (item) =>
      typeof item.insumo === "string" &&
      item.insumo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const columnasConEstilo = [
    ...columnsInventario.map((col) => {
      if (col.accessor === "cantidad") {
        return {
          ...col,
          Cell: ({ value }) => (
            <span className={value < 3 ? "text-red-500 font-bold" : ""}>
              {value}
            </span>
          ),
        };
      }
      return col;
    }),
    {
      header: "Acciones",
      accessorKey: "acciones",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            onClick={() =>
              setModal({ open: true, tipo: "editar", insumo: row.original })
            }
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
          >
            Editar
          </button>
          <button
            onClick={() =>
              setModal({ open: true, tipo: "eliminar", insumo: row.original })
            }
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
          >
            Eliminar
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Inventario" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="font-bold tracking-tight text-[#263238] sm:text-3xl">
            Gestión de Inventario - Clínica Dental
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {DataCardInventarios.map((card, index) => (
            <DashBoardCard
              key={index}
              nombre={card.nombre}
              icon={card.icon}
              valor={card.valor}
              color={card.color}
            />
          ))}
        </motion.div>

        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white bg-opacity-50 backdrop-blur-md p-4 rounded-xl shadow">
          <div className="flex flex-col md:flex-row gap-4 items-center w-full">
            <div className="flex gap-2 items-center">
              <label className="font-medium text-gray-700">Estado:</label>
              <select
                value={estadoFiltro}
                onChange={(e) => setEstadoFiltro(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Todos">Todos</option>
                <option value="Disponible">Disponible</option>
                <option value="Por vencer">Por vencer</option>
                <option value="Agotado">Agotado</option>
                <option value="Vencido">Vencido</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Buscar insumo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full md:max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={() =>
                setModal({ open: true, tipo: "agregar", insumo: null })
              }
              className="bg-green-600 text-white font-medium py-2 px-4 rounded shadow hover:bg-green-700 transition duration-200"
            >
              + Agregar Insumo
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mb-8">
            <h1 className="text-2xl font-bold py-4">Inventario Actual</h1>
            <Tabla data={inventarioVisible} columns={columnasConEstilo} />
          </div>
        </motion.div>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setVerGraficos(!verGraficos)}
            className="bg-slate-700 text-white font-medium py-2 px-4 rounded shadow hover:bg-slate-800 transition duration-200"
          >
            {verGraficos ? "Ocultar Gráficos" : "Mostrar Gráficos"}
          </button>
        </div>

        {verGraficos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mb-8">
              <h1 className="text-2xl font-bold py-4">
                Análisis Visual del Inventario
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-lg font-semibold mb-2">
                    Estados de Insumos
                  </h2>
                  <PieChartBoard
                    orderStatusData={orderInventario}
                    COLORS={COLORSInventario}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-lg font-semibold mb-2">
                    Insumos por Categoría
                  </h2>
                  <BarChartBoard data={barChartData} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {modal.open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
              <h2 className="text-xl font-bold mb-4">
                {modal.tipo === "agregar"
                  ? "Agregar nuevo insumo"
                  : modal.tipo === "editar"
                  ? `Editar insumo: ${modal.insumo.insumo}`
                  : `Eliminar insumo: ${modal.insumo.insumo}`}
              </h2>
              <p className="mb-4">
                {modal.tipo === "eliminar"
                  ? "¿Estás seguro de que deseas eliminar este insumo?"
                  : "Aquí iría el formulario o los campos para editar/agregar."}
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() =>
                    setModal({ open: false, tipo: null, insumo: null })
                  }
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  onClick={() =>
                    setModal({ open: false, tipo: null, insumo: null })
                  }
                  className={`px-4 py-2 rounded text-white ${
                    modal.tipo === "eliminar"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {modal.tipo === "eliminar" ? "Eliminar" : "Guardar"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Inventario;
