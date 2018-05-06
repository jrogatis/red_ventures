import {
  FETCH_HOTELS,
  FILTER_PRICE_RANGE,
  FILTER_STARS_RANGE_ADD,
  FILTER_STARS_RANGE_REMOVE,
} from '../actions';
import _ from 'lodash';

const filterMinMax = (minMax, hotel) => hotel.price >= minMax[0] && hotel.price <= minMax[1];

const filterStars = (stars, hotel) => stars.includes(hotel.rate);

const filteredHotels = (minMax, stars, hotels) =>
  hotels.filter(
    hotel =>
      filterMinMax(minMax, hotel) ? (stars.length ? filterStars(stars, hotel) : true) : false,
  );

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HOTELS:
      const hotels = payload.data.data;
      if (payload.status === 200) {
        const minPrice = _.orderBy(hotels, ['price'], ['asc'])[0].price;
        const maxPrice = _.orderBy(hotels, ['price'], ['desc'])[0].price;
        return {
          ...state,
          minPrice,
          maxPrice,
          hotels,
          hotelsNoFilter: hotels,
          stars: [],
          minFilter: minPrice,
          maxFilter: maxPrice,
        };
      }
      return {
        ...state,
        hotels,
      };
    case FILTER_PRICE_RANGE:
      const minMax = payload;
      const hotelsFiltered = filteredHotels(minMax, state.stars, state.hotelsNoFilter);
      return {
        ...state,
        hotels: hotelsFiltered,
        minFilter: minMax[0],
        maxFilter: minMax[1],
      };
    case FILTER_STARS_RANGE_ADD:
      const star = payload;
      const nStars = [...state.stars, star];
      const minMaxStarsAdd = [state.minFilter, state.maxFilter];
      const hotelsFilteredStars = filteredHotels(minMaxStarsAdd, nStars, state.hotelsNoFilter);
      return {
        ...state,
        hotels: hotelsFilteredStars,
        stars: nStars,
      };
    case FILTER_STARS_RANGE_REMOVE:
      const starRemove = payload;
      const nStarsRemoved = state.stars.filter(star => star !== starRemove);
      const minMaxStarsRemove = [state.minFilter, state.maxFilter];
      const hotelsFilteredStarsRemoved = filteredHotels(
        minMaxStarsRemove,
        nStarsRemoved,
        state.hotelsNoFilter,
      );
      return {
        ...state,
        hotels: hotelsFilteredStarsRemoved,
        stars: nStarsRemoved,
      };
    default:
      return state;
  }
};
