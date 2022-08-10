import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cardsApi } from './Slice/apiSlice';
import { checkerApi } from './Slice/checkerSliceApi';

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    [checkerApi.reducerPath]: checkerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware, checkerApi.middleware),
});

setupListeners(store.dispatch);

export default store;
