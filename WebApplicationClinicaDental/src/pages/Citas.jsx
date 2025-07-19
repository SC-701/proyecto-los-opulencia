import React from 'react'
import Header from '../components/Header/Header'
import { motion } from 'framer-motion'
import { DataCardCitas } from '../utils/utilsCitas.js'
import DashBoardCard from '../components/Cards/DashBoardCard.jsx'
import Tabla from '../components/Tabla/Tabla.jsx'
import ChartLineTwo from '../components/Charts/ChartLineTwo.jsx'
import PieChartBoard from '../components/Charts/PieChartBoard.jsx'
import { COLORS, orderStatusData } from '../assets/constants/piechart.js'
import { columnsCitas } from '../assets/constants/TablaDashboard.jsx'
import { useCitas, useCitasCanceladas, useCitasCompletadas, useCitasDiarias, useCitasPendientes, useCitasTotal } from "../hooks/useCita.js";
import { editarEstadoCita } from '../services/Citas.js'
import Agregar from '../components/Botones/Agregar.jsx'
import ModalAgregar from '../components/Modals/ModalAgregar/ModalAgregar.jsx'
import { CirclePlus } from 'lucide-react'


const Citas = () => {
    const { citas, cargar } = useCitas();
    const { totalCitas } = useCitasTotal();
    const { citasPendientes, cargarCitasPendientes } = useCitasPendientes();
    const { citasCompletadas, cargarCitasCompletadas } = useCitasCompletadas();
    const { citasCanceladas, cargarCitasCanceladas } = useCitasCanceladas();


    const cargarEstado = async (id, nuevoEstado) => {
        await editarEstadoCita(id, nuevoEstado);
        await cargar();
        await cargarCitasPendientes();
        await cargarCitasCompletadas();
        await cargarCitasCanceladas();
    };

    const getDataCardCitas = DataCardCitas({
        totalCitas: totalCitas,
        citasPendientes: citasPendientes,
        citasCompletadas: citasCompletadas,
        citasCanceladas: citasCanceladas
    });

    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Citas' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <div className='mb-6'>
                    <h1 className='font-bold tracking-tight text-[#263238]  sm:text-3xl'>
                        Panel de Citas - Clínica Dental
                    </h1>
                </div>
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {getDataCardCitas.map((card, index) => (
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
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:grid-cols-1'>
                        <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6'>
                            <h1 className='text-2xl font-bold py-4'>Citas del dia</h1>
                            <ChartLineTwo />
                        </div>
                        <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6'>
                            <h1 className='text-2xl font-bold py-4'>Mayor Porcentaje de citas</h1>
                            <PieChartBoard orderStatusData={orderStatusData({citasPendientes, citasCompletadas, citasCanceladas})} COLORS={COLORS} />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='grid grid-cols-1'>
                        <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mt-6'>
                            <div className='flex justify-between items-center mb-4'>
                                <h1 className='text-2xl font-bold py-4'>Citas</h1>
                                <Agregar icon={<CirclePlus />} title="Agregar Cita" modalName="my_modal_6" />
                            </div>

                            <Tabla data={citas} columns={columnsCitas(cargarEstado)} />
                        </div>
                    </div>
                </motion.div>
                <ModalAgregar idModal="my_modal_6" />

            </main>


        </div>
    )
}

export default Citas
