import { UPDATE_VISIBLE_COLUMNS } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialValuesProductos = {
    _id: true,
     clave: false,
     descripcion: false,
     usuario: false,
     usufecha: false,
     usuhora: false,
     articulo: false,
     cantidad: false,
     unidad: false,
     existencia: false,
     precio: false,
     imagen: false
}

export const ClavesState = (state = initialValuesProductos, action) => {
    switch (action.type) {
      case UPDATE_VISIBLE_COLUMNS:
        return updateVisibleColumns(state, action.payload);
      default:
        return state;
    }
  };