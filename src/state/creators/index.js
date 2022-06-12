import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../actions";

export const useActionCreators = () =>
  bindActionCreators(actionsCreators, useDispatch());
