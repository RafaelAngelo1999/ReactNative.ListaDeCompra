import React, { FC } from "react";
import { Header } from "../components/Header";
import { Lista } from "../components/Lista";
import { useSelector } from "react-redux";
import { State } from "../../../store";

interface IListaProps {
  navigation: any;
}

const Listagem: FC<IListaProps> = ({ navigation }) => {
  const listaDeCompras = useSelector(
    (state: State) => state.listaDeCompras.listaDeCompras
  );

  return (
    <>
      <Header navigation={navigation} />
      <Lista lista={listaDeCompras} navigation={navigation} />
    </>
  );
};

export default Listagem;
