import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './DataSlice';


const store = configureStore({
    reducer: {
        Data: DataReducer,
    },
});

export default store;
