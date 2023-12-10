import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        Form1data: [],
        Alldata: [],
    },
    reducers: {
        setData: (state, action) => {
            state.Form1data.push(action.payload);
        },
        setData2: (state, action) => {
            state.Alldata = [...state.Form1data, action.payload];
        },
    },
});

export const { setData, setData2 } = dataSlice.actions;
export default dataSlice.reducer;


export const fetchProducts = () => async (dispatch) => {
        const res = await axios.get('https://dummyjson.com/products');
        const data = res.data;
        dispatch(setData(data));
};
