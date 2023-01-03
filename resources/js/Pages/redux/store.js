import { configureStore } from "@reduxjs/toolkit";
import Reducer from './reducer'
import CartReducer from '../Sales/salesSlice'

export const store = configureStore({
    reducer: {
        form:Reducer,
        sales:CartReducer
    },


});