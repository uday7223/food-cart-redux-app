import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {foodReducer, searchReducer} from '../features/food/foodSlice';
import cartReducer from '../features/cart/cartSlice';
// import searchReducer from '../features/food/foodSlice';



// const store = configureStore({
//     reducer: {
//         food: foodReducer, // Food slice
//         cart: cartReducer, // Cart slice
//         search: searchReducer,

//     },
// });

const rootReducer = combineReducers({
    food: foodReducer,
    cart: cartReducer,
    search: searchReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });


export default store;
