import { useEffect, useState, React } from 'react';
import { useServicios } from '../../../hooks/useServicio';
import { useDoctores } from '../../../hooks/useDoctores';
import { toast } from 'react-toastify';
import { useConsultorios } from '../../../hooks/useConsultorios';
import { usePacientes } from '../../../hooks/usePacientes';
import { useCitasAgregar } from '../../../hooks/useCita';
import { useFacturasAgregar } from '../../../hooks/useFacturas';

const ModalAgregar = ({ idModal, onSuccess }) => {
    const [servicio, setServicios] = useState([]);
    const { servicios, cargarServicios } = useServicios();
    const { doctores, cargarDoctores } = useDoctores();
    const [doctor, setDoctor] = useState([]);
    const { consultorio, cargarConsultorios } = useConsultorios();
    const [consultorios, setConsultorio] = useState([]);
    const { pacientes, cargarPacientes } = usePacientes();
    const [paciente, setPaciente] = useState([]);
    const { agregarCita } = useCitasAgregar();
    const { agregarFactura } = useFacturasAgregar();

    const [Form, setForm] = useState({
        idServicio: "" || "-1",
        idDoctor: "" || "-1",
        idPaciente: "" || "-1",
        fecha: "",
        hora: "",
        notaMedica: "" || "Sin Nota Medica",
        idConsultorio: "" || "-1"
    });


    const ManejadorCambios = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const hoyLocal = new Date().toLocaleDateString('en-CA');


    const Submit = async (e) => {
        e.preventDefault();
        try {
            if (Form.idServicio === "-1" || Form.idDoctor === "-1" || Form.idPaciente === "-1" || Form.idConsultorio === "-1") {
                toast.error("Favor seleccionar todos los campos");
                return;
            }
            if(hoyLocal > Form.fecha) {
                toast.error("La fecha no puede ser menor a la fecha actual");
                return;
            }
            await agregarCita(Form);
            
            const costo = servicios.find(s => s.id === Form.idServicio)?.precio ?? 0;
            const IVA = costo * 0.13;
            const total = costo + IVA;

            const FormFacActualizar = {
                idServicio: Form.idServicio,
                idDoctor: Form.idDoctor,
                idPaciente: Form.idPaciente,
                fecha: Form.fecha,
                subtotal: costo,
                total: total, 
                idEstado: 0
            };
           

            await agregarFactura(FormFacActualizar);
            await onSuccess();
            toast.success("Cita agregada correctamente");
            limpiarForm();
        } catch (err) {
            console.error('Error al agregar cita', err);
        }






    }



    const limpiarForm = () => {
        setForm({
            idServicio: "-1",
            idDoctor: "-1",
            idPaciente: "-1",
            fecha: "",
            hora: "",
            notaMedica: "Sin Nota Medica",
            idConsultorio: "-1"
        });
    }



    useEffect(() => {
        async function fetchServicios() {
            try {
                setServicios(await cargarServicios());
                setDoctor(await cargarDoctores());
                setConsultorio(await cargarConsultorios());
                setPaciente(await cargarPacientes());
            } catch (err) {
                console.error("Error cargando servicios:", err);
            }
        }
        fetchServicios();
    }, []);



    return (
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-lg">Agregar Cita</h2>
                    </div>

                    <form onSubmit={Submit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Tipo de Servicio</legend>
                                <select
                                    name="idServicio"
                                    value={Form.idServicio}
                                    onChange={ManejadorCambios}
                                    className="select w-full"
                                >
                                    <option value={'-1'} selected>Agregar Servicio</option>
                                    {
                                        servicios.filter(s => s.estado === "Activo").map((s, i) => (
                                            <option key={i} value={s.id}>{s.nombre}</option>
                                        ))
                                    }


                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Doctor</legend>
                                <select
                                    name="idDoctor"
                                    value={Form.idDoctor}
                                    onChange={ManejadorCambios}
                                    className="select w-full"
                                >
                                    <option value={'-1'} selected>Agregar Doctor</option>
                                    {doctores.map((d, i) => (
                                        <option key={i} value={d.idDoctor}>{d.nombre} {d.apellido}</option>
                                    ))}
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Paciente</legend>
                                <select
                                    name="idPaciente"
                                    value={Form.idPaciente}
                                    onChange={ManejadorCambios}
                                    className="select w-full"
                                >
                                    <option value={'-1'} selected>Agregar Paciente</option>
                                    {paciente.map((p, i) => (
                                        <option key={i} value={p.idPaciente}>{p.nombre} {p.apellido}</option>
                                    ))}
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Fecha de la cita</legend>
                                <input
                                    type="date"
                                    name="fecha"
                                    value={Form.fecha}
                                    onChange={ManejadorCambios}
                                    className="input w-full"
                                    required
                                    min={hoyLocal}
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
                                    value={Form.hora}
                                    onChange={ManejadorCambios}
                                    className="input w-full"
                                    required
                                />
                                <p className="label">Requerido</p>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Consultorio</legend>
                                <select
                                    name="idConsultorio"
                                    value={Form.idConsultorio}
                                    onChange={ManejadorCambios}
                                    className="select w-full"
                                >
                                    <option value={'-1'} selected>Agregar Consultorio</option>
                                    {consultorios.filter(c => c.estado === "Activo").map((c, i) => (
                                        <option key={i} value={c.id}>{c.nombre}</option>
                                    ))}
                                </select>
                                <span className="label">Requerido</span>
                            </fieldset>
                        </div>

                        <fieldset className="fieldset mt-6">
                            <legend className="fieldset-legend">Nota Médica</legend>
                            <textarea
                                name="notaMedica"
                                value={Form.notaMedica}
                                onChange={ManejadorCambios}
                                className="textarea h-24 w-full"
                                placeholder="Agrega la Nota Médica"
                                required
                            />
                            <div className="label">Opcional</div>
                        </fieldset>

                        <div className="text-center mt-6">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Agregar Cita
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

export default ModalAgregar

