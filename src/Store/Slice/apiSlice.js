import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://62e8febd249bb1284eb816a3.mockapi.io/api';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  tagTypes: ['Cards'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getAllCards: build.query({
      query: () => '/wallet',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Cards', id })),
              { type: 'Cards', id: 'LIST' },
            ]
          : [{ type: 'Cards', id: 'LIST' }],
    }),
    addNewCard: build.mutation({
      query: (body) => ({
        url: '/wallet',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Cards', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllCardsQuery, useAddNewCardMutation } = cardsApi;
