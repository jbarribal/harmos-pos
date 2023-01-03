import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    form : false,
    product : {
        name: "",
        code: "",
        brand: "",
        price: "",
        quantity: "", 
    }
}


export const ReducerSlice = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
        toggleForm: (state, action) => {
            state.form = !state.form;
            state.product = action.payload
        },
    }})


export const { toggleForm } = ReducerSlice.actions
export default ReducerSlice.reducer