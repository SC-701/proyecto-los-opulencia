import React from 'react'

const ModalAgregar = ({ idModal }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-lg">Agregar Cita</h2>
                    </div>
                    <div className="items-center justify-center flex-col">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Tipo de Servicio</legend>
                            <select defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Agregar Servicio</option>
                                <option>Chrome</option>
                                <option>FireFox</option>
                                <option>Safari</option>
                            </select>
                            <span className="label">Requerido</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Doctor</legend>
                            <select defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Agregar Doctor</option>
                                <option>Chrome</option>
                                <option>FireFox</option>
                                <option>Safari</option>
                            </select>
                            <span className="label">Requerido</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Paciente</legend>
                            <select defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Agregar Paciente</option>
                                <option>Chrome</option>
                                <option>FireFox</option>
                                <option>Safari</option>
                            </select>
                            <span className="label">Requerido</span>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Fecha de la cita</legend>
                            <input type="date" className="input" />
                            <p className="label">Requerido</p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Hora de la cita</legend>
                            <input type="time" className="input" />
                            <p className="label">Requerido</p>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Nota Medica</legend>
                            <textarea className="textarea h-24" placeholder="Agrega la Nota Medica"></textarea>
                            <div className="label">Opcional</div>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Consultorio</legend>
                            <select defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Agregar Consultorio</option>
                                <option>Chrome</option>
                                <option>FireFox</option>
                                <option>Safari</option>
                            </select>
                            <span className="label">Requerido</span>
                        </fieldset>
                    </div>


                    <div className="modal-action">
                        <label htmlFor={idModal} className="btn">Cerrar!</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAgregar
