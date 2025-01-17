import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../features/food/foodSlice';
import cartReducer from '../features/cart/cartSlice';



const store = configureStore({
    reducer: {
        food: foodReducer, // Food slice
        cart: cartReducer, // Cart slice
    },
});

export default store;
