import { TOGGLE_MODAL } from "../../../actions/actions.vars";
import { toggleModal } from "../../../actions/modal.actions";
const initialState = {
  open: false,
  id: ""
};
export function modalState(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return toggleModal(state, action.payload);
    default:
      return state;
  }
}
