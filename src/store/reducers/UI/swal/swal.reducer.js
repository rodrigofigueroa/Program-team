import { OPEN_SWAL, CLOSE_SWAL } from "../../../actions/actions.vars";
import { openSwal, closeSwal } from "../../../actions/swal.actions";

const initialState = {
  open: false,
  title: "title",
  bodyText: "body",
  callback: () => null,
};
export function swalState(state = initialState, action) {
  switch (action.type) {
    case OPEN_SWAL:
      return openSwal(state, action.payload);
    case CLOSE_SWAL:
      return closeSwal(state);
    default:
      return state;
  }
}
