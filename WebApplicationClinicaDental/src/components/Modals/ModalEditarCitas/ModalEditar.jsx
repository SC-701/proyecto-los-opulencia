import React, { useEffect, useState } from 'react'
import { useConsultorios } from '../../../hooks/useConsultorios';
import { usePacientes } from '../../../hooks/usePacientes';
import { useDoctores } from '../../../hooks/useDoctores';
import { useServicios } from '../../../hooks/useServicio';
import { toast } from 'react-toastify';
import { useCitasEditar } from '../../../hooks/useCita';

const ModalEditar = ({ idModal, Cita, onSuccess }) => {
    const { servicios, cargarServicios } = useServicios();
    const { doctores, cargarDoctores } = useDoctores();
    const { pacientes, cargarPacientes } = usePacientes();
    const { consultorios, cargarConsultorios } = useConsultorios();
    const { editarCitaSub } = useCitasEditar();



    const [FormActualizar, setFormActualizar] = useState({
        idServicio: "" || "-1",
        idDoctor: "" || "-1",
        idPaciente: "" || "-1",
        fecha: "",
        hora: "",
        notaMedica: "" || "Sin Nota Medica",
        idConsultorio: "" || "-1",
        idEstado: 3
    });

    useEffect(() => {
        cargarServicios();
        cargarDoctores();
        cargarPacientes();
        cargarConsultorios();
    }, []);




    useEffect(() => {
        if (!Cita || !Cita.idCita || servicios.length === 0 || doctores.length === 0 || pacientes.length === 0 || consultorios.length === 0) {
            return;
        }

        const fechaISO = Cita.fecha
            ? new Date(Cita.fecha).toISOString().split('T')[0]
            : '';

        const idServ = servicios.find(s => s.nombre === Cita.servicio)?.id ?? '-1';
        const idDoc = doctores.find(d => {
            const fullName = `${d.nombre} ${d.apellido}`.trim();
            return fullName === Cita.doctor
        })?.idDoctor ?? '-1';
        const idPac = pacientes.find(p => {
            const fullName = `${p.nombre} ${p.apellido}`.trim();
            return fullName === Cita.paciente
        })?.idPaciente ?? '-1';
        const idCons = consultorios.find(c => c.nombre === Cita.consultorio)?.id ?? '-1';
        setFormActualizar({
            idServicio: idServ,
            idDoctor: idDoc,
            idPaciente: idPac,
            fecha: fechaISO,
            hora: Cita.hora,
            notaMedica: Cita.notaMedica,
            idConsultorio: idCons,
            idEstado: 3
        })
    }, [servicios, doctores, pacientes, consultorios, Cita])



    const handleChange = e => {
        const { name, value } = e.target;
        setFormActualizar(f => ({ ...f, [name]: value }));
    };


    const editarCitaSubmit = async (e) => {
        e.preventDefault();
        try {
            await editarCitaSub(FormActualizar, Cita.idCita);
            await onSuccess();
            toast.success("Cita editada correctamente");
        } catch (err) {
            console.error('Error al editar cita', err);
        }
    }








    return (
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-lg">Editar la Cita</h2>
                    </div>

                    <form onSubmit={editarCitaSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="hidden" value={FormActualizar.idCita} name="idCita" readOnly className="input w-full" />
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Tipo de Servicio</legend>
                                <select
                                    name="idServicio"
                                    value={FormActualizar.idServicio}
                                    onChange={handleChange}
                                    className="select w-full"
                                    required
                                >
                                    <option value="-1" >Selecciona Servicio</option>
                                    {servicios.map(s => (
                                        <option key={s.id} value={s.id}>{s.nombre}</option>
                                    ))}
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Doctor</legend>
                                <select
                                    name="idDoctor"
                                    value={FormActualizar.idDoctor}
                                    onChange={handleChange}
                                    className="select w-full"
                                    required
                                >
                                    <option value="-1" >Selecciona Doctor</option>
                                    {doctores.map(d => (
                                        <option key={d.idDoctor} value={d.idDoctor}>{d.nombre}</option>
                                    ))}
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Paciente</legend>
                                <select
                                    name="idPaciente"
                                    value={FormActualizar.idPaciente}
                                    onChange={handleChange}
                                    className="select w-full"
                                    required
                                >
                                    <option value="-1" >Selecciona Paciente</option>
                                    {pacientes.map(p => (
                                        <option key={p.idPaciente} value={p.idPaciente}>{p.nombre}</option>
                                    ))}
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Fecha de la cita</legend>
                                <input
                                    type="date"
                                    name="fecha"
                                    value={FormActualizar.fecha}
                                    onChange={handleChange}
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
                                    value={FormActualizar.hora}
                                    onChange={handleChange}
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
                                    value={FormActualizar.idConsultorio}
                                    onChange={handleChange}
                                    className="select w-full"
                                    required
                                >
                                    <option value="-1" >Selecciona Consultorio</option>
                                    {consultorios.map(c => (
                                        <option key={c.id} value={c.id}>{c.nombre}</option>
                                    ))}
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>
                        </div>

                        <fieldset className="fieldset mt-6">
                            <legend className="fieldset-legend">Nota Médica</legend>
                            <textarea
                                name="notaMedica"
                                value={FormActualizar.notaMedica}
                                onChange={handleChange}
                                className="textarea h-24 w-full"
                                placeholder="Agrega la Nota Médica"
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