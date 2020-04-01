import { UPDATE_VISIBLE_COLUMNS } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";
const initialTableState = {
  cliente: true,
  nombre_fis: true,
  calle: true,
  colonia: true,
  pobla: true,
  ciudad: true,
  estado: true,
  pais: true,
  telefono: true,
  dias: true,
  credito: true,
  desc1: true,
  rfc: true,
  clasificacion: true,
  contacto: true,
  cobrador: true,
  vend: true,
  precio: true,
  cp: true,
  diasrevision: true,
  observ: true,
  zona: true,
  correo: true,
  url: true,
  saldo: true,
  usuario: true,
  usuhora: true,
  usufecha: true,
  diascobro: true,
  bloqueado: true,
  web: true,
  emailcobranza: true,
  foto: true,
  puntos: true,
  recomendado: true,
  numerointerior: true,
  numeroexterior: true,
  uso: true,
  paiscomextrecep: true,
  municipiocomextrecep: true,
  localidadcomextrecep: true,
  estadocomextrecep: true,
  coloniacomextrecep: true,
  residenciafiscal: true,
  numregidtrib: true,
  complementoexterior: true
};

export const clientState = (state = initialTableState, action) => {
  switch (action.type) {
    case UPDATE_VISIBLE_COLUMNS:
      return updateVisibleColumns(state, action.payload);
    default:
      return state;
  }
};
