import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setData, setStatus } = dataSlice.actions;
export default dataSlice.reducer;

export const fetchProducts = () => async (dispatch) => {
        const res = await axios.get('https://dummyjson.com/products');
        const data = res.data;
        dispatch(setData(data));
};
