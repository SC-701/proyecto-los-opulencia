//! Constants for Pie Chart Data
export const orderStatusData = ({citasPendientes = 0, citasCompletadas = 0, citasCanceladas= 0}) => [
  { name: "Pendientes", value: citasPendientes },
  { name: "Completas", value: citasCompletadas },
  { name: "Canceladas", value: citasCanceladas },
];

export const COLORS = ["#FED766", "#4ECDC4", "#FF6B6B"];

export const orderInventario = [
  { name: "Disponible", value: 2 },
  { name: "Por vencer", value: 1 },
  { name: "Agotado", value: 1 },
  { name: "Vencido", value: 1 },
];

export const COLORSInventario = ["#fef9c3", "#bbf7d0", "#c7d2fe", "#fca5a5"];


export const orderFacturas = ({FacturasPagadas = 0, FacturasPorPagar = 0}) => [
  { name: "Pagadas", value: FacturasPagadas },
  { name: "Por Pagar", value:   FacturasPorPagar },
];

export const COLORSFacturas = ["#5804ff", "#ffe104", "#d107a3"];

export const orderAdministrativos = ({
  totalAdministadores = 0,
  totalRecepcionistas = 0,
  administrativosInactivos = 0,
}) => [
  { name: "Administrados",  value: totalAdministadores },
  { name: "Recepcionistas", value: totalRecepcionistas },
  { name: "Inactivos",      value: administrativosInactivos },
];

export const COLORSAdministradores = ["#2fa8f0", "#3adc33", "#f00808"];