import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import { rentalOffice } from './state/rental-office-toolkit';
import { shopCart } from './state/shop-cart';
import { burgers } from './state/burgers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    rentalOffice,
    shopCart,
    burgers
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

