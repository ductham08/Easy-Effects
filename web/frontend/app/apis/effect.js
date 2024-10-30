import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const effectApi = createApi({
    reducerPath: "effectApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),
    tagTypes: ['Effect'],
    endpoints: (builder) => ({
        getEffects:  builder.query({
            query: () => ({
                url: `/api/get-effects`
            }),
            providesTags: ['Effect']
        }),
    })
})

export const { useGetEffectsQuery } = effectApi