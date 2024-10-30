import {configureStore} from '@reduxjs/toolkit'
import { merchantApi } from '../apis/merchant.js'
import { effectApi } from '../apis/effect.js'

export default configureStore({
    reducer: {
        merchantApi: merchantApi.reducer,
        effectApi: effectApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        merchantApi.middleware,
        effectApi.middleware,
    ),
})
