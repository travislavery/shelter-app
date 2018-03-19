import { combineReducers } from 'redux';
import sheltersReducer from './sheltersReducer';
import userReducer from './userReducer'
import itemsReducer from './itemsReducer'
import errorsReducer from './errorsReducer'

export default combineReducers({
  shelters: sheltersReducer,
  user: userReducer,
  items: itemsReducer,
  errors: errorsReducer,
});
