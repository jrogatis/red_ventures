import { FETCH_HOTELS } from '../actions';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOTELS:
      return { ...state, hotels: payload.data.data };
    default:
      return state;
  }
};
