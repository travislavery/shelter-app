import { combineReducers } from 'redux';
import sheltersReducer from './sheltersReducer';
import userReducer from './userReducer'
import itemsReducer from './itemsReducer'
import errorsReducer from './errorsReducer'
import itemGroupsReducer.js from './itemGroupsReducer.js'

export default combineReducers({
  shelters: sheltersReducer,
  user: userReducer,
  items: itemsReducer,
  errors: errorsReducer,
  item_groups: itemGroupsReducer,
});
