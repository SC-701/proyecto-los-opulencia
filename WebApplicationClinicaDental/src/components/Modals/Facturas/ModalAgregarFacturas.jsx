import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {  usePagoFactura } from '../../../hooks/useFacturas';

const modalAgregarFacturas = ({ idModal, factura, onSuccess }) => {
  const { PagoFacturaAsync } = usePagoFactura();

  const [FormFacActualizar, setFormFacActualizar] = useState({
    pago: ""
  });


  const handleChange = e => {
    const { name, value } = e.target;
    setFormFacActualizar(f => ({ ...f, [name]: value }));
  };

  const limpiarForm = () => {
    setFormFacActualizar({
      pago: ""
    });
  }

  const editarFacturaSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      if (FormFacActualizar.pago > factura.total) {
        toast.error("Debe ingresar un monto menor al total");
        return;
      }
      if (FormFacActualizar.pago <= 0) {
        toast.error("Debe ingresar un monto mayor a 0");
        return;
      }
      await PagoFacturaAsync(FormFacActualizar, factura.idFactura);
       limpiarForm();
      await onSuccess();
      toast.success("Factura pagada correctamente");
    } catch (err) {
      console.error('Error al pagar la factura', err);
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
                <legend className="fieldset-legend">Total</legend>
                <h1 className="text-2xl font-bold py-4"> Por pagar:   {factura?.total ?? ""}
                </h1>

              </fieldset>
            </div>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Monto a cancelar</legend>
              <input
                type="number"
                name="pago"
                className="input w-full"
                required
                value={FormFacActualizar.pago}
                onChange={handleChange}
                min={0}
              />
              <p className="label">Requerido</p>
            </fieldset>


            <div className="text-center mt-6">
              <button type="submit" className="btn btn-primary btn-lg">
                Pagar
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

export default modalAgregarFacturas
