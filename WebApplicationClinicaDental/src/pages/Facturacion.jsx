
import Header from '../components/Header/Header.jsx'
import React from 'react'
import { motion } from 'framer-motion'
import PieChartBoard from '../components/Charts/PieChartBoard.jsx'
import { COLORS, COLORSFacturas, COLORSInventario, orderFacturas, orderInventario } from '../assets/constants/piechart.js'
import DashBoardCard from '../components/Cards/DashBoardCard.jsx'
import { DataCardFacturacion } from '../utils/utilsFacturas.js'
import ChartLineTwo from '../components/Charts/ChartLineTwo.jsx'
import { columnsFacturas } from '../assets/constants/TablaDashboard.jsx'
import Tabla from '../components/Tabla/Tabla.jsx'
import { useFacturas, useFacturasTotal } from '../hooks/useFacturas.js'
import { editarEstadoFacturas } from '../services/Facturas.js'
import { useState } from 'react'
import ModalAgregarFacturas from '../components/Modals/Facturas/ModalAgregarFacturas.jsx'
import { CirclePlus } from 'lucide-react'
import Agregar from '../components/Botones/Agregar.jsx'
import ModalEditarFactura from '../components/Modals/Facturas/ModalEditarFactura.jsx'

const Facturacion = () => {

        const { Facturas, cargar } = useFacturas();
        const { TotalFacturas, cargarTotalFacturas } = useFacturasTotal();
        const [facturaSeleccionada, setFacturaSeleccionada] = useState([null]);

        const cargarEstado = async (id, nuevoEstado) => {
            await editarEstadoFacturas(id, nuevoEstado);
            await cargar();
            await cargarTotalFacturas();

        };

        const getDataCardFacturas = DataCardFacturacion({
            TotalFacturas: TotalFacturas,
        });

        const handleSuccess = async () => {
            await cargar();
            await cargarTotalFacturas();
        };

        const handleFacturaClick = (idFactura) => {
            const factura = Facturas.find(f => f.idFactura == idFactura)
            setFacturaSeleccionada(factura)
        }

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Facturación' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className="mb-6 flex justify-between items-center">
          <h1 className="font-bold tracking-tight text-[#263238] sm:text-3xl">
            Gestión de Facturas - Clínica Dental
          </h1>
        </div>
        <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
           {getDataCardFacturas.map((card, index) => (
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
          transition={{ duration: 1 }}>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:grid-cols-1'>
            <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6'>
              <h1 className='text-2xl font-bold py-4'>Mayor índice de facturas</h1>
              <PieChartBoard orderStatusData={orderFacturas} COLORS={COLORSFacturas} />
            </div>

            <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6'>
              <h1 className='text-2xl font-bold py-4'>Facturación del día</h1>
              <ChartLineTwo />
            </div>
          </div>
        </motion.div>
                <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>


            <div className='grid grid-cols-1'>
              <div className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6 mt-6'>
                <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-bold py-4'>Facturas</h1>
                <Agregar icon={<CirclePlus />} title="Agregar Factura" modalName="my_modal_6" />
              </div>
                <Tabla data={Facturas} columns={columnsFacturas(cargarEstado, handleFacturaClick)} />
            </div>
            </div>
          </motion.div>
              <ModalAgregarFacturas idModal="my_modal_6" onSuccess={handleSuccess} />
               <ModalEditarFactura idModal="my_modal_edit" factura={facturaSeleccionada} onSuccess={handleSuccess}  />



      </main>
    </div>
  )
}

export default Facturacion