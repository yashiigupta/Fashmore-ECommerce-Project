import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemWithId = {
                ...action.payload,
                id: uuidv4()
            };
            state.push(itemWithId);
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
