import React, { FC } from "react";
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
        +
      </Button>
    </>
  );
};

export default Header;
