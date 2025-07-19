import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Facturacion from '../pages/Facturacion'
import Sidebar from '../components/Sidebar/Sidebar'
import Citas from '../pages/Citas'
import Inventario from '../pages/Inventario'
import Pacientes from '../pages/Pacientes'
import Consultorios from '../pages/Consultorios'
import Administrativos from '../pages/Administrativos'
import Servicios from '../pages/Servicios'
import { Bounce, ToastContainer } from 'react-toastify';


const AppRoutes = () => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/Facturacion" element={<Facturacion />} />
                <Route path="/citas" element={<Citas />} />
                <Route path="/Inventario" element={<Inventario />} />
                <Route path="/Pacientes" element={<Pacientes />} />
                <Route path="/Consultorios" element={<Consultorios />} />
                <Route path="/administrativos" element={<Administrativos />} />
                <Route path="/Servicios" element={<Servicios />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    )
}

export default AppRoutes
