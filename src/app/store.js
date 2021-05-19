import { configureStore } from '@reduxjs/toolkit';
import linkReducer from '../features/navLink/navSlice'

export const store = configureStore({
    reducer: {
        link: linkReducer,
    },
});