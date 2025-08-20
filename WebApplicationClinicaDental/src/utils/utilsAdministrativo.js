import { Users, UserCog, UserSearch, UserX } from 'lucide-react';

export const DataCardAdministrativo = ({
  totalAdministrativos = 0,
  totalAdministadores = 0,
  totalRecepcionistas = 0,
  administrativosInactivos = 0,
}) => [
  {
    nombre: 'Administrativos',
    icon: Users,
    valor: totalAdministrativos.toString(),
    color: '#8B5CF6',
  },
  {
    nombre: 'Administradores',
    icon: UserCog,
    valor: totalAdministadores.toString(),
    color: '#2fa8f0',
  },
  {
    nombre: 'Recepcionistas',
    icon: UserSearch,
    valor: totalRecepcionistas.toString(),
    color: '#3adc33',
  },
  {
    nombre: 'Administrativos Inactivos',
    icon: UserX,
    valor: administrativosInactivos.toString(),
    color: '#f00808',
  },
];
