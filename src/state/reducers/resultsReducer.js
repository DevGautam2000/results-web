import { actions } from "../actions/keys";

export default function reducer(
  state = { collection: {}, lateCollection: {} },
  action
) {
  switch (action.type) {
    case actions.GET_DATA:
      return { ...state, collection: action.payload };
    case actions.GET_LATE_DATA:
      return { ...state, lateCollection: action.payload };
    default:
      return state;
  }
}
