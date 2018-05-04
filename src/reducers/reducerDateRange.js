import { FETCH_DATE_RANGE } from '../actions';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATE_RANGE:
      return { ...state, dateRange: { from: payload.from, to: payload.to } };
    default:
      return state;
  }
};
