import { UPDATE_VISIBLECLAVES } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialValuesClaves = {
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

export const ClavesState = (state = initialValuesClaves, action) => {
    switch (action.type) {
      case UPDATE_VISIBLECLAVES:
        return updateVisibleColumns(state, action.payload);
      default:
        return state;
    }
  };