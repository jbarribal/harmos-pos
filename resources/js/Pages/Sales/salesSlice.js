import { createSlice, current } from '@reduxjs/toolkit'



export const SalesSlice = createSlice({
    name: 'sales',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            if(current(state).some((item) => item.id == action.payload.id)){
                SalesSlice.caseReducers.incQty(state, action)
            }
            else {
                state.push(action.payload)
            }
            
            
        },
        incQty: (state, action) => {
            state.map((item) => {
                if(item.id == action.payload.id){
                    item.quantity += 1
                }
            })
        },

        decQty: (state, action) => {
            state.map((item) => {
                if(item.id == action.payload.id){
                    if(item.quantity > 1){
                        item.quantity -= 1
                    }
                }
            })
        },

        removeCart: (state, action) => {
            state.map((item, index) => {
                if(item.id == action.payload.id){
                    state.splice(index, 1)
                }
            })
        },
        
    }
})

export const { addCart, incQty, decQty,removeCart } = SalesSlice.actions
export default SalesSlice.reducer