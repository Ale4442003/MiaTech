import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
    name: 'todos',
    initialState:{
        todos: [], //non ho ancora todo
        loading: false, //non sta caricando niente
        error: null //non ho nessun erore
    },
    reducers: {
        //esempio action(state, action)
    }
})