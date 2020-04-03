import { UPDATE_VISIBLE_FABRICANTES } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialValuesFabricantes = {
    _id: true,
     fabricante: true,
     nombre: true,
     usuario: true,
     usuhora: true,
     usufecha : true
}

export const FabricantesState = (state = initialValuesFabricantes, action) => {
    switch (action.type) {
      case UPDATE_VISIBLE_FABRICANTES:
        return updateVisibleColumns(state, action.payload);
      default:
        return state;
    }
  };