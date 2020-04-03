import { updateVisibleColumns } from "../../../actions/table.action";
import { UPDATE_VISIBLE_PROVIDERS } from "../../../actions/actions.vars";

const initialTableState = {
    _id: true,
    uid: true,
    cliente: true,
    proveedor: true,
    nombre: true,
    puesto: false,
    email: false,
    telefono: false,
    celular: false,
    f_nacimiento: false,
    actions: true
};

export const providersState = (state = initialTableState, action) => {
  switch (action.type) {
    case UPDATE_VISIBLE_PROVIDERS:
      return updateVisibleColumns(state, action.payload);
    default:
      return state;
  }
};