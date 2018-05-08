import axios from 'axios';

const ROOT_URL = 'https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/hotels';

export const FETCH_HOTELS = 'FETCH_HOTELS';
export const FETCH_DATE_RANGE = 'FETCH_DATE_RANGE';
export const FILTER_PRICE_RANGE = 'FILTER_PRICE_RANGE';
export const FILTER_STARS_RANGE_ADD = 'FILTER_STARS_RANGE_ADD';
export const FILTER_STARS_RANGE_REMOVE = 'FILTER_STARS_RANGE_REMOVE';

export const fetchHotels = async (stars = '1,2,3,4,5', minPrice = '0', maxPrice = '1000') => {
  const request = await axios.get(
    `${ROOT_URL}/?stars=${stars}&minPrice${minPrice}&maxPrice${maxPrice}`,
  );
  return { type: FETCH_HOTELS, payload: request };
};

export const fetchDateRange = payload => {
  return { type: FETCH_DATE_RANGE, payload };
};

export const filterPriceRange = payload => {
  return { type: FILTER_PRICE_RANGE, payload };
};
export const filterStarsRangeAdd = payload => {
  return { type: FILTER_STARS_RANGE_ADD, payload };
};

export const filterStarsRangeRemove = payload => {
  return { type: FILTER_STARS_RANGE_REMOVE, payload };
};
