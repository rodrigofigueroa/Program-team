import { updateVisibleColumns } from "../../../actions/table.action";
import { UPDATE_VISIBLE_PROVIDERS } from "../../../actions/actions.vars";

const initialTableState = {
  _id: true,
  proveedor: true,
  nombre: true,
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
  contacto: false,
  alta: false,
  rfc: false,
  tipo: false,
  cp: false,
  diasrevicion: false,
  obser: false,
  zona: false,
  url: false,
  mail: false,
  saldo: false,
  usuario: false,
  usuHora: false,
  usuFech: false,
};

export const providersState = (state = initialTableState, action) => {
  switch (action.type) {
    case UPDATE_VISIBLE_PROVIDERS:
      return updateVisibleColumns(state, action.payload);
    default:
      return state;
  }
};
