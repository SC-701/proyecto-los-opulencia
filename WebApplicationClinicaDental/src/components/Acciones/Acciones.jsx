import { Ban, CalendarCheck, CircleAlert, SquarePen } from 'lucide-react';
import React from 'react'
import { EstadosCitas } from '../../assets/constants/Estados';


const Acciones = ({ manager, estado, onToggleEstado, onEditar, modalName }) => {
    const iconosEstado = manager?.obtenerIcono(estado);
    
    const handleEditarClick = () => {
        // Acá primero actualizo el state
        onEditar();
        // Para darle chance al mdal de cargar respecto al clic puse un delay
        setTimeout(() => {
            document.getElementById(modalName).checked = true;
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


            <button
                onClick={handleEditarClick}
                className="px-2 py-1 transition-transform duration-300 delay-100 ease-in-out hover:scale-110"
                title="Editar cita"
                style={{ cursor: "pointer" }}

            ><SquarePen size={20} className="text-blue-500" /></button>

        </div>
    )
}

export default Acciones
