import { UPDATE_VISIBLEMARCAS } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialValuesMarcas = {
    _id: true,
     marca: true,
     descrip: true,
     usuario: true,
     usufecha: true,
     usuhora: true,
     numero: true
  
}

export const MarcasState = (state = initialValuesMarcas, action) => {
    switch (action.type) {
      case UPDATE_VISIBLEMARCAS:
        return updateVisibleColumns(state, action.payload);
      default:
        return state;
    }
  };