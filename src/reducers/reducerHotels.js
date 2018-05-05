import { FETCH_HOTELS, FILTER_PRICE_RANGE, FILTER_STARS_RANGE } from '../actions';
import _ from 'lodash';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOTELS:
      const hotels = payload.data.data;
      if (payload.status === 200) {
        const minPrice = _.orderBy(hotels, ['price'], ['asc'])[0].price;
        const maxPrice = _.orderBy(hotels, ['price'], ['desc'])[0].price;
        return { ...state, minPrice, maxPrice, hotels, hotelsNoFilter: hotels };
      }
      return {
        ...state,
        hotels,
      };
    case FILTER_PRICE_RANGE:
      const minMax = payload;
      const hotelsFiltered = state.hotelsNoFilter.filter(
        hotel => hotel.price >= minMax[0] && hotel.price <= minMax[1],
      );
      // console.log('opa', state.hotelsNoFilter, hotelsFiltered, minMax);
      return {
        ...state,
        hotels: hotelsFiltered,
        minFilter: minMax[0],
        maxFilter: minMax[1],
      };
    case FILTER_STARS_RANGE:
      const stars = payload;
      const hotelsFilteredStars = state.hotelsNoFilter.filter(
        hotel => hotel.price >= minMax[0] && hotel.price <= minMax[1],
      );
      // console.log('opa', state.hotelsNoFilter, hotelsFiltered, minMax);
      return {
        ...state,
        hotels: hotelsFilteredStars,
        stars,
      };
    default:
      return state;
  }
};
