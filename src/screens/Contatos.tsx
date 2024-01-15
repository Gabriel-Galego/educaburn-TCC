import { VStack, useTheme } from "native-base";
import { TouchableCard } from "../components/TouchableCard";
import { Header } from "../components/Header";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {  StyleSheet, Text } from "react-native";

export function Contatos() {
  const { colors }: any = useTheme();
  const [text, setText] = useState("");

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["50%", "80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (

      <VStack flex={1} pb={6} bg={"white"} alignItems={"center"}>
        <Header title="Contatos emergenciais" />

        <TouchableCard
          title="Serviço de Atendimento Móvel de Urgência"
          subtitle="192"
          onPress={() => {
            setText("O SAMU pode ser acionado pelo número 192, que é gratuito e atende a população 24 horas por dia.");
            handleSnapPress(0);
          
          }}
          icon={<Icon name="ambulance" size={36} color={colors.orange[400]} />}
        />
        <TouchableCard
          title="Corpo de Bombeiros"
          subtitle="193"
          onPress={() => {
            setText("O corpo de bombeiros pode ser acionado pelo número 193, que é gratuito e atende a população 24 horas por dia.");
            handleSnapPress(0);
          
          }}
          icon={
            <Icon
              name="fire-extinguisher"
              size={36}
              color={colors.orange[400]}
            />
          }
        />
        <TouchableCard
          title="Polícia Militar"
          subtitle="190"
          onPress={() => {
            setText("A polícia militar pode ser acionada pelo número 190, que é gratuito e atende a população 24 horas por dia.");
            handleSnapPress(0);
          }}
          icon={
            <Icon2 name="police-badge" size={36} color={colors.orange[400]} />
          }
        />
        <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}     
        enablePanDownToClose={true}
        style={styles.bottomSheet}
      
      >    
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
         <Text style={styles.contentText}>{text}</Text>
        </BottomSheetScrollView>
      </BottomSheet>
      </VStack>
  );
}


const styles = StyleSheet.create({
  
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 150,
  },
  bottomSheet: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 16,

  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    fontFamily: "Roboto_400Regular",
    color: 'black',
  },


});