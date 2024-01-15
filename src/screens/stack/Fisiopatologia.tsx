import { Header } from "../../components/Header";
import { TouchableCard } from "../../components/TouchableCard";
import { useCallback, useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export function Fisiopatologia() {
  const [text, setText] = useState("");

  const sheetRef = useRef<BottomSheet>(null); 
  const snapPoints = useMemo(() => ["50%", "80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (
      
      <ScrollView  style={{
        backgroundColor: "white",
        flex:1,
        height: "100%",
      }} >
      <View 
        style={{
          flex:1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
         
          paddingBottom: "20%",


          
        }}
      >
        <Header title="Fisiopatologia da queimadura" />
       
       
        <TouchableCard
          title="Visão geral"
          onPress={() => {
            setText("Pode ser dividida em resposta local e sistêmica. A resposta local é resultado do dano direto ao tecido, enquanto a resposta sistêmica é composta por diversos mecanismos que buscam conter a lesão, que dependendo da severidade pode causar danos ao organismo.  A severidade da queimadura está relacionada a intensidade do agende e ao tempo de exposição. A síntese da fisiopatologia pode ser expressa em duas manifestações principais: edema e aumento da permeabilidade capilar.");
            handleSnapPress(0);
          }} 
        />
        <TouchableCard
          title="Resposta Local"
          onPress={() => {
            setText("Pode ser dividida em três zonas. A zona de coagulação é o local de maior dano onde há perda tecidual irreversível. A zona de estase é a região ao redor da zona de coagulação, onde há redução da perfusão tecidual e inflamação, o estresse oxidativo dessa região pode levar a mecanismos de apoptose e necrose causando morte celular. A zona de hiperemia é a parte mais externa, onde há vasodilatação inflamatória, causando hiperemia com aumento de perfusão.");
            handleSnapPress(0);
          }} 
        />
        <TouchableCard
          title="Resposta Sistêmica"
          onPress={() => {
            setText("É uma fase de resposta inflamatória extrema e desregulada que é repetidamente ativada e que inicia poucas horas após a ocorrência da lesão, essa resposta é proporcional ao tamanho da lesão e é afetada por diversos fatores relacionados ao tipo de queimadura e fatores prévios. Em lesões extensas a liberação de mediadores inflamatórios leva a um aumento da permeabilidade vascular, que favorece o extravasamento de proteínas para o interstício resultando em menor pressão oncótica intracapilar, gerando edema. O mecanismo de formação do edema, a descontinuidade da pele e a colonização bacteriana podem acentuar a perda de líquidos do paciente agravando o seu estado de hipovolemia. Pode-se dividir essa resposta em duas fases a hipodinâmica e hiperdinâmica, associadas a diminuição e aumento do metabolismo, respectivamente.  A fase hipodinâmica acontece entre as primeiras 24h a 72h após lesão, caracterizado pelo aumento da permeabilidade vascular, perda do volume intravascular e formação de edema, sendo importante para a restauração e preservação da perfusão tecidual evitando o dano celular.  A fase hiperdinâmica acontece entre 48h a 72h após lesão, o organismo entra em uma fase em que tenta equilibrar os efeitos iniciais, possibilitando o aumento do fluxo periférico redistribuindo preferencialmente para as áreas queimadas. O estado hipermetabólico pode permanecer por meses dependendo da extensão da lesão.");
            handleSnapPress(0);
          }} 
        />
        <TouchableCard
          title="Impactos no Sistema Cardiovascular"
          onPress={() => {
            setText("Ocorre aumento da permeabilidade vascular que leva a hipotensão sistêmica e hipoperfusão de órgãos. Ocorre ainda um estresse cardíaco, com taquicardíaca, aumento do consumo de oxigênio pelo miocárdio e aumento do débito.");
            handleSnapPress(0);
          }} 
        />
        <TouchableCard
          title="Impactos no Sistema Renal"
          onPress={() => {
            setText("Pode acontecer uma insuficiência aguda em dois momentos, precocemente devido à disfunção dos múltiplos órgãos e a hipoperfusão renal, associada a alto nível de mortalidade, é importante a ressuscitação precoce e agressiva de fluidos. Tardiamente essa insuficiência pode ser relacionada sepse ou choque séptico.");
            handleSnapPress(0);
          }} 
        />
        <TouchableCard
          title="Impactos no Sistema Respiratório"
          onPress={() => {
            setText("Os danos podem acontecer por inalação de fumaça ou irritação química. Pode acontecer broncoespasmos, infecções pulmonares, falência respiratória, liberação de mediadores inflamatórios levando a formação de edema, podendo progredir para obstrução. É necessário se atentar a síndrome de desconforto respiratório; em crianças a falência respiratória é uma das principais manifestações na fase inicial da queimadura quando grave.");
            handleSnapPress(0);
          }} 
        />
        <TouchableCard
          title="Impactos no Sistema Gastrointestinal"
          onPress={() => {
            setText("O aumento da permeabilidade favorece a translocação bacteriana para a circulação sistêmica, aumentando o risco de infecções. Em queimaduras de região abdominal é preciso se atentar ao aumento da pressão intra abdominal e síndrome compartimental abdominal pela menor complacência dos tecidos.");
            handleSnapPress(0);
          }} 
        />
        <TouchableCard
          title="Impactos no Sistema Imunológico"
          onPress={() => {
            setText("Ocorre uma redução da resposta, que está relacionada com o aumento da resposta metabólica. Esse aumento metabólico leva a um dano muscular devido à grande queima de tecido muscular para a ocorrência da síntese de proteína.");
            handleSnapPress(0);
          }} 
        />
        <TouchableCard
          title="Impactos no Sistema Nervoso"
          onPress={() => {
            setText("Pode ocorrer agitação, confusão mental, com postura anormal ou ataxia, pelo aumento da pressão intracraniana e edema resultantes da hipóxia celular. Em casos mais graves o paciente ainda pode apresentar parestesia, hipoestesia, e dor crônica, devido a regeneração nervosa imperfeita.");
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
         <Text style={styles.contentText}>{text}</Text>
        </BottomSheetScrollView>
        
      </BottomSheet>
      </View>
      
      </ScrollView>
    
  );

  
}

const styles = StyleSheet.create({
  
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 300,
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
