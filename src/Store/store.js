import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cardsApi } from './Slice/apiSlice';
import { checkerApi } from './Slice/checkerSliceApi';
// import checkerSliceApi from './Slice/checkerSliceApi';

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    [checkerApi.reducerPath]: checkerApi.reducer,
    // checker: checkerSliceApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware, checkerApi.middleware),
});

setupListeners(store.dispatch);

export default store;
