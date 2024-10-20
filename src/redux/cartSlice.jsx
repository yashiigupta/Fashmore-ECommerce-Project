import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const id = uuidv4();
            const newItem = { ...action.payload, id };
            console.log(newItem);
            state.push(newItem);    
        },        
        deleteFromCart(state, action) {
            // Filter out the item to be deleted by id
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
