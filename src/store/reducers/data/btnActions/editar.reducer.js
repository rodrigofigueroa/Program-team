import { EDIT } from "../../../actions/actions.vars";
import { editarAction } from "../../../actions/editar.action";

const initialState = {
  edit: {}
};

export function editState(state = initialState, action) {
  switch (action.type) {
    case EDIT:
      return editarAction(state, action.payload);
    default:
      return state;
  }
}
