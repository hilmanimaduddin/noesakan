import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../slices/authslice';
import {DiscussSlice} from '../slices/formdiscuss'



export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } =
authSlice.actions;
export const { GET_THREADS } =DiscussSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = DiscussSlice.reducer;

const rootReducer = combineReducers({
    auth: authReducer,
    thread: threadReducer,
});

export default rootReducer;