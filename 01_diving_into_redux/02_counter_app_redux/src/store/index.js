import redux from 'redux';
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter_slice';
import authReducer from './auth_slice';


// const counterReducer = (initialState, action) => {
//     if (action.type === 'increment') {
//         // initialState.counter++;   Never mutate the existing state like this. We should always return a new state object
//         //  with the changes required.
//         return {
//             counter: initialState.counter + 1,
//             showCounter: initialState.showCounter
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: initialState.counter - 1,
//             showCounter: initalState.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: initalState.counter + action.amount,
//             showCounter: initalState.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: initialState.counter,
//             showCounter: !initialState.showCounter,
//         }
//     }
//     return initalState;
// }



// const counterStore = createStore(counterReducer);

const counterStore = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export default counterStore;