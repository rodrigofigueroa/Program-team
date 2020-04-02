import { UPDATE_VISIBLE_COLUMNS } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialValuesProductos = {
    _id: true,
     linea:true,
     descrip:true,
     usuario:true,
     usufecha:true,
     usuhora:true,
     numero:true,
}

export const LineasState = (state = initialValuesProductos, action) => {
    switch (action.type) {
      case UPDATE_VISIBLE_COLUMNS:
        return updateVisibleColumns(state, action.payload);
      default:
        return state;
    }
  };