import { updateVisibleColumns } from "../../../actions/table.action";
import { UPDATE_VISIBLE_COLUMNS } from "../../../actions/actions.vars";

const initialTableState = {
  _id: true,
  cliente: true,
  nombre_fis: true,
  calle: true,
  colonia: true,
  pobla: false,
  ciudad: false,
  estado: false,
  pais: false,
  telefono: false,
  dias: false,
  credito: false,
  desc1: false,
  rfc: false,
  clasificacion: false,
  contacto: false,
  cobrador: false,
  vend: false,
  precio: false,
  cp: false,
  diasrevision: false,
  observ: false,
  zona: false,
  correo: false,
  url: false,
  saldo: false,
  usuario: false,
  usuhora: false,
  usufecha: false,
  diascobro: false,
  bloqueado: false,
  web: false,
  emailcobranza: false,
  foto: false,
  puntos: false,
  recomendado: false,
  numerointerior: false,
  numeroexterior: false,
  uso: false,
  paiscomextrecep: false,
  municipiocomextrecep: false,
  localidadcomextrecep: false,
  estadocomextrecep: false,
  coloniacomextrecep: false,
  residenciafiscal: false,
  numregidtrib: false,
  complementoexterior: false,
  actions: true
};

export const clientState = (state = initialTableState, action) => {
  switch (action.type) {
    case UPDATE_VISIBLE_COLUMNS:
      return updateVisibleColumns(state, action.payload);
    default:
      return state;
  }
};
