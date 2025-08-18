import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CirclePlus } from "lucide-react";

import Header from "../components/Header/Header.jsx";
import DashBoardCard from "../components/Cards/DashBoardCard.jsx";
import Tabla from "../components/Tabla/Tabla.jsx";
import Agregar from "../components/Botones/Agregar.jsx";
import PieChartBoard from "../components/Charts/PieChartBoard.jsx";
import BarChartBoard from "../components/Charts/BarChartBoard.jsx";

import { DataCardInventarios } from "../utils/utilsInventario.js";
import { EstadosInventario } from "../assets/constants/Estados.jsx";
import { COLORSInventario } from "../assets/constants/piechart.js";
import { columnsInventario } from "../assets/constants/TablaDashboard.jsx";

import ModalAgregar from "../components/Modals/ModalAgregarInventario/ModalAgregar.jsx";
import ModalEditar from "../components/Modals/ModalEditarInventario/ModalEditar.jsx";

import {
  useInventario,
  useInventarioEditarEstado,
  useInventarioTotal,
  useInventarioPorEstado,
  useInventarioConteoPorEstado,
  useInventarioConteoPorCategoria,
  useInventarioEliminar,
  useInventarioActualizarVencidos,
} from "../hooks/UseInventario.js";

const Inventario = () => {
  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  const { items, cargar } = useInventario();
  const { editarEstado } = useInventarioEditarEstado();
  const { eliminar } = useInventarioEliminar();
  const { actualizar } = useInventarioActualizarVencidos();

  const idDisponible = EstadosInventario.conversionEstado("Disponible");
  const idPorVencer = EstadosInventario.conversionEstado("Por vencer");
  const idVencido = EstadosInventario.conversionEstado("Vencido");
  const idAgotado = EstadosInventario.conversionEstado("Agotado");


  const { total, cargarTotal } = useInventarioTotal();
  const { totalEstado: disponibles, cargarTotalEstado: cargarDisponibles } =
    useInventarioPorEstado(idDisponible);
  const { totalEstado: porVencer, cargarTotalEstado: cargarPorVencer } =
    useInventarioPorEstado(idPorVencer);
  const { totalEstado: vencidos, cargarTotalEstado: cargarVencidos } =
    useInventarioPorEstado(idVencido);
  const { totalEstado: agotados, cargarTotalEstado: cargarAgotados } =
    useInventarioPorEstado(idAgotado);
  
  const { datos: datosPorEstado, cargarConteo: cargarDatosPorEstado } =
    useInventarioConteoPorEstado();
  const { datos: datosPorCategoria, cargarConteo: cargarDatosPorCategoria } =
    useInventarioConteoPorCategoria();

  
  useEffect(() => {
    (async () => {
      try {
        await actualizar();
      } finally {
        await handleSuccess();
      }
    })();
  }, []);

  const cargarEstadoInventario = async (id, nuevoEstadoId) => {
    await editarEstado(id, nuevoEstadoId);
    await handleSuccess();
  };

  const handleItemClick = (id) => {
    const item = items.find((x) => {
      const itemId =
        x.id ?? x.idInventario ?? x.inventarioId ?? x.Id ?? x.IdInventario;
      return itemId === id;
    });
    if (!item) return;
    setItemSeleccionado(item);
    setTimeout(() => {
      const chk = document.getElementById("modal_editar_inventario");
      if (chk) chk.checked = true;
    }, 30);
  };

  const handleEliminar = async (id) => {
    await eliminar(id);
    await handleSuccess();
  };

  const handleSuccess = async () => {
    await Promise.all([
      cargar(),
      cargarTotal(),
      cargarDisponibles(),
      cargarPorVencer(),
      cargarVencidos(),
      cargarAgotados(),
      cargarDatosPorEstado(),
      cargarDatosPorCategoria(),
    ]);
  };

  const getDataCardInventarios = DataCardInventarios({
    total,
    porVencer,
    vencidos,
    disponibles,
    agotados,
  });

  
  const pieData = datosPorEstado.map((x) => {
    const meta = EstadosInventario.estados.find(
      (e) => e.id === (x.idEstado ?? x.estado ?? x.estadoId)
    );
    return {
      name: meta?.nombre ?? "Desconocido",
      value: x.total ?? x.cantidad ?? 0,
    };
  });

 
  const barData = (datosPorCategoria || [])
    .map((x) => ({
      name: String(
        x.categoria ??
          x.Categoria ??
          x.nombreCategoria ??
          x.nombre ??
          "Sin categoría"
      ),
      cantidad: Number(x.total ?? x.Total ?? x.cantidad ?? 0),
    }))
    .filter((d) => d.cantidad > 0);

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
          {getDataCardInventarios.map((card, index) => (
            <DashBoardCard
              key={index}
              nombre={card.nombre}
              icon={card.icon}
              valor={card.valor}
              color={card.color}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold py-4">Inventario Actual</h1>
              <Agregar
                icon={<CirclePlus />}
                title="Agregar Item"
                modalName="modal_agregar_inventario"
              />
            </div>
            <Tabla
              data={items}
              columns={columnsInventario(
                cargarEstadoInventario,
                handleItemClick,
                handleEliminar
              )}
            />
          </div>
        </motion.div>

      
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
                  orderStatusData={pieData}
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
                <BarChartBoard data={barData} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        
        <ModalAgregar
          idModal="modal_agregar_inventario"
          onSuccess={handleSuccess}
        />
        {itemSeleccionado && (
          <ModalEditar
            idModal="modal_editar_inventario"
            Item={itemSeleccionado}
            onSuccess={handleSuccess}
          />
        )}
      </main>
    </div>
  );
};

export default Inventario;
