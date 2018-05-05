import { FETCH_HOTELS } from '../actions';
import _ from 'lodash';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOTELS:
      const hotels = payload.data.data;
      if (payload.status === 200) {
        const minPrice = _.orderBy(hotels, ['price'], ['asc'])[0].price;
        const maxPrice = _.orderBy(hotels, ['price'], ['desc'])[0].price;
        return { ...state, minPrice, maxPrice, hotels };
      }
      return {
        ...state,
        hotels,
        // minPrice: hotels.length ? hotelsPriceOrder[0] : 0,
        // maxPrice: hotels.length ? hotelsPriceOrder[hotelsPriceOrder.length - 1] : 0,
      };
    default:
      return state;
  }
};
