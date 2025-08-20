import React, { useState } from 'react'
import Header from '../components/Header/Header.jsx'
import Tabla from '../components/Tabla/Tabla.jsx'
import { columnsConsultorios } from '../assets/constants/TablaDashboard'
import { motion } from 'framer-motion'
import { useConsultorios, useConsultoriosEditarEstado } from '../hooks/useConsultorios.js'
import Agregar from '../components/Botones/Agregar.jsx'
import { CirclePlus } from 'lucide-react'
import ModalAgregarConsultorios from '../components/Modals/ModalAgregarConsultorios/ModalAgregarConsultorios.jsx'
import ModalEditarConsultorio from '../components/ModalEditarConsultorios/ModalEditarConsultorio.jsx'

const Consultorios = () => {
  const { consultorios, cargarConsultorios } = useConsultorios();
  const { editarEstado } = useConsultoriosEditarEstado();
  const [consultorioSeleccionado, setConsultorioSeleccionado] = useState(null);


  const onSuccess = async () => {
    await cargarConsultorios();
  }
  const cargarEstado = async (id, estado) => {
    await editarEstado(id, estado)
    await Promise.all([
      cargarConsultorios()
    ])
  }

  const handleFindConsultorio = (id) => {
    const consultorio =  consultorios.find(c => c.id === id);
    setConsultorioSeleccionado(consultorio);
  }

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Consultorios' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className="mb-6 flex justify-between items-center">
          <h1 className="font-bold tracking-tight text-[#263238] sm:text-3xl">
            Gestión Consultorios - Clínica Dental
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <div className='grid grid-cols-1'>
            <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mt-6'>
              <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold py-4'>Consultorios</h1>
                <Agregar icon={<CirclePlus />} title="Agregar Consultorio" modalName="my_modal_6" />
              </div>
              <Tabla data={consultorios} columns={columnsConsultorios(cargarEstado, handleFindConsultorio)} pageSizeInicial={5} />
            </div>
          </div>
        </motion.div>
        <ModalAgregarConsultorios idModal="my_modal_6" onSubmit={onSuccess} />
        <ModalEditarConsultorio Consultorio={consultorioSeleccionado} idModal="modal_editar_servicio" onSuccess={onSuccess} />

      </main>
    </div>
  )
}

export default Consultorios