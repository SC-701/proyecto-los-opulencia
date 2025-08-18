import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import DashBoardCard from '../components/Cards/DashBoardCard.jsx';
import Tabla from '../components/Tabla/Tabla.jsx';
import { columnsDoctores } from '../assets/constants/TablaDashboard.jsx';
import { DataCardDoctores } from '../utils/utilsDoctores.js';
import Agregar from '../components/Botones/Agregar.jsx';
import ModalAgregarDoctor from '../components/Modals/ModalAgregarDoctor/ModalAgregarDoctor.jsx';
import ModalEditarDoctor from '../components/Modals/ModalEditarDoctor/ModalEditarDoctor.jsx';
import { CirclePlus } from 'lucide-react';
import { editarEstadoDoctor } from '../services/Doctor';

import {
    useDoctores,
    useDoctoresTotal,
    useDoctoresActivos,
    useDoctoresInactivos,
    useDoctoresNuevos
} from '../hooks/useDoctores';

const Doctores = () => {
    const { doctores, cargarDoctores } = useDoctores();
    const { totalDoctores, cargarTotalDoctores } = useDoctoresTotal();
    const { doctoresActivos, cargarDoctoresActivos } = useDoctoresActivos();
    const { doctoresInactivos, cargarDoctoresInactivos } = useDoctoresInactivos();
    const { doctoresNuevos, cargarDoctoresNuevos } = useDoctoresNuevos();
    const [doctorSeleccionado, setDoctorSeleccionado] = useState(null);

    const getDataCardDoctores = DataCardDoctores({
        totalDoctores,
        doctoresActivos,
        doctoresInactivos,
        doctoresNuevos
    });

    const handleSuccess = async () => {
        await cargarDoctores();
        await cargarTotalDoctores();
        await cargarDoctoresActivos();
        await cargarDoctoresInactivos();
        await cargarDoctoresNuevos();
    };

    const handleDoctorClick = (idDoctor) => {
        const doctor = doctores.find(d => d.idDoctor === idDoctor);
        setDoctorSeleccionado(doctor);
    };

    const cargarEstadoDoctor = async (id, nuevoEstado) => {
        await editarEstadoDoctor(id, nuevoEstado);
        await cargarDoctores();
        await cargarTotalDoctores();
        await cargarDoctoresActivos();
        await cargarDoctoresInactivos();
        await cargarDoctoresNuevos();
    };

    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Doctores' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <div className='mb-6'>
                    <h1 className='font-bold tracking-tight text-[#263238] sm:text-3xl'>
                        Panel de Doctores - Clínica Dental
                    </h1>
                </div>

                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {getDataCardDoctores.map((card, index) => (
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
                    <div className='bg-white shadow-md rounded-lg p-4 mt-6'>
                        <div className='flex justify-between items-center mb-4'>
                            <h1 className='text-2xl font-bold py-4'>Doctores</h1>
                            <Agregar icon={<CirclePlus />} title="Agregar Doctor" modalName="modal_agregar_doctor" />
                        </div>

                        <Tabla
                            data={doctores}
                            columns={columnsDoctores(cargarEstadoDoctor, handleDoctorClick)}
                        />
                    </div>
                </motion.div>

                <ModalAgregarDoctor idModal="modal_agregar_doctor" onSuccess={handleSuccess} />

                {doctorSeleccionado && (
                    <ModalEditarDoctor
                        idModal="modal_editar_doctor"
                        Doctor={doctorSeleccionado}
                        onSuccess={handleSuccess}
                    />
                )}
            </main>
        </div>
    );
};

export default Doctores;
