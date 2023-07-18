import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/modal/modalSlice'
// import watchListReducer from "./features/watchList/watchListSlice";
// import checkoutReducer from "./features/checkout/checkoutSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        modal: modalReducer,
        // watchList: watchListReducer,
        // checkout: checkoutReducer
    }
})