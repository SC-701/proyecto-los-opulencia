import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header.jsx";
import DashBoardCard from "../components/Cards/DashBoardCard.jsx";
import Tabla from "../components/Tabla/Tabla.jsx";

import { DataCardInventarios } from "../assets/constants/DataCard.js";
import {
  dataInventario,
  columnsInventario,
} from "../assets/constants/TablaDashboard.jsx";


const Inventario = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Inventario" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div className="mb-6">
          <h1 className="font-bold tracking-tight text-[#263238] sm:text-3xl">
            Gestión de Inventario - Clínica Dental
          </h1>
        </div>

        {/* Cards */}
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

        {/* Tabla de Inventario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mb-8">
            <h1 className="text-2xl font-bold py-4">Inventario Actual</h1>
            <Tabla data={dataInventario} columns={columnsInventario} />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Inventario;
