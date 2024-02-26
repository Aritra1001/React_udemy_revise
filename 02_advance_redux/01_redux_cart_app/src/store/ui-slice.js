import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: false,
        notification:  null
    },
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})
// In the reducer change the state into an object which consists of status, titlke and message

export const uiActions = uiSlice.actions;

export default uiSlice;