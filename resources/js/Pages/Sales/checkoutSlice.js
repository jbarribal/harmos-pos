import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit';
import { makeStateUpdater } from '@tanstack/react-table';

const initialState = {
    modal: false,
    transaction: {
        customer:'',
        total: 0,
        cashAmount:0,
        items: [],
        paymentMethod: 'Cash',
        change: 0,
        userId:''
    }
}

export const CheckoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.modal = !state.modal;
        },

        processPayment:(state, action) => {
            state.transaction = action.payload;
        },

        setTotal: (state, action) => {
            state.transaction.total = action.payload;
        },

        setCustomer: (state, action) => {
            state.transaction.customer = action.payload;
        },

        setChange: (state, action) => {

            if(action.payload  - state.transaction.total > 0){
                state.transaction.change = action.payload - state.transaction.total
                state.transaction.cashAmount = action.payload;
            } else {
                state.transaction.change = 0;
            }
        },

        setMethod: (state, action) => {
            state.transaction.paymentMethod = action.payload;
        },


        setItems: (state, action) => {
            state.transaction.items = action.payload;

        },

        setUserId: (state, action) => {
            state.transaction.userId = action.payload;
        },

        
}})

export const { 
    toggleModal, 
    processPayment, 
    setTotal, 
    setCustomer, 
    setChange, 
    setMethod,
    setItems,
    setUserId 

} = CheckoutSlice.actions

export default CheckoutSlice.reducer