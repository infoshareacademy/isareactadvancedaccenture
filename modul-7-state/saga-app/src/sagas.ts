import { call, put, takeEvery, all, select, take } from 'redux-saga/effects';
import { add } from './state/rental-office-toolkit';
import { createClearCartAction } from './state/shop-cart';

function* addToRentalOffice() {
    const shopCart = yield select((state) => state.shopCart)
    yield all(shopCart.map(p => {
        return put(add(p.name))
    }));
    yield put(createClearCartAction())
}

function* watchBuyAction() {
    yield takeEvery('BUY', addToRentalOffice);
}

export default function* rootSaga() {
    yield all([watchBuyAction()])
}