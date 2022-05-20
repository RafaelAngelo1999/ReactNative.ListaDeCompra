import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

interface ListaDeComprasState {
  listaDeCompras: Produto[];
}

export interface Produto {
  id: string;
  nome: string;
  categoria: string;
  quantidade: number;
}

const initialState: ListaDeComprasState = {
  listaDeCompras: [],
};

export const ListaDeComprasSlice = createSlice({
  name: "listaDeComprasSlice",
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      action.payload.id = uuid.v4().toString();
      state.listaDeCompras.push(action.payload);
    },
    atualizarProduto: (state, action: PayloadAction<Produto>) => {
      state.listaDeCompras[
        state.listaDeCompras.findIndex(
          (produto) => produto.id === action.payload.id
        )
      ] = action.payload;
    },
    removerProduto: (state, action: PayloadAction<string>) => {
      const index = state.listaDeCompras
        .map((x) => {
          return x.id;
        })
        .indexOf(action.payload);
      state.listaDeCompras.splice(index, 1);
    },
  },
});

export const { adicionarProduto, removerProduto, atualizarProduto } =
  ListaDeComprasSlice.actions;

export default ListaDeComprasSlice.reducer;
