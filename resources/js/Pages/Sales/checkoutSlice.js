import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modal: false
}

export const CheckoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.modal = !state.modal;
        }

    }
})

export const { toggleModal } = CheckoutSlice.actions
export default CheckoutSlice.reducer