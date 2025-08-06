import {  SquarePen,  UserRoundSearch } from 'lucide-react';
import React from 'react'
import { EstadosCitas } from '../../assets/constants/Estados';


const Acciones = ({ manager, estado, onToggleEstado, onEditar, modalNameEditar }) => {
    const iconosEstado = manager?.obtenerIcono(estado);
    const handleEditarClick = () => {
        onEditar();
        setTimeout(() => {
            document.getElementById(modalNameEditar).checked = true;
        }, 50);
    };
    return (
        <div className='flex gap-2'>
            <button
                className="px-2 py-1 transition-transform duration-300 delay-100 ease-in-out hover:scale-110"
                onClick={onToggleEstado}
                style={{ cursor: "pointer" }}
            >
                {iconosEstado}
            </button>


            <label htmlFor={modalNameEditar}
                onClick={handleEditarClick}
                className="px-2 py-1 transition-transform duration-300 delay-100 ease-in-out hover:scale-110"
                title="Editar cita"
                style={{ cursor: "pointer" }}

            ><SquarePen size={20} className="text-blue-500" /></label>


            
            

        </div>
    )
}

export default Acciones
