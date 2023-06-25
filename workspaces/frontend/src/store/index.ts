import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { swapiApi, ratingApi } from "../api";

export const store = configureStore({
    reducer: {
        [swapiApi.reducerPath]: swapiApi.reducer,
        [ratingApi.reducerPath]: ratingApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(swapiApi.middleware)
        .concat(ratingApi.middleware),
});

setupListeners(store.dispatch);