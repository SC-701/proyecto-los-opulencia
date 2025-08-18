import { useEffect, useState, React } from 'react';
import { useServicios } from '../../../hooks/useServicio';
import { useDoctores } from '../../../hooks/useDoctores';
import { toast } from 'react-toastify';
import { usePacientes } from '../../../hooks/usePacientes';
import { useFacturasAgregar } from '../../../hooks/useFacturas';

const modalAgregarFacturas = ({ idModal, onSuccess }) => {
   const [servicio, setServicios] = useState([]);
    const { servicios, cargarServicios } = useServicios();
    const { doctores, cargarDoctores } = useDoctores();
    const [doctor, setDoctor] = useState([]);
    const { pacientes, cargarPacientes } = usePacientes();
    const [paciente, setPaciente] = useState([]);
    const { agregarFactura } = useFacturasAgregar();

 const [Form, setForm] = useState({
        idServicio: "" || "-1",
        idDoctor: "" || "-1",
        idPaciente: "" || "-1",
        fecha: "",
        subtotal: "" ,
        total: "" 
    });


    const ManejadorCambiosFac = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev, 
            [name]: value
        }));
    }

 const Submit = async (e) => {
        e.preventDefault();
        try {
            if (Form.idServicio === "-1" || Form.idDoctor === "-1" || Form.idPaciente === "-1") {
                toast.error("Favor seleccionar todos los campos");
                return;
            }
            await agregarFactura(Form);
            await onSuccess();
            toast.success(" agregada correctamente");
            limpiarForm();
        } catch (err) {
            console.error('Error al guardar, vuelvalo a intentar', err);
        }
    }

      const limpiarForm = () => {
        setForm({
            idServicio: "-1",
            idDoctor: "-1",
            idPaciente: "-1",
            fecha: "",
            subtotal: "" ,
            total: "" 
        });
    }

     useEffect(() => {
            async function fetchServicios() {
                try {
                    setServicios(await cargarServicios());
                    setDoctor(await cargarDoctores());
                    setPaciente(await cargarPacientes());
                    
                } catch (err) {
                    console.error("Error cargando servicios:", err);
                }
            }
            fetchServicios();
        }, []);
    
        useEffect(() => {
  const servicioSeleccionado = servicios.find(s => s.id === Form.idServicio);
  
  if (servicioSeleccionado) {
    const nuevoSubtotal = parseFloat(servicioSeleccionado.precio);
    const nuevoTotal = parseFloat((nuevoSubtotal * 1.13).toFixed(2)); 
    
    setForm(prev => ({
      ...prev,
      subtotal: nuevoSubtotal,
      total: nuevoTotal
    }));
  }
}, [Form.idServicio, servicios]);


  return (
        <div>
            <input type="checkbox" id={idModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-lg">Facturacion</h2>
                    </div>

               <form onSubmit={Submit}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Servicio */}
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Servicio</legend>
      <select
        name="idServicio"
        value={Form.idServicio}
        onChange={ManejadorCambiosFac}
        className="select w-full"
      >
        <option value="-1">Seleccionar Servicio</option>
        {servicios.map((s, i) => (
          <option key={i} value={s.id}>{s.nombre}</option>
        ))}
      </select>
      <span className="label">Requerido</span>
    </fieldset>

    {/* Doctor */}
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Doctor</legend>
      <select
        name="idDoctor"
        value={Form.idDoctor}
        onChange={ManejadorCambiosFac}
        className="select w-full"
      >
        <option value="-1">Seleccionar Doctor</option>
        {doctor.map((d, i) => (
          <option key={i} value={d.idDoctor}>{d.nombre} {d.apellido}</option>
        ))}
      </select>
      <span className="label">Requerido</span>
    </fieldset>

    {/* Paciente */}
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Paciente</legend>
      <select
        name="idPaciente"
        value={Form.idPaciente}
        onChange={ManejadorCambiosFac}
        className="select w-full"
      >
        <option value="-1">Seleccionar Paciente</option>
        {paciente.map((p, i) => (
          <option key={i} value={p.idPaciente}>{p.nombre} {p.apellido}</option>
        ))}
      </select>
      <span className="label">Requerido</span>
    </fieldset>

    {/* Fecha */}
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Fecha de la factura</legend>
      <input
        type="date"
        name="fecha"
        value={Form.fecha}
        onChange={ManejadorCambiosFac}
        className="input w-full"
        required
      />
      <span className="label">Requerido</span>
    </fieldset>

    {/* Subtotal */}
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Subtotal</legend>
    <input
  type="number"
  name="subtotal"
  value={Form.subtotal}
  className="input w-full"
  readOnly
/>
      <span className="label">Requerido</span>
    </fieldset>

    {/* Total */}
    <fieldset className="fieldset">
      <legend className="fieldset-legend">Total</legend>
     <input
  type="number"
  name="total"
  value={Form.total}
  className="input w-full"
  readOnly
/>
      <span className="label">Requerido</span>
    </fieldset>

  </div>

  <div className="text-center mt-6">
    <button type="submit" className="btn btn-primary btn-lg">
      Agregar Factura
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
export default modalAgregarFacturas
