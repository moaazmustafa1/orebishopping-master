import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import orebiReducer from "./orebiSlice";
import {productApi} from "./product"
import { setupListeners } from '@reduxjs/toolkit/query'


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, orebiReducer);

export const store = configureStore({
  reducer: { 
    [productApi.reducerPath] : productApi.reducer,
    orebiReducer: persistedReducer,
   },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
});

export let persistor = persistStore(store);
setupListeners(store.dispatch)