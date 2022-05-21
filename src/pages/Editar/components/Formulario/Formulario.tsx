import React, { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../../store";
import {
  Produto,
  removerProduto,
  adicionarProduto,
  atualizarProduto,
} from "../../../../store/slices/ListaDeComprasSlice";
import { categorias } from "../../../../shared/models/IItem";
import { Box } from "react-native-flex-layout";
import { Button, TextInput, StyleSheet, Text } from "react-native";

interface IFormularioProps {
  idProduto: string | undefined;
  isEdit: boolean;
  navigation: any;
}

const Formulario: FC<IFormularioProps> = ({
  idProduto,
  isEdit,
  navigation,
}) => {
  const dispatch = useDispatch();
  const produtoAtual = useSelector((state: State) =>
    state.listaDeCompras.listaDeCompras.find(
      (produto: Produto) => produto.id === idProduto
    )
  );

  const { handleSubmit, control, reset } = useForm({
    mode: "onSubmit",
  });

  useEffect(() => {
    if (produtoAtual) {
      reset(produtoAtual);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [produtoAtual as Produto]);

  // eslint-disable @typescript-eslint/no-explicit-any
  const editarOuCriarProduto = (data: Produto) => {
    if (isEdit) dispatch(atualizarProduto(data));
    else dispatch(adicionarProduto(data));
    navigation.navigate("Lista");
  };

  const excluirProduto = () => {
    produtoAtual && dispatch(removerProduto(produtoAtual?.id));
    navigation.navigate("Lista");
  };

  const pickerStyle = {
    inputIOS: {
      paddingTop: 18,
      paddingHorizontal: 10,
      paddingBottom: 18,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 4,
      backgroundColor: "white",
      color: "black",
      margin: 16,
    },
    underline: {
      borderTopWidth: 0,
      backgroundColor: "red",
    },
    inputAndroid: {
      fontSize: 16,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 4,
      backgroundColor: "white",
      color: "black",
      margin: 16,
    },
  };

  return (
    <Box style={{ marginTop: 1 }}>
      <Controller
        name="nome"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box mb={4}>
            <Text
              style={{
                fontWeight: "bold",
                paddingTop: 10,
                marginLeft: 15,
              }}
            >
              Nome
            </Text>
            <TextInput
              placeholder="Nome"
              value={value}
              onChangeText={onChange}
              style={styles.textInputStyle}
            />
          </Box>
        )}
        rules={{
          required: "Nome é obrigatorio",
          pattern: {
            value: /^.{3,}$/,
            message: "Nome deve contem no minimo 3 caracteres",
          },
        }}
      />
      <Controller
        name="categoria"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box>
            <RNPickerSelect
              style={pickerStyle}
              value={value}
              onValueChange={(language) => onChange(language)}
              items={categorias.map((option) => ({
                label: option.value,
                value: option.value,
              }))}
            ></RNPickerSelect>
          </Box>
        )}
        rules={{
          required: "Categoria obrigatoria",
        }}
      />
      <Controller
        name="quantidade"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box mb={4}>
            <Text
              style={{
                fontWeight: "bold",
                paddingTop: 10,
                marginLeft: 15,
              }}
            >
              Quantidade
            </Text>
            <TextInput
              placeholder="Quantidade"
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
              style={styles.textInputStyle}
            ></TextInput>
          </Box>
        )}
        rules={{
          required: "Quantidade Obrigatoria",
          pattern: {
            value: /^[+]?\d+([.]\d+)?$/,
            message: "Apenas numeros positivos",
          },
        }}
      />
      <Button
        title={isEdit ? "Editar" : "Criar"}
        onPress={handleSubmit((data) => {
          editarOuCriarProduto(data as Produto);
        })}
      ></Button>
      {isEdit && <Button title={"Excluir"} onPress={excluirProduto}></Button>}
      <Button
        title={"Voltar"}
        onPress={() => {
          navigation.navigate("Lista");
        }}
      ></Button>
    </Box>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginHorizontal: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderWidth: 0.5,
  },
});

export default Formulario;
