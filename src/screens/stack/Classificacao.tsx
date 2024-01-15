import { ScrollView, VStack, View, useTheme } from "native-base";
import { TouchableCard } from "../../components/TouchableCard";
import { Header } from "../../components/Header";
import MagnifyingGlass from "phosphor-react-native/src/bold/MagnifyingGlass";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export function Classificacao() {
  const { colors }: any = useTheme();
  const navigation: any = useNavigation();

 

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      backgroundColor={"white"}
    >
      <VStack flex={1} pb={6} bg={"white"} alignItems={"center"} mb={20}>
        <Header title="Classificação das queimaduras" />

        <TouchableCard
          title="Etiologia"
          subtitle="Origem da queimadura"
          color="#E17D45"
          onPress={() => {
            navigation.navigate("Etiologia");
          }}
          icon={<Icon name="category" size={36} color={colors.orange[400]} />}
          iconRight="direita"
        />
        <TouchableCard
          title="Profundidade"
          subtitle="Gravidade da queimadura"
          color="#CD5890"
          onPress={() => {
            navigation.navigate("Profundidade");
          }}
          icon={<Icon name="category" size={36} color={colors.orange[400]} />}
          iconRight="direita"
        />
        <TouchableCard
          title="Calculo da superfície corporal queimada"
          color="#568FC3"
          onPress={() => {
            navigation.navigate("Calculo");
          }}
          icon={<Icon name="category" size={36} color={colors.orange[400]} />}
          iconRight="direita"
        />
      </VStack>
      
     
    </ScrollView>
  );
}
