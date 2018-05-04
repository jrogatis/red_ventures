import { FETCH_DATE_RANGE } from '../actions';

export default (state = [], action) => {
  const {
    type,
    payload: { from, to },
  } = action;
  switch (type) {
    case FETCH_DATE_RANGE:
      return { ...state, dateRange: { from, to } };
    default:
      return state;
  }
};
