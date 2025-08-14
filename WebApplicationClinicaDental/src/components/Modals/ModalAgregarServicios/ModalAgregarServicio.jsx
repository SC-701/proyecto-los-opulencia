import { useState } from 'react';
import { toast } from 'react-toastify';
import { agregarServicio } from '../../../services/Servicios';

const ModalAgregarServicio = ({ idModal, onSuccess }) => {
    const [form, setForm] = useState({
        nombre: '',
        precio: '',
        descripcion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await agregarServicio(form);
            await onSuccess();
            limpiarForm();
            toast.success("Servicio agregado correctamente");
        } catch (err) {
            console.error("Error enviando formulario:", err);
        }
        console.log("Formulario enviado:", form);
    };

    const limpiarForm = () => {
        setForm({
            nombre: '',
            precio: '',
            descripcion: ''
        });
    };

    return (
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-lg">Agregar Servicio</h2>
                    </div>

                    <form  onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Servicio</legend>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="input w-full"
                                    value={form.nombre}
                                    onChange={handleChange}
                                    required
                                />
                                <p className="label">Requerido</p>
                            </fieldset>


                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Costo</legend>
                                <input
                                    type="number"
                                    name="precio"
                                    className="input w-full"
                                    value={form.precio}
                                    onChange={handleChange}
                                    required
                                />
                                <p className="label">Requerido</p>
                            </fieldset>

                            <fieldset className="fieldset md:col-span-2">
                                <legend className="fieldset-legend">Descripcion</legend>
                                <textarea
                                    name="descripcion"
                                    className="textarea w-full h-24"
                                    value={form.descripcion}
                                    onChange={handleChange}
                                    required
                                />
                                <p className="label">Requerido</p>
                            </fieldset>
                        </div>

                        <div className="text-center mt-6">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Agregar Servicio
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

export default ModalAgregarServicio;
