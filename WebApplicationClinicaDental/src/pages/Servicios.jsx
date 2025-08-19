import React, { useState } from 'react'
import Agregar from '../components/Botones/Agregar'
import Header from '../components/Header/Header'
import { motion } from 'framer-motion'
import { CirclePlus } from 'lucide-react'
import Tabla from '../components/Tabla/Tabla'
import { useServicioEstadoEditar, useServicioObtenerActivos, useServicioObtenerInactivos, useServicioObtenerSumaCosto, useServicioObtenerTotales, useServicios } from '../hooks/useServicio'
import { columnsServicios } from '../assets/constants/TablaDashboard'
import ModalAgregarServicio from '../components/Modals/ModalAgregarServicios/ModalAgregarServicio'
import DashBoardCard from '../components/Cards/DashBoardCard'
import { DataCardServicios } from '../utils/utilsServicios'
import ModalEditarServicios from '../components/Modals/ModalEditarServicios/ModalEditarServicios'

const Servicios = () => {
    const { servicios, cargarServicios } = useServicios();
    const { editarEstado } = useServicioEstadoEditar();
    const  {ServiciosActivos , obtenerServiciosActivosAsync} = useServicioObtenerActivos();
    const {ServiciosTotales , obtenerServiciosTotalesAsync} = useServicioObtenerTotales();
    const {ServiciosInactivos , obtenerServiciosInactivosAsync} = useServicioObtenerInactivos();
    const {ServiciosSumaCosto , obtenerServiciosSumaCostoAsync} = useServicioObtenerSumaCosto();
    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
    const cargarEstado = async (id, estado) => {
        await editarEstado(id, estado);
        await cargarServicios();
        await obtenerServiciosActivosAsync();
        await obtenerServiciosTotalesAsync();
        await obtenerServiciosInactivosAsync();
        await obtenerServiciosSumaCostoAsync();
    };




    const DataCardServ = DataCardServicios ({
        ServiciosTotales,
        ServiciosActivos,
        ServiciosInactivos,
        ServiciosSumaCosto
    })

    const handleSuccess = async () => {
        await Promise.all([
            cargarServicios(),
            obtenerServiciosActivosAsync(),
            obtenerServiciosTotalesAsync(),
            obtenerServiciosInactivosAsync(),
            obtenerServiciosSumaCostoAsync()
        ]);
    }

    const handleServicioClick = (id) => {
        const servicio = servicios.find(s => s.id === id);
        setServicioSeleccionado(servicio);
    }

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
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {DataCardServ.map((card, index) => (
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
                    <div className='grid grid-cols-1'>
                        <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mt-6'>
                            <div className='flex justify-between items-center mb-4'>
                                <h1 className='text-2xl font-bold py-4'>Ofrecimiento de Servicios</h1>
                                <Agregar icon={<CirclePlus />} title="Agregar Servicio" modalName="my_modal_servicio" />
                            </div>
                            <Tabla data={servicios} columns={columnsServicios(cargarEstado, handleServicioClick)} />
                        </div>
                    </div>
                </motion.div>
                <ModalAgregarServicio idModal="my_modal_servicio" onSuccess={handleSuccess} />
                <ModalEditarServicios idModal="my_modal_editar_servicio" Servicio={servicioSeleccionado} onSuccess={handleSuccess} />

            </main>


        </div>
    )
}

export default Servicios
