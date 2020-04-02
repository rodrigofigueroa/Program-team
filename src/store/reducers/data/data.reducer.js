import { combineReducers } from "redux";
import { editarState } from "./btnActions/editar.reducer";
export const dataReducer = combineReducers({
  editar: editarState
});
