import { combineReducers } from 'redux';
import FetchHotels from './reducerHotels';

const rootReducer = combineReducers({
  hotels: FetchHotels,
});

export default rootReducer;
