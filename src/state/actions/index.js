import { actions } from "./keys";

const getCollection = (collection) => {
  return (disatch) => {
    disatch({
      type: actions.GET_DATA,
      payload: collection,
    });
  };
};
const getLateCollection = (lateCollection) => {
  return (disatch) => {
    disatch({
      type: actions.GET_LATE_DATA,
      payload: lateCollection,
    });
  };
};
const setPeriod = (period) => {
  return (disatch) => {
    disatch({
      type: actions.GET_PERIOD,
      payload: period,
    });
  };
};
const setLatePeriod = (lateperiod) => {
  return (disatch) => {
    disatch({
      type: actions.GET_LATE_PERIOD,
      payload: lateperiod,
    });
  };
};

export const actionsCreators = {
  getCollection,
  getLateCollection,
  setPeriod,
  setLatePeriod,
};
