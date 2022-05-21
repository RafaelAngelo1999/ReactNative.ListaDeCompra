import React, { FC } from "react";
import { Text } from "react-native";

interface IHeaderProps {
  isEdit: boolean;
}

const Header: FC<IHeaderProps> = ({ isEdit }) => {
  return (
    <Text style={{ fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>
      {isEdit ? "Edição produto" : "Criação produto"}
    </Text>
  );
};

export default Header;
