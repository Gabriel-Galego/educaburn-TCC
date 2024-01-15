import { Heading, ScrollView, Text, VStack } from "native-base";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {  StyleSheet } from "react-native";
import { TouchableCard } from "../components/TouchableCard";

export function Informacoes() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["50%", "80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (

      <VStack flex={1} pb={6} bg="white" alignItems={"center"}>
        <Header title="Informações Adicionais" />
        <TouchableCard
          title="Sobre este aplicativo"
          onPress={() => {
            setText("Esse aplicativo foi desenvolvido pelo programa de Pós - graduação em enfermagem da Universidade Estadual de Londrina em parceria com o departamento de informática na Universidade Estadual de Maringá. Tem como objetivo fornecer informações seguras sobre o manejo inicial ao trauma de queimadura para profissionais de saúde que não tem aproximação com o tema. Os materiais utilizados para a construção desse aplicativo foram retirados no site oficial da Sociedade Brasileira de Queimaduras (SBQ).");
            setText2("");
            setText3("");
            handleSnapPress(0);
          }}
         
        />
        <TouchableCard
          title="Referências"
          onPress={() => {
            setText("• Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Especializada. Cartilha para tratamento de emergência das queimaduras / Ministério da Saúde, Secretaria de Atenção àSaúde, Departamento de Atenção Especializada. – Brasília: Editora do Ministério da Saúde, 2012.")
            setText2("• Manual de queimaduras para estudantes / organização: Derek Chaves Lopes,Isabella de Liz Gonzaga Ferreira, Jose Adorno. - Brasília: SociedadeBrasileira de Queimaduras, 2021.")
            setText3("• Guia de prática clínica para o cuidado de enfermagem ao paciente queimado:Metodologia ADAPTE [recurso eletrônico] / Tiago da Silva Fontana, EmilianeNogueira de Souza e Karin Viegas. — Porto Alegre: Ed. da UFCSPA, 2021.")
            handleSnapPress(0);
          }}
         
        />
        <TouchableCard
          title="Para mais informações"
          onPress={() => {
            setText("Sociedade Brasileira de queimadura:")
            setText2("https://sbqueimaduras.org.br/profissional-saude")
            setText3("");
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
         {text3 && <Text style={styles.contentText}>{text2}</Text>}
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