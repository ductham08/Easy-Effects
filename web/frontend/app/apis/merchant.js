import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const merchantApi = createApi({
    reducerPath: "merchantApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),
    tagTypes: ['Merchant'],
    endpoints: (builder) => ({
        getMerchant:  builder.query({
            query: () => ({
                url: `/api/get-merchant`
            }),
            providesTags: ['Merchant']
        }),
    })
})

export const { useGetMerchantQuery } = merchantApi