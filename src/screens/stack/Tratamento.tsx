import { VStack } from "native-base";
import { Header } from "../../components/Header";
import { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {  StyleSheet, Text } from "react-native";
import { TouchableCard } from "../../components/TouchableCard";

export function Tratamento() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["50%", "80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (

      <VStack flex={1} bg="white" alignItems={"center"}>
        <Header title="Tratamento medicamentoso" />
        <TouchableCard
          title="Analgesia para adultos"
          onPress={() => {
            setText("Para adultos administra-se de 500mg a 1g de dipirona endovenosa, ou10mg de morfina diluída em 9ml de SF 0,9%, considerando que 1ml equivale a 1mg, administre de 0,5 a 1mg para cada 10kg de peso.")
            setText2("");
            setText3("");
            setText4("");
            handleSnapPress(0);
          }}
          
        />
        <TouchableCard
          title="Analgesia para crianças"
          onPress={() => {
            setText("Para crianças de 15 a 25mg/kg de dipirona endovenosa ou 10mg de morfina diluída em 9ml de SF 0,9%, considerando que 1ml equivale a 1mg, administre de 0,5 a 1mg para cada 10kg de peso.")
            setText2("");
            setText3("");
            setText4("");
            handleSnapPress(0);
          }}
          
        />
        <TouchableCard
          title="Orientações gerais"
          onPress={() => {
            setText("Reforço antitetânico profilático caso necessário.")
            setText2("Bloqueador de receptor H2 para profilaxia de úlcera gástrica por estresse.")
            setText3("Heparina subcutânea para profilaxia de tromboembolismo.")
            setText4("Restringir o uso de antibióticos profilático apenas a queimaduras potencialmente colonizadas e com sinais de infeções locais ou sistêmicas.")
            handleSnapPress(0);
          }}
          
        />
        <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}     
        enablePanDownToClose={true}
        style={styles.bottomSheet}
      
      >    
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
         {text && <Text style={styles.contentText}>{text}</Text>}
         {text2 && <Text></Text>}
         {text2 && <Text style={styles.contentText}>{text2}</Text>}
         {text3 && <Text></Text>}
         {text3 && <Text style={styles.contentText}>{text3}</Text>}
         {text4 && <Text></Text>}
         {text4 && <Text style={styles.contentText}>{text4}</Text>}
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