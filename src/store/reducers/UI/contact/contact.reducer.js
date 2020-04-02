import { UPDATE_VISIBLE_CONTACT } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialState = {
  _id: true,
  cliente: true,
  proveedor: true,
  nombre: true,
  puesto: true,
  email: false,
  telefono: false,
  celular: false,
  f_nacimiento: false
};
export function contactState(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VISIBLE_CONTACT:
      return updateVisibleColumns(state, action.payload);
    default:
      return state;
  }
}
