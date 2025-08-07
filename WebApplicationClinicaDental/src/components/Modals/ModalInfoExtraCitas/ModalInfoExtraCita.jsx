import React, { useEffect, useState } from 'react'
import { useCitasInfoExtra } from '../../../hooks/useCita';

const ModalInfoExtraCitas = ({ idModal, Cita }) => {
    const { citasInfoExtra } = useCitasInfoExtra(Cita.idCita);

    return (
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-6">
                        <h2 className="font-bold text-2xl text-blue-600">Información Extra de la Cita</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg shadow">
                            <p><span className="font-semibold text-gray-700 px-1">Cédula del paciente:</span> {citasInfoExtra.cedula}</p>
                            <p><span className="font-semibold text-gray-700 px-1">Paciente:</span> {citasInfoExtra.paciente}</p>
                            <p><span className="font-semibold text-gray-700 px-1">Fecha de Nacimiento:</span> {citasInfoExtra.fechaNacimiento}</p>
                            <p><span className="font-semibold text-gray-700 px-1">Grupo Sanguíneo:</span><div className='badge bg-red-500 text-white'>{citasInfoExtra.grupoSanguineo}</div></p>
                            <p><span className="font-semibold text-gray-700 px-1">Teléfono:</span> {citasInfoExtra.telefono}</p>
                            <p><span className="font-semibold text-gray-700 px-1">Alergias:</span> {citasInfoExtra.alergias}</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg shadow">
                            <p><span className="font-semibold text-gray-700 px-1">Doctor:</span> {citasInfoExtra.doctor}</p>
                            <p><span className="font-semibold text-gray-700 px-1">Servicio:</span> {citasInfoExtra.servicio}</p>
                            <p><span className="font-semibold text-gray-700 px-1">Fecha de la cita:</span> {citasInfoExtra.fecha}</p>
                            <p><span className="font-semibold text-gray-700 px-1">Hora de la cita:</span> {citasInfoExtra.hora}</p>
                            <p><span className="font-semibold text-gray-700 px-1">Estado:</span> {
                                citasInfoExtra.estado === 'Pendiente' ? <span className="badge bg-yellow-500 text-white">{citasInfoExtra.estado}</span> :
                                    citasInfoExtra.estado === 'Completada' ? <span className="badge bg-green-500 text-white">{citasInfoExtra.estado}</span> :
                                        <span className="badge bg-red-500 text-white">{citasInfoExtra.estado}</span>
                            }  </p>
                            <p><span className="font-semibold text-gray-700 px-1">Observaciones:</span> {citasInfoExtra.observaciones}</p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                        <p><span className="font-semibold text-blue-700">Nota Médica:</span> {citasInfoExtra.notaMedica}</p>
                    </div>

                    <div className="modal-action">
                        <label htmlFor={idModal} className="btn">Cerrar</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInfoExtraCitas
