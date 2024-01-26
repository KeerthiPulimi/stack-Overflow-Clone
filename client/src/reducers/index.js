import {combineReducers} from "redux";
import authReducer from './auth';
import currentUserReducer from './currentUsers'


export default combineReducers({
  authReducer, currentUserReducer 
})