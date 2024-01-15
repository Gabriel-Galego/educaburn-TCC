import React from "react";
import { ProfileImageUpload } from "../components/ProfileImageUpload";
import { Header } from "../components/Header";
import { Text } from "react-native";
import { VStack } from "native-base";

export function Preferencias() {

  return (
    <VStack flex={1} alignItems={"center"} bg={"white"} >
      <Header title="Preferências" />
      <ProfileImageUpload />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          color: "black",
          marginTop: 10,
        }}
      >
        Clique na Foto de perfil para altera-lá
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        Alterar Dados
      </Text>
    </VStack>
  );
}
