import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { sha256 } from 'js-sha256';
import { useRegistrarAdministrativo } from '../../../hooks/useAdministrativos';

const ModalAgregarAdministrativo = ({ idModal, onSuccess }) => {
  const { registrar } = useRegistrarAdministrativo();

  const [roles, setRoles] = useState([]);

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    cedula: '',
    telefono: '',
    direccion: '',
    fechaNacimiento: '',
    idEstadoUsuario: 1,
    idRol: '-1',
    passwordHash: '',
    idEstadoAdministrativo: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.idRol === '-1') {
        toast.error('Favor seleccionar el rol');
        return;
      }

      const EXACT_ONE_UPPER_8 = /^(?=.*[A-Z])(?!.*[A-Z].*[A-Z]).{8}$/;
      if (!EXACT_ONE_UPPER_8.test(form.passwordHash)) {
        toast.error('La contraseña debe tener exactamente 8 caracteres y exactamente 1 mayúscula.');
        return;
      }
      const hashed = sha256(form.passwordHash);

      await registrar({
        ...form,
        passwordHash: hashed,
      });
      await onSuccess?.();
      limpiarForm();
      toast.success('Administrativo agregado correctamente');
    } catch (err) {
      toast.error('Error al registrar administrativo');
    }
  };

  const limpiarForm = () => {
    setForm({
      nombre: '',
      apellido: '',
      email: '',
      cedula: '',
      telefono: '',
      direccion: '',
      fechaNacimiento: '',
      idEstadoUsuario: 1,
      idRol: '-1',
      passwordHash: '',
      idEstadoAdministrativo: 1,
    });
  };

  useEffect(() => {
    setRoles([
      { id: 1, nombre: 'Administrador' },
      { id: 2, nombre: 'Recepcionista' },
    ]);
  }, []);

  return (
    <div>
      <input type="checkbox" id={idModal} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="text-center mb-4">
            <h2 className="font-bold text-lg">Agregar Administrativo</h2>
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
                  type="tel"
                  name="cedula"
                  className="input w-full"
                  value={form.cedula}
                  onChange={handleChange}
                  required
                  inputMode="numeric"
                  pattern="[0-9]{9}"
                  maxLength={9}
                  title="Debe tener exactamente 9 dígitos"
                  autoComplete="off"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Teléfono</legend>
                <input
                  type="tel"
                  name="telefono"
                  className="input w-full"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                  inputMode="numeric"
                  pattern="[0-9]{8}"
                  maxLength={8}
                  title="Debe tener exactamente 8 dígitos"
                  autoComplete="off"
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
                <legend className="fieldset-legend">Rol</legend>
                <select
                  name="idRol"
                  value={form.idRol}
                  onChange={handleChange}
                  className="select w-full"
                  required
                >
                  <option value="-1">Seleccionar Rol</option>
                  {roles.map((r, i) => (
                    <option key={i} value={r.id}>
                      {r.nombre}
                    </option>
                  ))}
                </select>
                <span className="label">Requerido</span>
              </fieldset>
            </div>

            <fieldset className="fieldset mt-6">
              <legend className="fieldset-legend">Contraseña</legend>
              <input
                type="password"
                name="passwordHash"
                className="input w-full"
                value={form.passwordHash}
                onChange={handleChange}
                required
                pattern="^(?=.*[A-Z])(?!.*[A-Z].*[A-Z]).{8}$"
                title="La contraseña debe tener exactamente 8 caracteres y exactamente 1 mayuscula"
                onInvalid={(e) =>
                  e.currentTarget.setCustomValidity('Debe tener exactamente 8 caracteres y exactamente 1 mayuscula')
                }
                onInput={(e) => e.currentTarget.setCustomValidity('')}
              />
              <div className="label">Requerido</div>
            </fieldset>

            <div className="text-center mt-6">
              <button type="submit" className="btn btn-primary btn-lg">
                Agregar Administrativo
              </button>
            </div>
          </form>

          <div className="modal-action">
            <label htmlFor={idModal} className="btn">
              Cerrar
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAgregarAdministrativo;
