import React, { useState } from 'react'

const ModalEditar = ({ idModal,  Cita}) => {

    console.log(Cita)


    const [FormActualizar, setFormActualizar] = useState({
        idServicio: "" || "-1",
        idDoctor: "" || "-1",
        idPaciente: "" || "-1",
        fecha: "",
        hora: "",
        notaMedica: "" || "Sin Nota Medica",
        idConsultorio: "" || "-1"
    });


    const editarCitaSubmit = async (e) => {
        e.preventDefault()




    }


    return (
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-lg">Editar la Cita</h2>
                    </div>

                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Tipo de Servicio</legend>
                                <select
                                    name="idServicio"
                                    className="select w-full"
                                >
                                    <option value={'-1'} selected>Agregar Servicio</option>


                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Doctor</legend>
                                <select
                                    name="idDoctor"
                                    className="select w-full"
                                >
                                    <option value={'-1'} selected>Agregar Doctor</option>
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Paciente</legend>
                                <select
                                    name="idPaciente"
                                    className="select w-full"
                                >
                                    <option value={'-1'} selected>Agregar Paciente</option>
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Fecha de la cita</legend>
                                <input
                                    type="date"
                                    name="fecha"
                                    className="input w-full"
                                    required
                                />
                                <p className="label">Requerido</p>
                            </fieldset>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Hora de la cita</legend>
                                <input
                                    type="time"
                                    name="hora"
                                    step="1"
                                    className="input w-full"
                                    required
                                />
                                <p className="label">Requerido</p>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Consultorio</legend>
                                <select
                                    name="idConsultorio"
                                    className="select w-full"
                                >
                                    <option value={'-1'} selected>Agregar Consultorio</option>
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>
                        </div>

                        <fieldset className="fieldset mt-6">
                            <legend className="fieldset-legend">Nota Médica</legend>
                            <textarea
                                name="notaMedica"
                                className="textarea h-24 w-full"
                                placeholder="Agrega la Nota Médica"
                                required
                            />
                            <div className="label">Opcional</div>
                        </fieldset>

                        <div className="text-center mt-6">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Editar Cita
                            </button>
                        </div>
                    </form>

                    <div className="modal-action">
                        <label htmlFor={idModal} className="btn">Cerrar</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEditar
