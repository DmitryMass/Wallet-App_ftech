import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://lookup.binlist.net/';

export const checkerApi = createApi({
  reducerPath: 'checkerApi',
  tagTypes: ['Checker'],
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (build) => ({
    getCardScheme: build.query({
      query: (id) => ({
        url: `${id}`,
      }),
      providesTags: (id) => [{ type: 'Checker', id }],
    }),
  }),
});

export const { useGetCardSchemeQuery } = checkerApi;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const URL = 'https://lookup.binlist.net/';
// const request = async (url, method = 'GET', body = null) => {
//   const res = await fetch(`${URL}${url}`, {
//     method,
//     body: body ? JSON.stringify(body) : null,
//     headers: {
//       'Content-type': 'application/json',
//     },
//   });

//   if (res.ok) {
//     return res.json();
//   }
//   throw new Error('Sorry / Api error');
// };

// export const getCardScheme = createAsyncThunk(
//   'checker/getCardScheme',
//   async (id, { rejectWithValue, dispatch }) => {
//     try {
//       const res = await request(`${id}`);
//       return dispatch(getCardInfo(res));
//     } catch (e) {
//       throw new Error('sorry api error');
//     }
//   }
//   // 1 аргумент - пейлоад, 2 - опшины (у функции асинк)
// );

// const initialState = {
//   cardScheme: {},
// };

// const checkerSlice = createSlice({
//   name: 'checker',
//   initialState,
//   reducers: {
//     getCardInfo: (state, { payload }) => {
//       state.cardScheme = payload;
//     },
//   },
// });

// export const { getCardInfo } = checkerSlice.actions;
// export default checkerSlice.reducer;
