import { Heading, Image, ScrollView, VStack, View } from "native-base";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { StyleSheet, Text } from "react-native";
import { TouchableCard } from "../../components/TouchableCard";

export function Profundidade() {
  const [text, setText] = useState("");
  const [url, setUrl] = useState(false);
  const [url2, setUrl2] = useState(false);
  const [url3, setUrl3] = useState(false);
  const [url4, setUrl4] = useState(false);

  const sheetRef = useRef<BottomSheet>(null); 
  const snapPoints = useMemo(() => ["80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (
      <VStack flex={1} bg="white" alignItems={"center"} >
        <Header title="Profundidade da Queimadura" />
        <TouchableCard
          title="Queimadura de Primeiro Grau"
          onPress={() => {
            setText("É superficial, atingindo a epiderme, a pele apresenta um aspecto seco e hiperemiado e é dolorosa. A lesão regride em poucos dias sem cicatrizes, em alguns caso pode ocorrer leve descamação.")
            setUrl(true)
            setUrl2(false);
            setUrl3(false);
            setUrl4(false); 
            handleSnapPress(0);
          }}  
        />
        <TouchableCard
          title="Queimadura de Segundo Grau"
          onPress={() => {
            setText("Atinge, em graus variados, a derme e pode ser chamado também de queimadura de espessura parcial. Dependendo da profundidade do acometimento da derme é classificada em queimadura de segundo grau superficial ou profunda. No primeiro caso são atingidos os folículos capilares e glândulas sudoríparas, a pele fica úmida, avermelhada, com bolhas e dolorosa; no segundo caso existe um acometimento mais profundo, mas não total da derme chegando até o folículo piloso, a pele fica menos úmida e mais dolorosa. A cicatrização é espontânea e demorada (2 a 4 semanas), pode deixar sequelas superficiais como alteração de coloração da pele e sequelas mais profundas como cicatrizes.")
            setUrl(false)
            setUrl2(true);
            setUrl3(true);
            setUrl4(false); 
            handleSnapPress(0);
          }}
        />
        <TouchableCard
          title="Queimadura de Terceiro Grau"
          onPress={() => {
            setText("Ou queimadura de espessura total, ocorre a destruição da epiderme, derme e em alguns casos do tecido subcutâneo adjacente. A pele fica com uma coloração variável, de pálida a avermelhada ou preta, inelástica, ressecada e endurecida ao toque, dependendo do dano aos nervos periféricos pode apresentar diminuição ou perda total da sensibilidade. Nesses casos é necessário realizar enxerto para que ocorra a regeneração da pele, contribuindo para a ocorrência de cicatrizes patológicas.")
            setUrl(false)
            setUrl2(false);
            setUrl3(false);
            setUrl4(true); 
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
        {url && <Image
                          source={require("../../assets/orelha.png")}
                          alt="Queimadura"
                          w={"90%"}
                          h={200}
                          mb={6}
                          borderRadius={10}
                        />
        }
        {url2 && <Image
                          source={require("../../assets/mao.png")}
                          alt="Queimadura"
                          w={"90%"}
                          h={200}
                          mb={6}
                          borderRadius={10}
                        />
        }
        {url3 && <Image
                          source={require("../../assets/braco.png")}
                          alt="Queimadura"
                          w={"90%"}
                          h={200}
                          mb={6}
                          borderRadius={10}
                        />
        }
        {url4 && <Image
                          source={require("../../assets/braco2.png")}
                          alt="Queimadura"
                          w={"90%"}
                          h={200}
                          mb={6}
                          borderRadius={10}
                        />
        }
         <Text style={styles.contentText}>{text}</Text>
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
    padding: 16,  
    margin: 16,
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
    marginBottom: 150,

  },

});
