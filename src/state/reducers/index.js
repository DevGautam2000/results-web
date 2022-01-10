import { combineReducers } from "redux";
import resultsReducer from "./resultsReducer";
import periodsReducer from "./periodsReducer";

export const reducers = combineReducers({
  collections: resultsReducer,
  periods: periodsReducer,
});
