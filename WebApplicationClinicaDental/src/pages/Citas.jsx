import React from 'react'
import Header from '../components/Header/Header'
import { motion } from 'framer-motion'
import { DataCardCitas } from '../assets/constants/DataCard.js'
import DashBoardCard from '../components/Cards/DashBoardCard.jsx'
import Tabla from '../components/Tabla/Tabla.jsx'
import ChartLineTwo from '../components/Charts/ChartLineTwo.jsx'
import PieChartBoard from '../components/Charts/PieChartBoard.jsx'
import { COLORS, orderStatusData } from '../assets/constants/piechart.js'
import { columnsCitas, dataCitas } from '../assets/constants/TablaDashboard.jsx'

const Citas = () => {
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
                    {DataCardCitas.map((card, index) => (
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
                            <PieChartBoard orderStatusData={orderStatusData} COLORS={COLORS} />
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
                            <h1 className='text-2xl font-bold py-4'>Citas</h1>
                            <Tabla data={dataCitas} columns={columnsCitas} />
                        </div>
                    </div>
                </motion.div>
            </main>


        </div>
    )
}

export default Citas
