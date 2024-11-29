import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { rentalOffice, add } from './state/rental-office-toolkit';
import { shopCart } from './state/shop-cart';

const middlewar = store => next => action => {
    if (action.type === 'BUY') {
        console.log('Dispatching:', action);
        console.log('Current state:', store.getState())
        store.getState().shopCart.forEach((product) => {
            store.dispatch(add(product.name))
        })
    }

    let result = next(action);
    return result;
};

const reducers = combineReducers({
    rentalOffice,
    shopCart
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(middlewar)
});

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

