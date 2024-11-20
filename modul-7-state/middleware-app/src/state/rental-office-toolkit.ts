import { createSlice } from "@reduxjs/toolkit";

export type VHS = {
    id: number,
    name: string,
    isRented: boolean
}
export type State = VHS[];

export const initialState: State = [
    { id: 1, name: 'The Lion King', isRented: true },
    { id: 2, name: 'Robocop', isRented: false },
    { id: 3, name: 'Kobra', isRented: false },
];

const rentalOfficeSlice = createSlice({
    name: 'rentalOffice',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push({ id: state.length + 1, name: action.payload, isRented: false })
        },
        remove: (state, action) => {
            return state.filter(element => element.id !== action.payload)
        },
        rent: (state, action) => {
            state.forEach(element => {
                if (element.id === action.payload) element.isRented = true
            })
        },
        returnVHS: (state, action) => {
            state.forEach(element => {
                if (element.id === action.payload) element.isRented = false
            })
        },
    }
});

export const rentalOffice = rentalOfficeSlice.reducer;
export const { add, remove, rent, returnVHS } = rentalOfficeSlice.actions;