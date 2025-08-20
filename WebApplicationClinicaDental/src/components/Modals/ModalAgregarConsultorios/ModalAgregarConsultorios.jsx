import React, { useEffect, useState } from 'react'
import { useDoctores } from '../../../hooks/useDoctores';
import { toast } from 'react-toastify';
import { useConsultoriosAgregar } from '../../../hooks/useConsultorios';

const ModalAgregarConsultorios = ({ idModal, onSubmit }) => {
    const { doctores, cargarDoctores } = useDoctores();
    const { agregarConsultorio } = useConsultoriosAgregar();

    useEffect(() => {
        cargarDoctores();
    }, []);

    const [Form, setForm] = useState({
        nombre: "",
        idDoctor: "" || "-1",
        ubicacion: "",
        idEstado: 0
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await agregarConsultorio(Form);
            await onSubmit();
            toast.success("Consultorio agregado con exito");
            limpiarForm();
        } catch {
            console.error("Error al agregar consultorio");
        }
    }

    const limpiarForm = () => {
        setForm({
            nombre: "",
            idDoctor: "-1",
            ubicacion: "",
            idEstado: 0
        });
    }

    return (
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h2 className="font-bold text-lg text-center mb-4">Agregar Consultorio</h2>

                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Nombre</legend>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={Form.nombre}
                                    onChange={handleChange}
                                    className="input w-full"
                                    required
                                />
                                <div className="label">Requerido</div>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Ubicación</legend>
                                <input
                                    type="text"
                                    name="ubicacion"
                                    value={Form.ubicacion}
                                    onChange={handleChange}
                                    className="input w-full"
                                    required
                                />
                                <div className="label">Requerido</div>
                            </fieldset>

                            <fieldset className="fieldset md:col-span-2">
                                <legend className="fieldset-legend">Doctor</legend>
                                <select
                                    name="idDoctor"
                                    className="select w-full"
                                    required
                                    value={Form.idDoctor}
                                    onChange={handleChange}
                                >
                                    <option value="-1" disabled>Selecciona Doctor</option>
                                    {doctores.map((d) => (
                                        <option key={d.idDoctor} value={d.idDoctor}>
                                            {d.nombre}
                                        </option>
                                    ))}
                                </select>
                                <div className="label">Requerido</div>
                            </fieldset>

                        </div>

                        <div className="flex justify-center mt-6">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Guardar Consultorio
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

export default ModalAgregarConsultorios
