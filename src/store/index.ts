import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import listaDeCompraReducer from "./slices/ListaDeComprasSlice";

const reducers = combineReducers({
  listaDeCompras: listaDeCompraReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default reducers;

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof reducers>;
export type RootState = ReturnType<typeof store.getState>;
