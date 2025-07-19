import React from 'react'
import Agregar from '../components/Botones/Agregar'
import ModalAgregar from '../components/Modals/ModalAgregarCitas/ModalAgregar'
import Header from '../components/Header/Header'
import { motion } from 'framer-motion'
import { CirclePlus } from 'lucide-react'
import Tabla from '../components/Tabla/Tabla'
import { useServicios } from '../hooks/useServicio'
import { columnsServicios } from '../assets/constants/TablaDashboard'

const Servicios = () => {
    const { servicios, cargarServicios } = useServicios();
    const cargarEstado = async () => {
        await cargarServicios();
    };

    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Servicios' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <div className='mb-6'>
                    <h1 className='font-bold tracking-tight text-[#263238]  sm:text-3xl'>
                        Panel de Servicios - Clínica Dental
                    </h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='grid grid-cols-1'>
                        <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mt-6'>
                            <div className='flex justify-between items-center mb-4'>
                                <h1 className='text-2xl font-bold py-4'>Ofrecimiento de Servicios</h1>
                                <Agregar icon={<CirclePlus />} title="Agregar Servicio" modalName="my_modal_6" />
                            </div>
                            <Tabla data={servicios} columns={columnsServicios(cargarEstado)} />
                        </div>
                    </div>
                </motion.div>
                <ModalAgregar idModal="my_modal_6" />

            </main>


        </div>
    )
}

export default Servicios
