
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/User";
import { setAuthToken } from "../../lib/api";

const initialAuthstate: IUser = {
    id: 0,
    fullname: "",
    username: "",
    email: "",
    picture: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthstate,
  reducers: {

    AUTH_LOGIN: (_, action) => {  
      const payload = action.payload
      localStorage.setItem("token",payload.token)
      setAuthToken(localStorage.token);
      const user:IUser = {
        id:payload.user.id,
        fullname:payload.user.fullname,
        username:payload.user.username,
        email:payload.user.email, 
        picture:payload.user.picture
      }
      return user 
    },
    AUTH_CHECK: (_, action)=>{
      const payload = action.payload
      // localStorage.setItem("token",payload.token)

      const user:IUser = {
        id:payload.id,
        fullname:payload.fullname,
        username:payload.username,
        email:payload.email,
        picture:payload.picture
      }
      return user 
      
    },
    AUTH_ERROR: (_)=>{
      localStorage.removeItem("token")
      return initialAuthstate
    },
    AUTH_LOGOUT: (_)=>{
    localStorage.removeItem("token")
    return initialAuthstate
    
      
    },
    AUTH_USERS: (state,action)=>{
      return {
        ...state,
        userProfile: action.payload,
   
      };
    },
  },
});

