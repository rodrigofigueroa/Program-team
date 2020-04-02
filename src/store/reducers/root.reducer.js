import { combineReducers } from "redux";
import { uiReducer } from "./UI/ui.reducer";
import { dataReducer } from "./data/data.reducer";

export const root = combineReducers({
  ui: uiReducer,
  data: dataReducer
});
