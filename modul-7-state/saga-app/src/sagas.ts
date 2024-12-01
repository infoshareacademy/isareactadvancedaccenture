import { call, put, takeEvery, all, select, take } from 'redux-saga/effects';
import { add as addRentalOffice } from './state/rental-office-toolkit';
import { createClearCartAction } from './state/shop-cart';
import { setData } from './state/burgers';
import { getBurgers, addBurger, deleteBurger } from "./services/burgers";

function* addToRentalOffice() {
    const shopCart = yield select((state) => state.shopCart)
    yield all(shopCart.map(p => {
        return put(addRentalOffice(p.name))
    }));
    yield put(createClearCartAction())
}

function* watchBuyAction() {
    yield takeEvery('BUY', addToRentalOffice);
}




function* refetchBurgers() {
    const burgers = yield call(getBurgers)
    yield put(setData(burgers))
}
function* postBurgerSaga(action) {
    yield call(addBurger, action.payload)
    yield refetchBurgers()
}
function* removeBurgerSaga(action) {
    yield call(deleteBurger, action.payload)
    yield refetchBurgers()
}

function* watchAddBurgerAction() {
    yield takeEvery('burgers/postBurger', postBurgerSaga);
}
function* watchRemoveBurgerAction() {
    yield takeEvery('burgers/removeBurger', removeBurgerSaga);
}

export default function* rootSaga() {
    yield all([watchBuyAction(), watchAddBurgerAction(), watchRemoveBurgerAction()])
}