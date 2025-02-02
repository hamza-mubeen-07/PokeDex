import { configureStore } from "@reduxjs/toolkit";
import { pokemonApis } from "../api/PokemonApis.ts";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["pokemonApis"],
};

const rootReducer = combineReducers({
    [pokemonApis.reducerPath]: pokemonApis.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApis.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;