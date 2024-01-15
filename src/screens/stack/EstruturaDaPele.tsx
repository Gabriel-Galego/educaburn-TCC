import { Image, VStack, useTheme } from "native-base";
import { Header } from "../../components/Header";
import { TouchableCard } from "../../components/TouchableCard";
import { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import Stack from "phosphor-react-native/src/bold/Stack";
import {  ScrollView, StyleSheet, Text } from "react-native";

export function EstruturaDaPele() {
  const [text, setText] = useState("");
  const { colors }: any = useTheme();

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["50%", "80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (
    <>
    <ScrollView  style={{
      backgroundColor: "white",
    }}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
    >
      <VStack  bg="white" alignItems={"center"} mb={10}>
        <Header title="Estrutura da pele" />
        <Image
          source={require("../../assets/estruturadapele.png")}
          alt="Pele"
          resizeMode="contain"
          alignSelf="center"
          width="100%"
          height={300}
        />

        <TouchableCard
          title="Epiderme"
          subtitle="Camada mais externa"
          color="#EB5656"
          icon={<Stack size={36} color={colors.orange[400]} />}
          onPress={() => {
            setText("Epiderme é a camada mais externa, queratinizada e sem vascularização. É formada por tecido epitelial composta por queratinócitos em diversas fases de diferenciação, melanócitos, células dendríticas mecanorreceptores e células lipídicas. Tem importante função na permeabilidade do tecido, impedindo a desidratação.")
       
            handleSnapPress(0);
          }}
          
        />
        <TouchableCard
          title="Derme"
          subtitle="Camada intermediária"
          color="#5270D9"
          icon={<Stack size={36} color={colors.orange[400]} />}
          onPress={() => {
            setText("Derme é a camada abaixo da epiderme, composta de tecido conjuntivo (principal função de sustentação), fibras elásticas e reticulares, colágeno, rica vascularização, drenagem linfática e inervação; possibilitando suporte nutricional, regulação térmica, elasticidade e resistência. Tem importante papel no processo de inflamação, pois viabiliza mobilização de células de defesa. É dividida em derme papilar, que fica na base da epiderme, e derme reticular, que é uma camada mais profunda e predominantemente composta por fibras de colágeno.");
            
            handleSnapPress(0);
          }}
        />
        <TouchableCard
          title="Hipoderme"
          subtitle="Camada mais interna"
          color="#56C361"
          icon={<Stack size={36} color={colors.orange[400]} />}
          onPress={() => {
            setText("Hipoderme é acamada mais profunda constituída por lóbulos de adipócitos e colágenos, vasos sanguíneos, linfáticos e nervos. Tem importante função de proteção contra traumas e como isolante térmico, além de ser um depósito de calorias.");
     
            handleSnapPress(0);
          }}
        />

      </VStack>
      
    </ScrollView>  
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
  </>
  );
}

const styles = StyleSheet.create({
  
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
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