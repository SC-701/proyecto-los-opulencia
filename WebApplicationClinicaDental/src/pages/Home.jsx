import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header/Header.jsx'
import DashBoardCard from '../components/Cards/DashBoardCard.jsx'
import { DataCard } from '../utils/utilsHome.js'
import Calendario from '../components/Calendario/Calendario'
import Tabla from '../components/Tabla/Tabla.jsx'
import { columns } from '../assets/constants/TablaDashboard.jsx'
import { eventos, localizer } from '../assets/constants/Calendario.jsx'
import LineChartBoard from '../components/Charts/LineChartBoard.jsx'
import { dataLineChart } from '../assets/constants/Charts.js'
import { useCitas, useCitasDiarias, useCitasDiariasPacientes, useCitasDiariasPendientes } from '../hooks/useCita.js'
import ModalEditar from '../components/Modals/ModalEditarCitas/ModalEditar.jsx'
import ModalInfoExtraCitas from '../components/Modals/ModalInfoExtraCitas/ModalInfoExtraCita.jsx'
import { useFacturasPorPagar } from '../hooks/useFacturas.js'
import { usePacientesTotal } from '../hooks/usePacientes.js'
import { editarEstadoCita } from '../services/Citas.js'




const Home = () => {
    const { citasDiariasPacientes, cargarCitasDiariasPacientes } = useCitasDiariasPacientes();
    const { citasDiarias, cargarCitasDiarias } = useCitasDiarias();
    const { citasDiariasPendientes, cargarCitasDiariasPendientes } = useCitasDiariasPendientes();
        const {FacturasPorPagar, cargarFacturasPorPagar} = useFacturasPorPagar();
    const { citas, cargar } = useCitas();
    const [citaSeleccionada, setCitaSeleccionada] = useState([])
    const { totalPacientes, cargarTotalPacientes } = usePacientesTotal();


    const getDataHomeCard = DataCard({
        CitasHoy: citasDiarias,
        pacientes: totalPacientes,
        citasPendientesHoy: citasDiariasPendientes,
        obtenerFacturasPorPagar: FacturasPorPagar
    });

    const cargarEstado = async (id, nuevoEstado) => {
        await editarEstadoCita(id, nuevoEstado);
        await cargarCitasDiarias();
        await cargarCitasDiariasPacientes();
        await cargarCitasDiariasPendientes();
        await cargarFacturasPorPagar();
    };

    const handleSuccess = async () => {
        await cargar();
        await cargarCitasDiarias();
        await cargarCitasDiariasPacientes();
        await cargarCitasDiariasPendientes();
    };

    const eventosCalendario = citas.map((cita) => ({
        title: cita.paciente + ' ' + cita.servicio,
        start: new Date(cita.fecha),
        end: new Date(cita.fecha),
    }));

    const handleCitaClick = (idCita) => {
        const cita = citas.find(c => c.idCita == idCita)
        setCitaSeleccionada(cita)
    }


    return (
        
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Inicio' />
            

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <div className='mb-6'>
                    <h1 className='font-bold tracking-tight text-[#263238]  sm:text-3xl'>
                        Panel de Gestión - Clínica Dental
                    </h1>
                </div>
                
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {getDataHomeCard.map((card, index) => (
                        <DashBoardCard
                            key={index}
                            nombre={card.nombre}
                            icon={card.icon}
                            valor={card.valor}
                            color={card.color}
                        />
                    ))
                    }
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:grid-cols-1'>
                        <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6'>
                            <h1 className='text-2xl font-bold py-4'>Citas del dia</h1>
                            <Tabla data={citasDiariasPacientes} columns={columns(cargarEstado, handleCitaClick)} pageSizeInicial={5} />
                        </div>
                        <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6'>
                            <h1 className='text-2xl font-bold py-4'>Calendario</h1>
                            <Calendario eventos={eventosCalendario} localizer={localizer} />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div
                        className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mt-6'
                    >
                        <h1 className='text-2xl font-bold py-4'>Facturación Diaria</h1>
                        <LineChartBoard data={dataLineChart} />
                    </div>

                </motion.div>
                <ModalEditar idModal="my_modal_edit" Cita={citaSeleccionada} onSuccess={handleSuccess} />
                <ModalInfoExtraCitas idModal="my_modal_info_extra" Cita={citaSeleccionada} />


            </main>
        </div>

    )
}

export default Home
