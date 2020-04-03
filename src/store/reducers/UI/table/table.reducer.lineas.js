import { UPDATE_VISIBLE_LINEAS } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialValuesLineas = {
    _id: true,
     linea:true,
     descrip:true,
     usuario:true,
     usufecha:true,
     usuhora:true,
     numero:true,
}

export const LineasState = (state = initialValuesLineas, action) => {
    switch (action.type) {
      case UPDATE_VISIBLE_LINEAS:
        return updateVisibleColumns(state, action.payload);
      default:
        return state;
    }
  };