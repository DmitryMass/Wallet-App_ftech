import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cardsApi } from './Slice/apiSlice';
import { cashApi } from './Slice/cashSlice';
import { checkerApi } from './Slice/checkerSliceApi';

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    [checkerApi.reducerPath]: checkerApi.reducer,
    [cashApi.reducerPath]: cashApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cardsApi.middleware,
      checkerApi.middleware,
      cashApi.middleware
    ),
});

setupListeners(store.dispatch);
// setuplistener в целом не нужен
// нужен для Рефетча при фокусе или конекте, на будущее )

export default store;
