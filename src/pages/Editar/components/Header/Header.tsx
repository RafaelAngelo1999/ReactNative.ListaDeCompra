import { Text } from "@react-native-material/core";
import React, { FC } from "react";

interface IHeaderProps {
  isEdit: boolean;
}

const Header: FC<IHeaderProps> = ({ isEdit }) => {
  return (
    <Text
      variant="h4"
      style={{ fontWeight: "bold", textAlign: "center", paddingTop: 10 }}
    >
      {isEdit ? "Edição produto" : "Criação produto"}
    </Text>
  );
};

export default Header;
