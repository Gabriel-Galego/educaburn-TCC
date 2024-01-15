import { Image, ScrollView, VStack } from "native-base";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import React, { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { StyleSheet, Text, View } from "react-native";
import { TouchableCard } from "../../components/TouchableCard";

export function Calculo() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["50%", "80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (
      <VStack flex={1} pb={6} bg="white" alignItems={"center"}>
        <Header title="Cálculo da Superfície Corporal Queimada" />
        <TouchableCard
          title="Entenda o cálculo"
          onPress={() => {
            setText("São utilizadas para esse cálculo as queimaduras de segundo, terceiro e quarto grau. O método de Lund- Browder é considerado o mais preciso, é baseado em gráfico e leva em consideração a idade do paciente.")
            setText2("O percentual de superfície corporal queimada permite classificar o paciente em pequeno e grande queimado. No adulto, embora haja diferenças, de maneira geral considera-se pequeno queimado o paciente com <10% de SCQ e grande queimado o paciente adulto com mais de >20% de SCQ e crianças com >10% da SCQ.  Considera-se o valor total de cada parte do corpo quando queimada toda a superfície, caso contrário é necessário dividir a área para calcular esse percentual, podendo dividir ao meio ou em quatro partes.");
            handleSnapPress(0);
          }}
          
        />

        <Image
          source={require("../../assets/imageTableLund.png")}
          alt="Tabela"
          resizeMode="contain"
          alignSelf="center"
          width="100%"
          height={500}
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
          <Text></Text>
          <Text style={styles.contentText}>{text2}</Text>
          </BottomSheetScrollView>
        </BottomSheet>
      </VStack>
  );
}

const styles = StyleSheet.create({
  
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
    margin: 16,
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