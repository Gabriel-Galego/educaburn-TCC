import { Modal, ScrollView, VStack, View, useTheme } from "native-base";
import { TouchableCard } from "../../components/TouchableCard";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import Warning from "phosphor-react-native/src/bold/Warning";
import { Card } from "../../components/Card";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/FontAwesome";

export function Manejo() {
  const { colors }: any = useTheme();
  const navigation: any = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
      <VStack flex={1} bg={"white"} alignItems={"center"} >
        <Header title="Manejo Inicial da queimadura" />

        <TouchableCard
          title="Atendimento pré-hospitalar"
          color="#E1D245"
          onPress={() => {
            navigation.navigate("Atendimento");
          }}
          icon={<Icon2 name="warning" size={36} color={colors.orange[400]} />}
          iconRight="direita"
        />
        <TouchableCard
          title="Tratamento Medicamentoso"
          color="#7DCD58"
          onPress={() => {
            navigation.navigate("Tratamento");
          }}
          icon={<Icon2 name="warning" size={36} color={colors.orange[400]} />}
          iconRight="direita"
        />
        <TouchableCard
          title="Critérios para internação ou transferência"
          color="#8656C3"
          onPress={() => {
            navigation.navigate("Criterios");
          }}
          icon={<Icon2 name="warning" size={36} color={colors.orange[400]} />}
          iconRight="direita"
        />
      </VStack>
  );
}
