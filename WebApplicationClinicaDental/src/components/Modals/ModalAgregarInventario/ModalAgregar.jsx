import React, { useState } from "react";
import { toast } from "react-toastify";
import { useInventarioAgregar } from "../../../hooks/UseInventario.js";
import { EstadosInventario } from "../../../assets/constants/Estados.jsx";

const ModalAgregar = ({ idModal, onSuccess }) => {
  const { agregar } = useInventarioAgregar();

  const [form, setForm] = useState({
    producto: "",
    descripcion: "",
    categoria: "-1",
    cantidad: "",
    unidad: "-1",
    fechaVencimiento: "",
    idEstado: String(EstadosInventario.conversionEstado("Disponible"))
  });

  const categorias = ["Protección","Medicamentos","Higiene","Consumo","Instrumental","Insumos","Equipos","Sueros","Curación","Otros"];
  const unidades = ["unidades","pares","ampollas","rollos","bolsas","cajas","botellas","tubos","jeringas","agujas","frascos"];

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const reset = () => setForm({
    producto: "",
    descripcion: "",
    categoria: "-1",
    cantidad: "",
    unidad: "-1",
    fechaVencimiento: "",
    idEstado: String(EstadosInventario.conversionEstado("Disponible"))
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.producto.trim() || form.categoria === "-1" || form.unidad === "-1") {
      toast.error("Completa producto, categoría y unidad.");
      return;
    }
    const cantidadNum = Number(form.cantidad);
    if (!Number.isFinite(cantidadNum) || cantidadNum < 1) {
      toast.error("Cantidad debe ser > 0");
      return;
    }

    try {
      const payload = {
        producto: form.producto.trim(),
        descripcion: form.descripcion?.trim() ?? "",
        cantidad: cantidadNum,
        idEstado: Number(form.idEstado),
        fechaVencimiento: form.fechaVencimiento || null,
        categoria: form.categoria,
        unidad: form.unidad
      };
      await agregar(payload);
      await onSuccess?.();
      toast.success("Item agregado");
      reset();
      const chk = document.getElementById(idModal);
      if (chk) chk.checked = false;
    } catch (err) {
      console.error(err);
      toast.error("No se pudo agregar");
    }
  };

  return (
    <div>
      <input type="checkbox" id={idModal} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="text-center mb-4">
            <h2 className="font-bold text-lg">Agregar Item al Inventario</h2>
          </div>

          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Producto</legend>
                <input className="input w-full" name="producto" value={form.producto} onChange={onChange} required />
                <span className="label">Requerido</span>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Descripción</legend>
                <input className="input w-full" name="descripcion" value={form.descripcion} onChange={onChange} />
                <span className="label">Opcional</span>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Categoría</legend>
                <select className="select w-full" name="categoria" value={form.categoria} onChange={onChange} required>
                  <option value="-1">Seleccionar</option>
                  {categorias.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <span className="label">Requerido</span>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Cantidad</legend>
                <input className="input w-full" type="number" min={1} name="cantidad" value={form.cantidad} onChange={onChange} required />
                <span className="label">Requerido</span>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Unidad</legend>
                <select className="select w-full" name="unidad" value={form.unidad} onChange={onChange} required>
                  <option value="-1">Seleccionar</option>
                  {unidades.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
                <span className="label">Requerido</span>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Fecha de Vencimiento</legend>
                <input className="input w-full" type="date" name="fechaVencimiento" value={form.fechaVencimiento} onChange={onChange} />
                <span className="label">Opcional</span>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Estado</legend>
                <select className="select w-full" name="idEstado" value={form.idEstado} onChange={onChange} required>
                  {EstadosInventario.estados.map((e) => (
                    <option key={e.id} value={e.id}>{e.nombre}</option>
                  ))}
                </select>
                <span className="label">Requerido</span>
              </fieldset>
            </div>

            <div className="text-center mt-6">
              <button type="submit" className="btn btn-primary btn-lg">Agregar Item</button>
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

export default ModalAgregar;
