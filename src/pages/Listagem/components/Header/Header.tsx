import React, { FC } from "react";
import { Plus } from "react-native-feather";
import { Text } from "@react-native-material/core";
import { Button } from "@react-native-material/core";

interface IHeaderProps {
  navigation: any;
}

const Header: FC<IHeaderProps> = ({ navigation }) => {
  return (
    <>
      <Text
        variant="h4"
        style={{ fontWeight: "bold", textAlign: "center", paddingTop: 10 }}
      >
        Minha Lista
      </Text>
      <Button
        title={"Add Item"}
        onPress={() => navigation.push("Manipular")}
        variant="contained"
        style={{ marginTop: 3 }}
      >
        <Plus />
      </Button>
    </>
  );
};

export default Header;
