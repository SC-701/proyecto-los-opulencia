import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { motion } from 'framer-motion';
import DashBoardCard from '../components/Cards/DashBoardCard.jsx';
import Tabla from '../components/Tabla/Tabla.jsx';
import { columnsPacientes } from '../assets/constants/TablaDashboard.jsx';
import { DataCardPacientes } from '../utils/utilsPacientes.js';
import Agregar from '../components/Botones/Agregar.jsx';
import ModalAgregar from '../components/Modals/ModalAgregarPaciente/ModalAgregar.jsx';
import ModalEditarPaciente from '../components/Modals/ModalEditarPacientes/ModalEditarPacientes.jsx'; 
import { CirclePlus } from 'lucide-react';
import { editarEstadoPaciente } from '../services/Pacientes';


import {
    usePacientes,
    usePacientesTotal,
    usePacientesActivos,
    usePacientesInactivos,
    usePacientesNuevos
} from '../hooks/usePacientes';

const Pacientes = () => {
    const { pacientes, cargarPacientes } = usePacientes();
    const { totalPacientes, cargarTotalPacientes } = usePacientesTotal();
    const { pacientesActivos, cargarPacientesActivos } = usePacientesActivos();
    const { pacientesInactivos, cargarPacientesInactivos } = usePacientesInactivos();
    const { pacientesNuevos, cargarPacientesNuevos } = usePacientesNuevos();
    const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

    const getDataCardPacientes = DataCardPacientes({
        totalPacientes,
        pacientesActivos,
        pacientesInactivos,
        pacientesNuevos
    });

    const handleSuccess = async () => {
        await cargarPacientes();
        await cargarTotalPacientes();
        await cargarPacientesActivos();
        await cargarPacientesInactivos();
        await cargarPacientesNuevos();
    };

    const handlePacienteClick = (idPaciente) => {
        const paciente = pacientes.find(p => p.idPaciente === idPaciente);
        setPacienteSeleccionado(paciente);
    };

    const cargarEstadoPaciente = async (id, nuevoEstado) => {
    await editarEstadoPaciente(id, nuevoEstado);
    await cargarPacientes();
    await cargarTotalPacientes();
    await cargarPacientesActivos();
    await cargarPacientesInactivos();
    await cargarPacientesNuevos();
    
};

    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title='Pacientes' />
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
                    {getDataCardPacientes.map((card, index) => (
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
                            <h1 className='text-2xl font-bold py-4'>Pacientes</h1>
                            <Agregar icon={<CirclePlus />} title="Agregar Paciente" modalName="modal_agregar_paciente" />
                        </div>
                       
                        <Tabla data={pacientes} columns={columnsPacientes(cargarEstadoPaciente, handlePacienteClick)} />
                    </div>
                </motion.div>

                <ModalAgregar idModal="modal_agregar_paciente" onSuccess={handleSuccess} />

                {pacienteSeleccionado && (
                    <ModalEditarPaciente
                        idModal="modal_editar_paciente"
                        Paciente={pacienteSeleccionado}
                        onSuccess={handleSuccess}
                    />
                )}
            </main>
        </div>
    );
};

export default Pacientes;
