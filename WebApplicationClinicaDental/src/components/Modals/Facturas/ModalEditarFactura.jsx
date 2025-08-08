import React, { useEffect, useState } from 'react'
import { useServicios } from '../../../hooks/useServicio';
import { useDoctores } from '../../../hooks/useDoctores';
import { usePacientes } from '../../../hooks/usePacientes';
import { toast } from 'react-toastify';
import { useFacturasEditar } from '../../../hooks/useFacturas';

const ModalEditarFactura = ({ idModal, factura, onSuccess }) => {
    const { servicios, cargarServicios } = useServicios();
    const { doctores, cargarDoctores } = useDoctores();
    const { pacientes, cargarPacientes } = usePacientes();
    const { editarFacturaSub } = useFacturasEditar();

const [FormFacActualizar, setFormFacActualizar] = useState({
  idFactura: "",
  idServicio: "-1",
  idDoctor: "-1",
  idPaciente: "-1",
  fecha: "",
  subtotal: "",
  total: "",
  idEstado: 7
});

    useEffect(() => {
        cargarServicios();
        cargarDoctores();
        cargarPacientes();
    }, []);


    
useEffect(() => {
      if (!factura) return;
    const fechaISO = factura.fecha
        ? new Date(factura.fecha).toISOString().split('T')[0]
        : '';

    const idServ = servicios.find(s => s.nombre === factura.servicio)?.id ?? '-1';

    const idDoc = doctores.find(d => {
        const fullName = `${d.nombre} ${d.apellido}`.trim();
        return fullName === factura.doctor;
    })?.idDoctor ?? '-1';

    const idPac = pacientes.find(p => {
        const fullName = `${p.nombre} ${p.apellido}`.trim();
        return fullName === factura.paciente;
    })?.idPaciente ?? '-1';

setFormFacActualizar({
  idFactura: factura.idFactura,
  idServicio: idServ,
  idDoctor: idDoc,
  idPaciente: idPac,
  fecha: fechaISO,
  subtotal: factura.subtotal ?? "",
  total: factura.total ?? "",
  idEstado: factura.idEstado ?? 3
});
}, [servicios, doctores, pacientes, factura]);


    const handleChange = e => {
        const { name, value } = e.target;
        setFormFacActualizar(f => ({ ...f, [name]: value }));
    };

    
        const editarFacturaSubmit = async (e) => {
            e.preventDefault();
            try {
                await editarFacturaSub(FormFacActualizar, factura.idFactura);
                await onSuccess();
                toast.success("Factura editada correctamente");
            } catch (err) {
                console.error('Error al editar factura', err);
            }
        }

return (
  <div>
    <input type="checkbox" id={idModal} className="modal-toggle" />
    <div className="modal" role="dialog">
      <div className="modal-box">
        <div className="text-center mb-4">
          <h2 className="font-bold text-lg">Editar Factura</h2>
        </div>

        <form onSubmit={editarFacturaSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="hidden" value={FormFacActualizar.idFactura} name="idfactura" readOnly className="input w-full" />
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Servicio</legend>
              <select
                name="idServicio"
                value={FormFacActualizar.idServicio}
                onChange={handleChange}
                className="select w-full"
                required
              >
                <option value="-1">Seleccionar Servicio</option>
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
                value={FormFacActualizar.idDoctor}
                onChange={handleChange}
                className="select w-full"
                required
              >
                <option value="-1">Seleccionar Doctor</option>
                {doctores.map(d => (
                  <option key={d.idDoctor} value={d.idDoctor}>{d.nombre} {d.apellido}</option>
                ))}
              </select>
              <span className="label">Requerido</span>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Paciente</legend>
              <select
                name="idPaciente"
                value={FormFacActualizar.idPaciente}
                onChange={handleChange}
                className="select w-full"
                required
              >
                <option value="-1">Seleccionar Paciente</option>
                {pacientes.map(p => (
                  <option key={p.idPaciente} value={p.idPaciente}>{p.nombre} {p.apellido}</option>
                ))}
              </select>
              <span className="label">Requerido</span>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Fecha</legend>
              <input
                type="date"
                name="fecha"
                value={FormFacActualizar.fecha}
                onChange={handleChange}
                className="input w-full"
                required
              />
              <span className="label">Requerido</span>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Subtotal</legend>
              <input
                type="number"
                name="subtotal"
                value={FormFacActualizar.subtotal}
                onChange={handleChange}
                className="input w-full"
                min="0"
                step="0.01"
                required
              />
              <span className="label">Requerido</span>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Total</legend>
              <input
                type="number"
                name="total"
                value={FormFacActualizar.total}
                onChange={handleChange}
                className="input w-full"
                min="0"
                step="0.01"
                required
              />
              <span className="label">Requerido</span>
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



}

export default ModalEditarFactura