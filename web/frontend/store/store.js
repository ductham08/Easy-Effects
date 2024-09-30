import {configureStore} from '@reduxjs/toolkit'
import merchantReducer from "./merchant.js";

export default configureStore({
    reducer: {
        merchant: merchantReducer,
    }
})
