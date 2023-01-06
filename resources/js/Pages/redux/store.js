import { configureStore } from "@reduxjs/toolkit";
import Reducer from './reducer'
import CartReducer from '../Sales/salesSlice'
import CheckoutReducer from '../Sales/checkoutSlice'

export const store = configureStore({
    reducer: {
        form:Reducer,
        sales:CartReducer,
        checkout:CheckoutReducer
    },


});