// store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authenticationReducer from './authenticationSlice';
import { BaseSlice } from './BaseSlice';
import { ProductsSlice } from './ProductsSlice';

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    [BaseSlice.reducerPath]: BaseSlice.reducer,
    [ProductsSlice.reducerPath]: ProductsSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authentication'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BaseSlice.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export default store;

