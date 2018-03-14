import { combineReducers } from 'redux';
import sheltersReducer from './sheltersReducer';
import userReducer from './userReducer'

export default combineReducers({
  shelters: sheltersReducer,
  user: userReducer,
});
