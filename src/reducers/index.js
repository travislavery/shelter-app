import { combineReducers } from 'redux';
import sheltersReducer from './sheltersReducer';

export default combineReducers({
  shelters: sheltersReducer,
});
