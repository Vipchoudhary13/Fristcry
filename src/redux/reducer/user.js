import {  SIGNUPSUCCESS, SIGNINFAILIURE, SIGNINSUCCESS, SIGNUPFAILIURE } from "../actionType";
const init_state = {
   auth: false,
   error: null
};
export const userReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case SIGNUPSUCCESS:
      return {
        ...state,
        auth: true,
        error: null

      };
      case SIGNINSUCCESS:
      return {
        ...state,
        auth: true,
        error: null

      };
      case SIGNUPFAILIURE:
      return {
        ...state,
        auth: false,
        error: payload

      };
      case SIGNINFAILIURE:
        return {
          ...state,
          auth: false,
          error: payload
  
        };
    

    default:
      return state;
  }
};