import { UPDATE_VISIBLE_CLASIFICATION } from "../../../actions/actions.vars";
import { updateVisibleColumns } from "../../../actions/table.action";
export function clasificationState(state, action) {
  switch (action.type) {
    case UPDATE_VISIBLE_CLASIFICATION:
      return updateVisibleColumns(state, action.payload);
    default:
      return state;
  }
}
