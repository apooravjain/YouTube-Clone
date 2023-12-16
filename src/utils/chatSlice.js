import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers:{
        addMessage : (state, action) => {
            state.messages.push(action.payload);
        },
    },
});

export const {messages} = chatSlice.actions;

export default chatSlice.reducer;