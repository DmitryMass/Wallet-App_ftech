import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://62f3f420b81dba4a013f9a58.mockapi.io/api';

export const cashApi = createApi({
  reducerPath: 'cashApi',
  tagTypes: ['Cash'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getAllCash: build.query({
      query: () => '/cash',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Cash', id })),
              { type: 'Cash', id: 'LIST' },
            ]
          : [{ type: 'Cash', id: 'LIST' }],
    }),
    addNewCash: build.mutation({
      query: (body) => ({
        url: '/cash',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Cash', id: 'LIST' }],
    }),
    updateSelectedCash: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/cash/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Cash', id: 'LIST' }],
    }),
    deleteSelectedCash: build.mutation({
      query: (id) => ({
        url: `/cash/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Cash', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllCashQuery,
  useAddNewCashMutation,
  useUpdateSelectedCashMutation,
  useDeleteSelectedCashMutation,
} = cashApi;
