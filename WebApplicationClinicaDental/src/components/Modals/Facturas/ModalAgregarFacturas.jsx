import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useFacturasEditar } from '../../../hooks/useFacturas'

const ModalPagarFactura = ({ idModal, factura, onSuccess }) => {
  const { editarFacturaSub } = useFacturasEditar()

  const [FormFacActualizar, setFormFacActualizar] = useState({
    idFactura: '',
    fecha: '',
    subtotal: '',
    total: '',
    idEstado: 7,
  })

  useEffect(() => {
    if (!factura) return
    const fechaISO = factura.fecha
      ? new Date(factura.fecha).toISOString().split('T')[0]
      : ''

    setFormFacActualizar({
      total: factura.total ?? '',
      idEstado: factura.idEstado ?? 3,
    })
  }, [factura])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFacActualizar((f) => ({ ...f, [name]: value }))
  }

  const editarFacturaSubmit = async (e) => {
    e.preventDefault()
    try {
      await editarFacturaSub(FormFacActualizar, factura.idFactura)
      await onSuccess?.()
      toast.success('Factura editada correctamente')

      const chk = document.getElementById(idModal)
      if (chk) chk.checked = false
    } catch (err) {
      console.error('Error al editar factura', err)
      toast.error('No se pudo editar la factura')
    }
  }

  return (
    <div>
      <input type="checkbox" id={idModal} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="text-center mb-4">
            <h2 className="font-bold text-lg">Pagar Factura</h2>
          </div>

          <form onSubmit={editarFacturaSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="hidden"
                value={FormFacActualizar.idFactura}
                name="idFactura"
                readOnly
                className="input w-full"
              />

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Servicio</legend>
                <input
                  type="text"
                  value={factura?.servicio }
                  readOnly
                  className="input w-full"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Doctor</legend>
                <input
                  type="text"
                  value={factura?.doctor }
                  readOnly
                  className="input w-full"
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Paciente</legend>
                <input
                  type="text"
                  value={factura?.paciente }
                  readOnly
                  className="input w-full"
                />
              </fieldset>

             
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Fecha</legend>
                <input
                  type="date"
                  name="fecha"
                  value={FormFacActualizar.fecha}
                  onChange={handleChange}
                  className="input w-full"
                  readOnly
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Subtotal</legend>
                <input
                  type="number"
                  name="subtotal"
                  value={factura?.subtotal}
                  className="input w-full"
                  readOnly
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
            <label htmlFor={idModal} className="btn">
              Cerrar
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPagarFactura
