import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice';

const Store = configureStore({
    reducer: {
        authentication: authenticationReducer
    }
})

export default Store; 