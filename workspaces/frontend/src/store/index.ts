import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { swapiApi } from "../api";

export const store = configureStore({
    reducer: {
        [swapiApi.reducerPath]: swapiApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(swapiApi.middleware),
});

setupListeners(store.dispatch);