import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "../cart/cartSlice";

const initialState = {
    cartSlice,
    creditCard: {},
    deliveryAddress:'',

}

const checkoutSlice =  createSlice({
    name: 'checkout',
    initialState
})

export default checkoutSlice.reducer

