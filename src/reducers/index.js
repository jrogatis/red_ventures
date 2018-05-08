import { combineReducers } from 'redux';
import FetchHotels from './reducerHotels';
import FetchDateRanges from './reducerDateRange';

const rootReducer = combineReducers({
  hotels: FetchHotels,
  dateRanges: FetchDateRanges,
});

export default rootReducer;
