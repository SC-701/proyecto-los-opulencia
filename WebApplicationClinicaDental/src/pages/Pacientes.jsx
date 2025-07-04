import React from 'react'
import Header from '../components/Header/Header'
import { motion } from 'framer-motion'
import { DataCardPacientes } from '../assets/constants/DataCard.jsx'
import DashBoardCard from '../components/Cards/DashBoardCard.jsx'
import Tabla from '../components/Tabla/Tabla.jsx'
import { dataPacientes, columnsPacientes } from '../assets/constants/TablaDashboard.jsx'

const Pacientes = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Citas' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <div className='mb-6'>
                    <h1 className='font-bold tracking-tight text-[#263238] sm:text-3xl'>
                        Panel de Pacientes - Clínica Dental
                    </h1>
                </div>
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {DataCardPacientes.map((card, index) => (
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
                    <div className='bg-white shadow-md rounded-lg p-4'>
                        <h1 className='text-2xl font-bold py-4'>Pacientes</h1>
                        <Tabla data={dataPacientes} columns={columnsPacientes} />
                    </div>
                </motion.div>
            </main>
        </div>
    )
}

export default Pacientes
