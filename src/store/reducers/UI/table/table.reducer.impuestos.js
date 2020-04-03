import { UPDATE_VISIBLE_COLUMNS } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";

const initialValuesImpuestos = {
    _id: true,
     impuesto:true,
     descrip:true,
     valor:true,
     usuario:true,
     usufecha:true,
     usuhora:true
}

export const ImpuestosState = (state = initialValuesImpuestos, action) => {
    switch (action.type) {
      case UPDATE_VISIBLE_COLUMNS:
        return updateVisibleColumns(state, action.payload);
      default:
        return state;
    }
  };