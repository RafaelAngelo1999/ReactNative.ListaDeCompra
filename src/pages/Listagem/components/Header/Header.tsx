import React, { FC } from "react";
import { Plus } from "react-native-feather";
import { Button, Text } from "react-native";

interface IHeaderProps {
  navigation: any;
}

const Header: FC<IHeaderProps> = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>
        Minha Lista
      </Text>
      <Button title={"Add Item"} onPress={() => navigation.push("Manipular")}>
        <Plus />
      </Button>
    </>
  );
};

export default Header;
