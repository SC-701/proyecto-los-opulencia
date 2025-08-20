import React, { useEffect, useState } from 'react'
import { useEditarServicios } from '../../../hooks/useServicio';
import { useObtenerEstados } from '../../../hooks/useEstados';
import { toast } from 'react-toastify';

const ModalEditarServicios = ({idModal, Servicio, onSuccess}) => {
    const { editarServiciosAsync } = useEditarServicios();
        const [form, setForm] = useState({
            nombre: '',
            precio: '',
            descripcion: '',
            idEstado: ''
        });
            const { estados, cargarEstados } = useObtenerEstados();
        
    const handleChange = e => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };
        useEffect(() => {
            cargarEstados();
        }, []);
        console.log(estados)

    useEffect(() => {
        const idEst = estados.find(e => e.descripcion === Servicio.estado)?.idEstado ?? '-1';
        if (Servicio) {
            setForm({
                nombre: Servicio.nombre,
                precio: Servicio.precio,
                descripcion: Servicio.descripcion,
                idEstado: idEst
            });
        }
    }, [Servicio]);

        const editarServicioSubmit = async (e) => {
            e.preventDefault();
            try {
                await editarServiciosAsync(Servicio.id, form);
                await onSuccess();
                toast.success("Servicio editado correctamente");
            } catch (err) {
                console.error('Error al editar servicio', err);
            }
        }

    return (
        <div>
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-lg">Editar Servicio</h2>
                    </div>

                    <form  onSubmit={editarServicioSubmit} >
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
                                    min="1"
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
                                Editar Servicio
                            </button>
                        </div>
                    </form>

                    <div className="modal-action">
                        <label htmlFor={idModal} className="btn">Cerrar</label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ModalEditarServicios
