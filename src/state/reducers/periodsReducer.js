import { actions } from "../actions/keys";

export default function reducer(
  state = { period: "", lateperiod: "" },
  action
) {
  switch (action.type) {
    case actions.GET_PERIOD:
      return { ...state, period: action.payload };
    case actions.GET_LATE_PERIOD:
      return { ...state, lateperiod: action.payload };
    default:
      return state;
  }
}
