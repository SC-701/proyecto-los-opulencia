import { useState, useEffect } from 'react';
import { useEditarPaciente } from '../../../hooks/usePacientes';
import { toast } from 'react-toastify';

const ModalEditarPaciente = ({ idModal, Paciente, onSuccess }) => {
    const { editar } = useEditarPaciente();

    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        cedula: '',
        telefono: '',
        direccion: '',
        fechaNacimiento: '',
        grupoSangineo: '',
        alergias: '',
        observaciones: '',
        idEstadoUsuario: 1,       
    idEstadoPaciente: 1
    });

    useEffect(() => {
        if (Paciente) {
            setForm({
                nombre: Paciente.nombre || '',
                apellido: Paciente.apellido || '',
                email: Paciente.email || '',
                cedula: Paciente.cedula || '',
                telefono: Paciente.telefono || '',
                direccion: Paciente.direccion || '',
                fechaNacimiento: Paciente.fechaNacimiento?.split('T')[0] || '',
                grupoSangineo: Paciente.grupoSangineo || '',
                alergias: Paciente.alergias || '',
                observaciones: Paciente.observaciones || '',
                 idEstadoUsuario: 1,
                idEstadoPaciente: 1
            });
        }
    }, [Paciente]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editar(Paciente.idPaciente, form);
            toast.success("Paciente editado correctamente");
            await onSuccess();
        } catch (err) {
            toast.error("Error al editar paciente");
            console.error(err);
        }
    };

    return (
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-lg">Editar Paciente</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Nombre</legend>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="input w-full"
                                    value={form.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Apellido</legend>
                                <input
                                    type="text"
                                    name="apellido"
                                    className="input w-full"
                                    value={form.apellido}
                                    onChange={handleChange}
                                    required
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Correo</legend>
                                <input
                                    type="email"
                                    name="email"
                                    className="input w-full"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Cédula</legend>
                                <input
                                    type="number"
                                    name="cedula"
                                    className="input w-full"
                                    value={form.cedula}
                                    onChange={handleChange}
                                    required
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Teléfono</legend>
                                <input
                                    type="number"
                                    name="telefono"
                                    className="input w-full"
                                    value={form.telefono}
                                    onChange={handleChange}
                                    required
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Dirección</legend>
                                <input
                                    type="text"
                                    name="direccion"
                                    className="input w-full"
                                    value={form.direccion}
                                    onChange={handleChange}
                                    required
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Fecha de Nacimiento</legend>
                                <input
                                    type="date"
                                    name="fechaNacimiento"
                                    className="input w-full"
                                    value={form.fechaNacimiento}
                                    onChange={handleChange}
                                    required
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Grupo Sanguíneo</legend>
                                <input
                                    type="text"
                                    name="grupoSangineo"
                                    className="input w-full"
                                    value={form.grupoSangineo}
                                    onChange={handleChange}
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Alergias</legend>
                                <input
                                    type="text"
                                    name="alergias"
                                    className="input w-full"
                                    value={form.alergias}
                                    onChange={handleChange}
                                />
                            </fieldset>

                            <fieldset className="fieldset md:col-span-2">
                                <legend className="fieldset-legend">Observaciones</legend>
                                <textarea
                                    name="observaciones"
                                    className="textarea w-full h-24"
                                    value={form.observaciones}
                                    onChange={handleChange}
                                />
                            </fieldset>
                        </div>

                        <div className="text-center mt-6">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Guardar Cambios
                            </button>
                        </div>
                    </form>

                    <div className="modal-action">
                        <label htmlFor={idModal} className="btn">Cerrar</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEditarPaciente;
