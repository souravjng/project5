import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './DataSlice';


const store = configureStore({
    reducer: {
        data: DataReducer,
    },
});

export default store;

