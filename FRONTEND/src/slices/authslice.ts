import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../features/interface/user';
import { setAuthToken } from '../lib/api';

const initialAuthState: IUser = {
    id: 0,
    username: "",
    password: "",
    fullname: "",
    picture: "",
    description: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (_, action) => {
            const payload = action.payload;
            setAuthToken(payload.token);
            localStorage.setItem("token", payload.token);

            const user: IUser = {
                id: payload.user.id,
                email: payload.user.email,
                username: payload.user.username,
                fullname: payload.user.fullname
            };
    
            return user;
        },

        AUTH_CHECK: (_, action) => {
            const payload = action.payload;

            const user: IUser = {
                id: payload.user.id,
                email: payload.user.email,
                username: payload.user.username,
                fullname: payload.user.fullname
            };

            return user

        },

        AUTH_ERROR: () => {
            localStorage.removeItem("token");
        },

        AUTH_LOGOUT: () => {
            localStorage.removeItem("token");
        }        
    }
})