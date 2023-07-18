import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    amount:0,


}

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
})

export default watchListSlice.reducer