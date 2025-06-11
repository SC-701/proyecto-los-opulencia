import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Facturacion from '../pages/Facturacion'  
import Sidebar from '../components/Sidebar/Sidebar'
import Citas from '../pages/Citas'
import Inventario from '../pages/Inventario'





const AppRoutes = () => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/Facturacion" element={<Facturacion />} />
                <Route path="/citas" element={<Citas />} />
                <Route path="/Inventario" element={<Inventario />}/>
            </Routes>
        </div>
    )
}

export default AppRoutes
