import { IFormDiscuss } from "../features/interface/user";
import { createSlice } from "@reduxjs/toolkit";

const initialThreadState: IFormDiscuss[] = [];

export const DiscussSlice = createSlice({
    name: "thread",
    initialState: initialThreadState,
    reducers: {
        GET_THREADS: (_, action) => {
            return action.payload;
        },
    //  SET_THREAD_LIKE: (_, action => {        
    //     action: {payload: {id: number; isliked: boolean}}
    //  ) => {
    //     const {id, isliked} = action.payload
    //     state.thread = state.thread.map((thread) =>)
    //  }
    //  }
    }
});