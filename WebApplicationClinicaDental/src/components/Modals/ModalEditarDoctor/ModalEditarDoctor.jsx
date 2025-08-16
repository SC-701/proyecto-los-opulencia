import { useState, useEffect } from 'react';
import { useEditarDoctor } from '../../../hooks/useDoctores';
import { useServicios } from '../../../hooks/useServicio';
import { toast } from 'react-toastify';

const ModalEditarDoctor = ({ idModal, Doctor, onSuccess }) => {
  const { editar } = useEditarDoctor();
  const { servicios, cargarServicios } = useServicios();

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    cedula: '',
    telefono: '',
    direccion: '',
    fechaNacimiento: '',
    especialidad: '',
    licenciaProfesional: '',
    fechaInicio: '',
    idServicio: '-1',
    idEstadoUsuario: 1,
    idEstadoDoctor: 1
  });

  useEffect(() => { cargarServicios(); }, []);

  useEffect(() => {
    if (Doctor) {
      setForm({
        nombre: Doctor.nombre || '',
        apellido: Doctor.apellido || '',
        email: Doctor.email || '',
        cedula: Doctor.cedula || '',
        telefono: Doctor.telefono || '',
        direccion: Doctor.direccion || '',
        fechaNacimiento: Doctor.fechaNacimiento?.split('T')[0] || '',
        especialidad: Doctor.especialidad || '',
        licenciaProfesional: Doctor.licenciaProfesional || '',
        fechaInicio: Doctor.fechaInicio?.split('T')[0] || '',
        idServicio: '-1',
        idEstadoUsuario: Doctor.idEstadoUsuario || 1,
        idEstadoDoctor: Doctor.idEstadoDoctor || 1
      });
    }
  }, [Doctor]);

  useEffect(() => {
    if (!Doctor || servicios.length === 0) return;
    const norm = s => (s || '').toLowerCase().trim();
    const encontrado = servicios.find(s => norm(s.nombre) === norm(Doctor.servicio));
    setForm(prev => ({ ...prev, idServicio: encontrado ? encontrado.id : '-1' }));
  }, [Doctor, servicios]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (form.idServicio === '-1') {
        toast.error('Debes seleccionar un servicio');
        return;
      }
      await editar(Doctor.idDoctor, form);
      toast.success('Doctor editado correctamente');
      await onSuccess();
    } catch (err) {
      toast.error('Error al editar doctor');
      console.error(err);
    }
  };

  return (
    <div>
      <input type="checkbox" id={idModal} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="text-center mb-4">
            <h2 className="font-bold text-lg">Editar Doctor</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Nombre</legend>
                <input type="text" name="nombre" className="input w-full" value={form.nombre} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Apellido</legend>
                <input type="text" name="apellido" className="input w-full" value={form.apellido} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Correo</legend>
                <input type="email" name="email" className="input w-full" value={form.email} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Cédula</legend>
                <input type="number" name="cedula" className="input w-full" value={form.cedula} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Teléfono</legend>
                <input type="number" name="telefono" className="input w-full" value={form.telefono} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Dirección</legend>
                <input type="text" name="direccion" className="input w-full" value={form.direccion} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Fecha de Nacimiento</legend>
                <input type="date" name="fechaNacimiento" className="input w-full" value={form.fechaNacimiento} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Especialidad</legend>
                <input type="text" name="especialidad" className="input w-full" value={form.especialidad} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Licencia Profesional</legend>
                <input type="text" name="licenciaProfesional" className="input w-full" value={form.licenciaProfesional} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Fecha de Inicio</legend>
                <input type="date" name="fechaInicio" className="input w-full" value={form.fechaInicio} onChange={handleChange} required />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Servicio</legend>
                <select
                  name="idServicio"
                  value={form.idServicio}
                  onChange={handleChange}
                  className="select w-full"
                  required
                >
                  <option value="-1">Seleccionar Servicio</option>
                  {servicios.map((s, i) => (
                    <option key={i} value={s.id}>{s.nombre}</option>
                  ))}
                </select>
              </fieldset>
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="btn btn-primary btn-lg">Guardar Cambios</button>
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

export default ModalEditarDoctor;
