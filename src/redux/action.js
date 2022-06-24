import { getlocalStorage, setlocalStorage } from "../utils/localStorage";
import { FETCHDATA, FILTERDATA, FILTERPRICE,  SIGNUPSUCCESS, SIGNINFAILIURE, SIGNINSUCCESS, SIGNUPFAILIURE } from "./actionType";


export const FetchData = (data) => {
  return {
    type: FETCHDATA,
    payload: data
  };
};
export const FilterData = (data) => {
  return {
    type: FILTERDATA,
    payload: data
  };
};
export const FilterPrice = (data) => {
  return {
    type: FILTERPRICE,
    payload: data
  };
};

export const signupSuccess = () => {
  return {
    type: SIGNUPSUCCESS
  };
};

export const signinSuccess = () => {
  return {
    type: SIGNINSUCCESS
  };
};

export const signupFailiure = (data) => {
  return {
    type: SIGNUPFAILIURE,
    payload: data
  };
};
export const signinFailiure = (data) => {
  return {
    type: SIGNINFAILIURE,
    payload: data
  };
};


export const createAccount = (email, password) => dispatch => {
            if(!email.split("").includes(".")  ) dispatch(signupFailiure("enter valid email"));
            else if(password.length < 6 ) dispatch(signupFailiure("enter valid password"));
            else{
              const data = getlocalStorage("users");
              if(!!data){
                const user = data?.filter(user =>  user.email === email);

                if(user.length!==0) return dispatch(signupFailiure("user already exist"));
              }
              setlocalStorage("users", {
                email, password
              });
              dispatch(signupSuccess()) 
            }
            
}

 
export const login = (email, password) => dispatch => {
    const data = getlocalStorage("users");
    const user = data.filter(user =>  user.email === email);
    if(user.length===0) dispatch(signinFailiure("user not exist"));
    else if(user[0].password!==password) dispatch(signinFailiure("wrong password"));
    else {
      dispatch(signinSuccess()) 
    }   
}

export const logout = (email) =>  (dispatch)=>{
    const data = getlocalStorage("users");
    const user = data.filter(user => user.email === email);
    dispatch(signinFailiure())
}


export const getData = (page) => async (dispatch) => {
  await fetch(
    `https://firstcry-server-app.herokuapp.com/data?_page=${page}&_limit=9`
  )
    .then((data) => data.json())
    .then((res) => dispatch(FetchData(res)));
};
