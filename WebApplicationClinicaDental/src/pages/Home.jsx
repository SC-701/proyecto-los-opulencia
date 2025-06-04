import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header/Header.jsx'
import DashBoardCard from '../components/Cards/DashBoardCard.jsx'
import { DataCard } from '../assets/constants/DataCard.js'





const Home = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Inicio' />

            <main className='max-w-7xl mx-10 py-6 px-4 lg:px-8'>
                <div className='mb-6'>
                    <h1 className='font-bold tracking-tight text-[#263238]  sm:text-3xl'>
                        Panel de Gestión - Clínica Dental
                    </h1>
                </div>
                
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 '
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {DataCard.map((card, index) => (
                        <DashBoardCard
                            key={index}
                            nombre={card.nombre}
                            icon={card.icon}
                            valor={card.valor}
                            color={card.color}
                        />
                    ))}
                    </motion.div>
            </main>
        </div>

    )
}

export default Home
