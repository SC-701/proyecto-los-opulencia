import { useState } from 'react'
import Header from '../components/Header/Header'
import { motion } from 'framer-motion'
import DashBoardCard from '../components/Cards/DashBoardCard.jsx'
import Tabla from '../components/Tabla/Tabla.jsx'
import ChartLineTwo from '../components/Charts/ChartLineTwo.jsx'
import PieChartBoard from '../components/Charts/PieChartBoard.jsx'
import Agregar from '../components/Botones/Agregar.jsx'
import ModalAgregar from '../components/Modals/ModalAgregarCitas/ModalAgregar.jsx'
import ModalEditar from '../components/Modals/ModalEditarCitas/ModalEditar.jsx'
import ModalInfoExtraCitas from '../components/Modals/ModalInfoExtraCitas/ModalInfoExtraCita.jsx'
import { CirclePlus } from 'lucide-react'
import { DataCardCitas } from '../utils/utilsCitas.js'
import { COLORS, orderStatusData } from '../assets/constants/piechart.js'
import { columnsCitas } from '../assets/constants/TablaDashboard.jsx'
import { 
    useCitas, 
    useCitasCanceladas, 
    useCitasCompletadas, 
    useCitasPendientes, 
    useCitasPorFecha, 
    useCitasTotal 
} from "../hooks/useCita.js"
import { editarEstadoCita } from '../services/Citas.js'

const Citas = () => {
    const { citas, cargar } = useCitas()
    const { totalCitas, cargarTotalCitas } = useCitasTotal()
    const { citasPendientes, cargarCitasPendientes } = useCitasPendientes()
    const { citasCompletadas, cargarCitasCompletadas } = useCitasCompletadas()
    const { citasCanceladas, cargarCitasCanceladas } = useCitasCanceladas()
    const { citasPorFecha } = useCitasPorFecha()
    const [citaSeleccionada, setCitaSeleccionada] = useState(null)

    const cargarEstado = async (id, nuevoEstado) => {
        await editarEstadoCita(id, nuevoEstado)
        await Promise.all([
            cargar(),
            cargarCitasPendientes(),
            cargarCitasCompletadas(),
            cargarCitasCanceladas()
        ])
    }


    const dailyOrdersData = citasPorFecha.map(({ fecha, cantidad }) => ({
        date: fecha,
        orders: cantidad
    }))


    const getDataCardCitas = DataCardCitas({
        totalCitas,
        citasPendientes,
        citasCompletadas,
        citasCanceladas
    })


    const handleSuccess = async () => {
        await Promise.all([
            cargar(),
            cargarCitasPendientes(),
            cargarTotalCitas()
        ])
    }


    const handleCitaClick = (idCita) => {
        const cita = citas.find(c => c.idCita === idCita)
        setCitaSeleccionada(cita)
    }

    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Citas' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <div className='mb-6'>
                    <h1 className='font-bold tracking-tight text-[#263238] sm:text-3xl'>
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
                            <h1 className='text-2xl font-bold py-4'>Citas del día</h1>
                            <ChartLineTwo dailyOrdersData={dailyOrdersData} />
                        </div>
                        <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6'>
                            <h1 className='text-2xl font-bold py-4'>Mayor Porcentaje de citas</h1>
                            <PieChartBoard 
                                orderStatusData={orderStatusData({ citasPendientes, citasCompletadas, citasCanceladas })} 
                                COLORS={COLORS} 
                            />
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
                            <Tabla 
                                data={citas} 
                                columns={columnsCitas(cargarEstado, handleCitaClick)} 
                            />
                        </div>
                    </div>
                </motion.div>
                <ModalAgregar idModal="my_modal_6" onSuccess={handleSuccess} />
                {citaSeleccionada && (
                    <>
                        <ModalEditar idModal="my_modal_edit" Cita={citaSeleccionada} onSuccess={handleSuccess} />
                        <ModalInfoExtraCitas idModal="my_modal_info_extra" Cita={citaSeleccionada} />
                    </>
                )}
            </main>
        </div>
    )
}

export default Citas