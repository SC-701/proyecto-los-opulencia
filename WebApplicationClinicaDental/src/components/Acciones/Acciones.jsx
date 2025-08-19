import React from "react";
import { CreditCard, SquarePen, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const Acciones = ({
  manager,
  estado,
  onToggleEstado,
  onEditar,
  onEditarPagarFactura,
  onEliminar,
  modalNameEditar,
  modalNameEditarPago,
}) => {
  const iconoEstado = manager?.obtenerIcono?.(estado);

  const handleEditarClick = () => {
    onEditar?.();
    if (modalNameEditar) {
      setTimeout(() => {
        const chk = document.getElementById(modalNameEditar);
        if (chk) chk.checked = true;
      }, 50);
    }
  };


  
  const handleEditarPagoClick = () => {
    onEditarPagarFactura?.();
    if (modalNameEditarPago) {
      setTimeout(() => {
        const chk = document.getElementById(modalNameEditarPago);
        if (chk) chk.checked = true;
      }, 50);
    }
  };

  const handleEliminarClick = () => {
    if (!onEliminar) return;

    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        onEliminar();
        Swal.fire(
          "Eliminado",
          "El registro fue eliminado con éxito",
          "success"
        );
      }
    });
  };

  return (
    <div className="flex items-center gap-2">
      {onToggleEstado && (
        <button
          type="button"
          className="px-2 py-1 hover:scale-110 transition-transform"
          onClick={onToggleEstado}
          title="Cambiar estado"
        >
          {iconoEstado}
        </button>
      )}

      {onEditar && (
        <label
          htmlFor={modalNameEditar ?? ""}
          onClick={handleEditarClick}
          className="px-2 py-1 hover:scale-110 transition-transform cursor-pointer"
          title="Editar"
        >
          <SquarePen size={20} className="text-blue-500" />
        </label>
      )}


      
    {onEditarPagarFactura && (
        <label
             htmlFor={modalNameEditarPago ?? ""}
          onClick={handleEditarPagoClick}
           className="px-2 py-1 hover:scale-110 transition-transform cursor-pointer"
            title="Pagar"
        >
          <CreditCard size={20} className="text-green-500" />
          </label>
      )}

      {onEliminar && (
        <button
          type="button"
          className="px-2 py-1 hover:scale-110 transition-transform"
          onClick={handleEliminarClick}
          title="Eliminar"
        >
          <Trash2 size={20} className="text-red-500" />
        </button>
      )}
    </div>
  );
};

export default Acciones;
