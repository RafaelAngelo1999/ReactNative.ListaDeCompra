import React, { FC } from "react";
import { Formulario } from "../components/Formulario";
import { Header } from "../components/Header";

interface IManipularProps {
  navigation: any;
  route: any;
}

const Manipular: FC<IManipularProps> = ({ navigation, route }) => {
  const idProduto = route?.params?.idProduto;
  const isEdit = !!idProduto;

  return (
    <>
      <Header isEdit={isEdit} />
      <Formulario
        idProduto={idProduto}
        isEdit={isEdit}
        navigation={navigation}
      />
    </>
  );
};

export default Manipular;
