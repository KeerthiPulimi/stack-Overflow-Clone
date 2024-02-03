import {combineReducers} from "redux";
import authReducer from './auth';
import currentUserReducer from './currentUsers';
import questionsReducer from "./questions";
import usersReducer from "./users";



export default combineReducers({
  authReducer, currentUserReducer,questionsReducer,
  usersReducer,
})