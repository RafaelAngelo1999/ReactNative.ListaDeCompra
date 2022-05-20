import React, { FC } from "react";
import { Produto } from "../../../../store/slices/ListaDeComprasSlice";
import { View, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { Text } from "@react-native-material/core";

interface IListaProps {
  navigation: any;
  lista: Produto[];
}

const Lista: FC<IListaProps> = ({ navigation, lista }) => {
  return lista.length ? (
    <>
      <View style={styles.container}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nome</DataTable.Title>
            <DataTable.Title>Categoria</DataTable.Title>
            <DataTable.Title numeric>Quantidade</DataTable.Title>
            <DataTable.Title numeric>Ações</DataTable.Title>
          </DataTable.Header>
          {Object.values(lista).map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.nome}</DataTable.Cell>
              <DataTable.Cell>{item.categoria}</DataTable.Cell>
              <DataTable.Cell numeric>{item.quantidade}</DataTable.Cell>
              <DataTable.Cell
                numeric
                onPress={() =>
                  navigation.push("Manipular", {
                    idProduto: item.id,
                  })
                }
              >
                Editar
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </>
  ) : (
    <Text
      style={{ marginTop: 50, textAlign: "center", color: "grey" }}
      variant="h3"
    >
      Lista vazia :(
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
});

export default Lista;
