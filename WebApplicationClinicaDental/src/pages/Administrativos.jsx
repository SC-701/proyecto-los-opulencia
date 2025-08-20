import { useState } from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import DashBoardCard from '../components/Cards/DashBoardCard.jsx';
import Tabla from '../components/Tabla/Tabla.jsx';
import Agregar from '../components/Botones/Agregar.jsx';
import ModalAgregarAdministrativo from '../components/Modals/ModalAgregarAdministrativo/ModalAgregarAdministrativo.jsx';
import ModalEditarAdministrativo from '../components/Modals/ModalEditarAdministrativo/ModalEditarAdministrativo.jsx';
import { CirclePlus } from 'lucide-react';
import PieChartBoard from '../components/Charts/PieChartBoard.jsx';
import { COLORSAdministradores, orderAdministrativos } from '../assets/constants/piechart';
import { DataCardAdministrativo } from '../utils/utilsAdministrativo.js';
import { columnsAdministrativos } from '../assets/constants/TablaDashboard.jsx';

import {
  useAdministrativos,
  useAdministrativosTotal,
  useTotalAdministadores,
  useTotalRecepcionistas,
  useAdministrativosInactivos,
  useAdministrativosEditarEstado,
} from '../hooks/useAdministrativos.js';

const Administrativos = () => {
  const { administrativos, cargarAdministrativos } = useAdministrativos();
  const { totalAdministrativos, cargarTotalAdministrativos } = useAdministrativosTotal();
  const { totalAdministadores, cargarTotalAdministadores } = useTotalAdministadores();
  const { totalRecepcionistas, cargarTotalRecepcionistas } = useTotalRecepcionistas();
  const { administrativosInactivos, cargarAdministrativosInactivos } = useAdministrativosInactivos();
  const { editarEstado } = useAdministrativosEditarEstado();

  const [administrativoSeleccionado, setAdministrativoSeleccionado] = useState(null);

  const cargarEstado = async (id, nuevoEstado) => {
    await editarEstado(id, nuevoEstado);
    await Promise.all([
      cargarAdministrativos(),
      cargarTotalAdministrativos(),
      cargarTotalAdministadores(),
      cargarTotalRecepcionistas(),
      cargarAdministrativosInactivos(),
    ]);
  };

  const cards = DataCardAdministrativo({
    totalAdministrativos,
    totalAdministadores,
    totalRecepcionistas,
    administrativosInactivos,
  });

  const pieAdmins = orderAdministrativos({
    totalAdministadores,
    totalRecepcionistas,
    administrativosInactivos,
  });

  const handleSuccess = async () => {
    await Promise.all([
      cargarAdministrativos(),
      cargarTotalAdministrativos(),
      cargarTotalAdministadores(),
      cargarTotalRecepcionistas(),
      cargarAdministrativosInactivos(),
    ]);
  };

  const handleAdministrativoClick = (idAdministrativo) => {
    const a = administrativos.find((x) => x.idAdministrativo === idAdministrativo);
    setAdministrativoSeleccionado(a || null);
  };


  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Administrativos" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div className="mb-6">
          <h1 className="font-bold tracking-tight text-[#263238] sm:text-3xl">
            Panel Administrativo - Clínica Dental
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {cards.map((card, index) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:grid-cols-1">
            <div className="bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6">
              <h1 className="text-2xl font-bold py-4">Administrativos</h1>
              <div className="flex justify-between items-center mb-4">
                <div />
                <Agregar
                  icon={<CirclePlus />}
                  title="Agregar Administrativo"
                  modalName="modal_agregar_administrativo"
                />
              </div>
              <Tabla
                data={administrativos}
                columns={columnsAdministrativos(cargarEstado, handleAdministrativoClick)}
              />
            </div>

            <div className="bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6">
              <h1 className="text-2xl font-bold py-4">Mayor índice de administrativos</h1>
              <PieChartBoard
                orderStatusData={pieAdmins}
                COLORS={COLORSAdministradores}
              />
            </div>
          </div>
        </motion.div>

        <ModalAgregarAdministrativo idModal="modal_agregar_administrativo" onSuccess={handleSuccess} />

        {administrativoSeleccionado && (
          <ModalEditarAdministrativo
            idModal="modal_editar_administrativo"
            Administrativo={administrativoSeleccionado}
            onSuccess={handleSuccess}
          />
        )}
      </main>
    </div>
  );
};

export default Administrativos;
