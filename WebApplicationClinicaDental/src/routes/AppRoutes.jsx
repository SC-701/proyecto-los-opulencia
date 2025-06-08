import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Facturacion from '../pages/Facturacion'  
import Sidebar from '../components/Sidebar/Sidebar'





const AppRoutes = () => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/Facturacion" element={<Facturacion />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
