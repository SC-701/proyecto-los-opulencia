import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { sha256 } from 'js-sha256';
import { useEditarAdministrativo } from '../../../hooks/useAdministrativos';

const ModalEditarAdministrativo = ({ idModal, Administrativo, onSuccess }) => {
  const { editar } = useEditarAdministrativo();

  const [roles, setRoles] = useState([]);

  const [FormActualizar, setFormActualizar] = useState({
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
    idEstadoAdministrativo: 1
  });

  useEffect(() => {
    setRoles([
      { id: '1', nombre: 'Administrador' },
      { id: '2', nombre: 'Recepcionista' }
    ]);
  }, []);

  useEffect(() => {
    if (!Administrativo || !Administrativo.idAdministrativo) return;

    const fechaISO = Administrativo.fechaNacimiento
      ? new Date(Administrativo.fechaNacimiento).toISOString().split('T')[0]
      : '';

    const rolId =
      Administrativo.rol === 'Administrador'
        ? '1'
        : Administrativo.rol === 'Recepcionista'
          ? '2'
          : '-1';

    setFormActualizar(prev => ({
      ...prev,
      nombre: Administrativo.nombre || '',
      apellido: Administrativo.apellido || '',
      email: Administrativo.email || '',
      cedula: Administrativo.cedula ?? '',
      telefono: Administrativo.telefono ?? '',
      direccion: Administrativo.direccion || '',
      fechaNacimiento: fechaISO,
      idEstadoUsuario: 1,
      idRol: rolId,
      passwordHash: '',
      idEstadoAdministrativo: 1
    }));
  }, [Administrativo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormActualizar(f => ({ ...f, [name]: value }));
  };

  const editarAdministrativoSubmit = async (e) => {
    e.preventDefault();
    try {
      if (FormActualizar.idRol === '-1') {
        toast.error('Seleccione Rol');
        return;
      }

      const datos = {
        ...FormActualizar,
        idEstadoAdministrativo: 1
      };

      if (datos.passwordHash && datos.passwordHash.trim() !== '') {
        const EXACT_ONE_UPPER_8 = /^(?=.*[A-Z])(?!.*[A-Z].*[A-Z]).{8}$/;
        if (!EXACT_ONE_UPPER_8.test(datos.passwordHash)) {
          toast.error('La contraseña debe tener exactamente 8 caracteres y exactamente 1 mayúscula.');
          return;
        }
        datos.passwordHash = sha256(datos.passwordHash);
      } else {
        delete datos.passwordHash;
      }

      await editar(Administrativo.idAdministrativo, datos);
      await onSuccess?.();
      toast.success('Administrativo editado correctamente');
    } catch {
      toast.error('Error al editar administrativo');
    }
  };

  return (
    <div>
      <input type="checkbox" id={idModal} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="text-center mb-4">
            <h2 className="font-bold text-lg">Editar Administrativo</h2>
          </div>

          <form onSubmit={editarAdministrativoSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Nombre</legend>
                <input
                  type="text"
                  name="nombre"
                  className="input w-full"
                  value={FormActualizar.nombre}
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
                  value={FormActualizar.apellido}
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
                  value={FormActualizar.email}
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
                  value={FormActualizar.cedula}
                  onChange={handleChange}
                  required
                  inputMode="numeric"
                  pattern="[0-9]{9}"
                  maxLength={9}
                  title="Debe tener exactamente 9 dígitos"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Teléfono</legend>
                <input
                  type="tel"
                  name="telefono"
                  className="input w-full"
                  value={FormActualizar.telefono}
                  onChange={handleChange}
                  required
                  inputMode="numeric"
                  pattern="[0-9]{8}"
                  maxLength={8}
                  title="Debe tener exactamente 8 dígitos"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Dirección</legend>
                <input
                  type="text"
                  name="direccion"
                  className="input w-full"
                  value={FormActualizar.direccion}
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
                  value={FormActualizar.fechaNacimiento}
                  onChange={handleChange}
                  required
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Rol</legend>
                <select
                  name="idRol"
                  value={FormActualizar.idRol}
                  onChange={handleChange}
                  className="select w-full"
                  required
                >
                  <option value="-1">Selecciona Rol</option>
                  {roles.map((r) => (
                    <option key={r.id} value={r.id}>{r.nombre}</option>
                  ))}
                </select>
                <span className="label">Requerido</span>
              </fieldset>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Contraseña (opcional)</legend>
                <input
                  type="password"
                  name="passwordHash"
                  className="input w-full"
                  value={FormActualizar.passwordHash}
                  onChange={handleChange}
                  placeholder="Contraseña"
                  minLength={8}
                  maxLength={8}
                  pattern="^(?=.*[A-Z])(?!.*[A-Z].*[A-Z]).{8}$"
                  title="Debe tener exactamente 8 caracteres y exactamente 1 mayúscula."
                  onInvalid={(e) => e.currentTarget.setCustomValidity('Debe tener exactamente 8 caracteres y exactamente 1 mayúscula.')}
                  onInput={(e) => e.currentTarget.setCustomValidity('')}
                  autoComplete="new-password"
                />
                <div className="label">Opcional</div>
              </fieldset>
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="btn btn-primary btn-lg">
                Editar Administrativo
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

export default ModalEditarAdministrativo;
