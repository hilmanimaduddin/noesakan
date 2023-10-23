import { createSlice } from "@reduxjs/toolkit";
import { IUserLoginOn } from "../../../interfaces/User";


const initialUserDetailsState :IUserLoginOn = {
  id: 0,
  fullname: "",
  username: "",
  picture: "",
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: initialUserDetailsState,
  reducers: {
    setDetails: (_, action) => {
      const payload = action.payload
      const user:IUserLoginOn = {
        id:payload.id,
        fullname:payload.fullname,
        username:payload.username,
        picture:payload.picture
      }
      console.log("DATA USER NIHH BOSSSSSSSSSSSSS",payload)
      return user
    },
    clearDetails: (_) => {
      return initialUserDetailsState;
    },
  },
});

export const { setDetails, clearDetails } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
