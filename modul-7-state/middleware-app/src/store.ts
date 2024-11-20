import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { rentalOffice } from './state/rental-office-toolkit';
import { shopCart } from './state/shop-cart';


const reducers = combineReducers({
    rentalOffice,
    shopCart
});

export const store = configureStore({
    reducer: reducers
});

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

