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
        getMerchantByShopUrl:  builder.query({
            query: (shopUrl) => ({
                url: `/api/get-merchant/${shopUrl}`
            }),
            providesTags: ['Merchant']
        }),
        createMerchant: builder.mutation({
            query: (merchant) => ({
                url: '/api/create-merchant',
                method: 'POST',
                body: merchant
            }),
            invalidatesTags: ['Merchant']
        }),
    })
})

export const { useGetMerchantQuery, useGetMerchantByShopUrlQuery, useCreateMerchantMutation } = merchantApi