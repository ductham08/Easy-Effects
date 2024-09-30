import {createSlice} from '@reduxjs/toolkit'

export const merchantSlice = createSlice({
    name: 'merchant',
    initialState: {
        name: "ABC"
    },
    reducers: {
        setMerchant: (state, action) => {
            state.name = action.payload.name
        },
    }
})

// Action creators are generated for each case reducer function
export const {setMerchant} = merchantSlice.actions

export default merchantSlice.reducer
