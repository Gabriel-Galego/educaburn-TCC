import { Modal, ScrollView, VStack, useTheme } from "native-base";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../../components/Card";
import { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {  StyleSheet, Text } from "react-native";
import { TouchableCard } from "../../components/TouchableCard";
import Icon from "react-native-vector-icons/FontAwesome5";

export function ManejoFerida() {
  const { colors }: any = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["50%", "80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (

      <VStack flex={1} bg={"white"} alignItems={"center"} >
        <Header title="Manejo Inicial da ferida" />

        <TouchableCard
          title="Entenda"
          onPress={() => {
            setText("Inicialmente é necessário limpeza local com água corrente ou solução fisiológica aquecida, com o intuito de remover sujidades e tecido desvitalizado soltos do leito da ferida.")
            setText2("É necessário o uso de materiais macios para realizar a limpeza, gaze ou esponjas macias evitando prejuízo aos tecidos viáveis – tecido de granulação ou já epitalizado. O uso de esponjas grosseiras torna a ferida mais suscetível a infecção.");
            setText3("Em casos de grandes lesões é necessário analgesia efetiva.");
            setText4("");
            setText5("");
            setText6("");
            setText7("");
            setText8("");
            setText9("");
            handleSnapPress(0);
          }}
          
        />
        <TouchableCard
          title="Tipos de curativos"
          onPress={() => {
            setText("1. Curativo aberto: é caracterizado por uma cobertura primária colocada diretamente na lesão, ou apenas aplicação de agente tópico.")
            setText2("É mais utilizado em queimaduras de 1º grau.")
            setText3("Vantagens: permite visualização da área queimada, baixo custo e facilidade de aplicação, afeta pouco a mobilidade articular.")
            setText4("Desvantagem: risco de hipotermia, principalmente em grandes queimados, o que requer maior cuidado com a temperatura do ambiente.")
            setText5("2. Curativo oclusivo: são caracterizados por uma cobertura primária, que fica em contato direto com o leito da ferida, seguido por uma segunda cobertura.")
            setText6("A indicação do curativo é baseada na profundidade da lesão, quantidade de exsudato, localização, agente causador, impacto funcional na mobilidade, custo, conforto e dor do paciente.")
            setText7("Vantagens: diminuição da perda de fluído e perda de calor para o meio externo, ajuda no desbridamento, absorção de exsudato.")
            setText8("Desvantagem: redução da mobilidade articular - em dedos e pés deve-se manter os dedos separados por gazes, limita o acesso a ferida permitindo avaliar a ferida apenas no momento de troca de curativo.")
            setText9("3. Películas de proteção: devem ser colocados após o controle bacteriano e remoção do tecido necrótico. O propósito é criar um microclima que estimula a epitelização e não é retirada até que a lesão esteja totalmente epitelizada.")
            handleSnapPress(0);
          }}
          icon={
            <Icon
              name="briefcase-medical"
              size={36}
              color={colors.orange[400]}
            />
          }
        />
        <TouchableCard
          title="Agentes tópicos"
          onPress={() => {
            setText("Tem como objetivo controlar o crescimento bacteriano, remover o tecido desvitalizado e estimular o crescimento de queratinócitos ou auxiliar o preparo de lesões de espessura profunda para o autoenxerto.")
            setText2("Sulfadiazina de prata 1%: Eficaz no controle de infecção local, possui ação contra bactérias gram-negativas, gram-positivas e fungo Candida Albicans. Pode ser encontrada de forma isolada ou associada a lidocaína e vitamina A, auxiliando no alívio da dor e na epitelização. Pode ser aplicada e mantida em curativo aberto ou oclusivo com troca a cada 24h ou quando necessário a depender do grau de exsudação. Deve ser usada apenas nos primeiros dias de tratamento, enquanto ainda tiver tecido necrótico ou infecção. O uso prolongado é prejudicial a cicatrização.")
            setText3("Colagenase: Proteinase indicada para o desbridamento do tecido necrótico de queimaduras profundas, atua sem afetar o tecido de granulação. Deve ser aplicada na área lesionada e coberta com gaze úmida com água destilada ou soro fisiológico 0,9% para ativar a enzima. O curativo deve ser ocluído e trocado a cada 24h, não deve ser associado a metais pesados como mercúrio e prata, pois inativa a enzima.")
            setText4("Ácidos graxos essenciais (AGE) ou óleo vegetal: São utilizados em um estágio avançado de restauração da lesão, visando estimular a epitelização, ou em casos de queimadura de 1º grau para hidratar a área queimada.")
            setText5("");
            setText6("");
            setText7("");
            setText8("");
            setText9("");
            handleSnapPress(0);
          }}
          icon={
            <Icon
              name="briefcase-medical"
              size={36}
              color={colors.orange[400]}
            />
          }
        />
        <TouchableCard
          title="Protocolo de atendimento local"
          onPress={() => {
            setText("Sulfadiazina de prata 1% nas primeiras 48-72h para evitar infecção - tópico desbridante para remoção de tecido necrosado (quando necessário) - tópico estimulante de cicatrização.")
            setText2("Em casos de queimaduras com flictenas (bolhas) manter intactas as <6mm sem tensão, realizar desbridamento das >6mm com material estéril e aplicar antimicrobiano tópico. Manter curativo ocluído para evitar contaminação.")
            setText3("Os profissionais de saúde podem lançar mão de outras coberturas para o curativo desde que sejam recomendados para o tipo de lesão.")
            setText4("");
            setText5("");
            setText6("");
            setText7("");
            setText8("");
            setText9("");
            handleSnapPress(0);
          }}
          icon={
            <Icon
              name="briefcase-medical"
              size={36}
              color={colors.orange[400]}
            />
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
         {text && <Text style={styles.contentText}>{text}</Text>}
         {text2 && <Text></Text>}
         {text2 && <Text style={styles.contentText}>{text2}</Text>}
         {text3 && <Text></Text>}
         {text3 && <Text style={styles.contentText}>{text3}</Text>}
         {text4 && <Text></Text>}
         {text4 && <Text style={styles.contentText}>{text4}</Text>}
         {text5 && <Text></Text>}
         {text5 && <Text style={styles.contentText}>{text5}</Text>}
         {text6 && <Text></Text>}
         {text6 && <Text style={styles.contentText}>{text6}</Text>}
         {text7 && <Text></Text>}
         {text7 && <Text style={styles.contentText}>{text7}</Text>}
         {text8 && <Text></Text>}
         {text8 && <Text style={styles.contentText}>{text8}</Text>}
         {text9 && <Text></Text>}
         {text9 && <Text style={styles.contentText}>{text9}</Text>}
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