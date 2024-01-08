import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true
}

//Creating state slices in redux toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment: (state) => {
            state.counter++;
            /**Using redux toolkit we can write the state changes like this which we should not write in redux coz it mutates the state
             * directly, but in redux toolkit there is package emer which works in the background and detects code like this and 
             * returns a new state object with the changes made in the state and in which the changes are not made. So, we can change 
             * the state like this using redux toolkit.
             */
        },
        increase: (state, action) => {
            state.counter += action.payload;
        },
        decrement: (state) => {
            state.counter--;
        },
        toggleCounter: (state) => {
            state.showCounter = !state.showCounter;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;