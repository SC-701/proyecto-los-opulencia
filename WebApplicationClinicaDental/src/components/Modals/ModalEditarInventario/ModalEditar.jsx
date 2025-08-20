import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useInventarioEditar } from "../../../hooks/UseInventario.js";
import { EstadosInventario } from "../../../assets/constants/Estados.jsx";

const ModalEditarInventario = ({ idModal, Item, onSuccess }) => {
  const { editar } = useInventarioEditar();

  const baseCategorias = ["Protección","Medicamentos","Higiene","Consumo","Instrumental","Insumos","Equipos","Sueros","Curación","Otros"];
  const baseUnidades   = ["unidades","pares","ampollas","rollos","bolsas","cajas","botellas","tubos","jeringas","agujas","frascos"];

  const ensureOption = (arr, value) => {
    if (value == null || value === "") return arr;
    const v = String(value);
    return arr.some(x => x.toLowerCase() === v.toLowerCase()) ? arr : [...arr, v];
  };

  const [categoriasOpts, setCategoriasOpts] = useState(baseCategorias);
  const [unidadesOpts, setUnidadesOpts]     = useState(baseUnidades);

  const [form, setForm] = useState({
    producto: "",
    descripcion: "",
    categoria: "-1",
    cantidad: "",
    unidad: "-1",
    fechaVencimiento: "",
    idEstado: String(EstadosInventario.conversionEstado("Disponible")),
  });

  useEffect(() => {
    if (!Item) return;

    const rawEstado =
      Item.idEstado ?? Item.estadoId ?? Item.estado ?? Item.Estado ?? null;
    const idEstadoStr =
      typeof rawEstado === "number"
        ? String(rawEstado)
        : String(EstadosInventario.conversionEstado(rawEstado ?? "Disponible"));

    const currentCategoria = Item.categoria ?? Item.Categoria ?? "-1";
    const currentUnidad    = Item.unidad ?? Item.Unidad ?? "-1";

    setCategoriasOpts(prev => ensureOption(prev.length ? prev : baseCategorias, currentCategoria));
    setUnidadesOpts(prev   => ensureOption(prev.length   ? prev : baseUnidades,   currentUnidad));

    setForm({
      producto: Item.producto ?? Item.insumo ?? "",
      descripcion: Item.descripcion ?? "",
      categoria: currentCategoria,
      cantidad: Item.cantidad ?? Item.Cantidad ?? "",
      unidad: currentUnidad,
      fechaVencimiento: Item.fechaVencimiento
        ? new Date(Item.fechaVencimiento).toISOString().split("T")[0]
        : (Item.vencimiento ?? ""),
      idEstado: idEstadoStr,
    });
  }, [Item]);

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.producto.trim() || form.categoria === "-1" || form.unidad === "-1") {
      toast.error("Completa producto, categoría y unidad.");
      return;
    }

    const cantidadNum = Number(form.cantidad);
    if (!Number.isFinite(cantidadNum) || cantidadNum < 0) {
      toast.error("Cantidad debe ser >= 0");
      return;
    }

    // ✅ calcular sin mutar el state y con ID correcto (11 = Agotado)
    const idEstadoFinal = (cantidadNum === 0) ? 11 : Number(form.idEstado);

    const idSeguro =
      Item?.id ??
      Item?.idInventario ??
      Item?.inventarioId ??
      Item?.Id ??
      Item?.IdInventario;

    if (!idSeguro) {
      toast.error("No se encontró el ID del item.");
      return;
    }

    try {
      const payload = {
        producto: form.producto.trim(),
        descripcion: form.descripcion?.trim() ?? "",
        cantidad: cantidadNum,
        idEstado: idEstadoFinal, 
        fechaVencimiento: form.fechaVencimiento ? String(form.fechaVencimiento) : null,
        categoria: form.categoria,
        unidad: form.unidad,
      };

      await editar(payload, idSeguro);
      await onSuccess?.();
      toast.success("Item editado");

      const chk = document.getElementById(idModal);
      if (chk) chk.checked = false;
    } catch (err) {
      console.error(err);
      toast.error("No se pudo editar");
    }
  };

  return (
    <div>
      <input type="checkbox" id={idModal} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="text-center mb-4">
            <h2 className="font-bold text-lg">Editar Item de Inventario</h2>
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
                  {categoriasOpts.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <span className="label">Requerido</span>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Cantidad</legend>
                <input className="input w-full" type="number" min={0} name="cantidad" value={form.cantidad} onChange={onChange} required />
                <span className="label">Requerido</span>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Unidad</legend>
                <select className="select w-full" name="unidad" value={form.unidad} onChange={onChange} required>
                  <option value="-1">Seleccionar</option>
                  {unidadesOpts.map((u) => (
                    <option key={u} value={u}>{u}</option>
                  ))}
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
              <button type="submit" className="btn btn-primary btn-lg">Editar Item</button>
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

export default ModalEditarInventario;
