import {configureStore} from '@reduxjs/toolkit'
import merchantSlice from '../apis/merchant'

export default configureStore({
    reducer: {
        merchant: merchantSlice.reducer,
    }
})
