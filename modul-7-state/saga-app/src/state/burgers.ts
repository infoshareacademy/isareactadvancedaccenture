import { createSlice } from "@reduxjs/toolkit";
import { getBurgers, addBurger, deleteBurger } from "../services/burgers";
import type { PayloadAction } from '@reduxjs/toolkit'

export type BurgerData = {
    name: string,
    ingredients: string,
    price: string,
    url?: string
}
export type Burger = BurgerData & {
    id: string,
}
export type State = { data: Burger[], loading: boolean }

export const initialState: State = { data: [], loading: false }

const burgersSlice = createSlice({
    name: 'burgers',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        postBurger: (state, action: PayloadAction<BurgerData>) => {
            state.loading = true
        },
        removeBurger: (state, action: PayloadAction<string>) => {
            state.loading = true
        },
    },
});

export const burgers = burgersSlice.reducer;
export const { setData, setLoading, postBurger, removeBurger } = burgersSlice.actions;


// REDUX THUNK
export const fetch = () => async (dispatch) => {
    dispatch(setLoading(true))
    const response = await getBurgers();
    dispatch(setData(response))
}

export const add = (data: BurgerData) => async (dispatch) => {
    await addBurger(data);
    dispatch(fetch())
}

export const remove = (id: string) => async (dispatch) => {
    await deleteBurger(id);
    dispatch(fetch())
}