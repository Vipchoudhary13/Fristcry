import { combineReducers } from "redux";
import { dataReducer } from "./data";
import {userReducer} from "./user"

export const rootReducer = combineReducers({
  dataState: dataReducer,
  userState: userReducer
});
