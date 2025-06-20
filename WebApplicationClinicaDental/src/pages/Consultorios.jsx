import React from 'react'
import Header from '../components/Header/Header.jsx'
import Tabla from '../components/Tabla/Tabla.jsx'
import { columnsConsultorios, dataConsultorios } from '../assets/constants/TablaDashboard'
import { motion } from 'framer-motion'

 const Consultorios = () => {
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
                <h1 className='text-2xl font-bold py-4'>consultorios</h1>
                <Tabla data={dataConsultorios} columns={columnsConsultorios} pageSizeInicial={5} />
              </div>
            </div>
          </motion.div>

</main>
    </div>
  )
}

export default Consultorios