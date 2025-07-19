import { Ban, CalendarCheck, CircleAlert, SquarePen } from 'lucide-react';
import React from 'react'
import { EstadosCitas } from '../../assets/constants/Estados';


const Acciones = ({ estado, onToggleEstado, onEditar}) => {
    const iconosEstado = EstadosCitas.obtenerIcono(estado);

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
                className="px-2 py-1 transition-transform duration-300 delay-100 ease-in-out hover:scale-110"
                onClick={onEditar}
                style={{ cursor: "pointer" }}
                title="Editar cita"
            >
                <SquarePen size={20} className="text-blue-500" />
            </button>
        </div>
    )
}

export default Acciones
