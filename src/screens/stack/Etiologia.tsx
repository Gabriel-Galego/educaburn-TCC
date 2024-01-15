import { VStack, useTheme } from "native-base";
import { Header } from "../../components/Header";
import { TouchableCard } from "../../components/TouchableCard";
import { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export function Etiologia() {
  const [text, setText] = useState("");

  const sheetRef = useRef<BottomSheet>(null); 
  const snapPoints = useMemo(() => ["50%", "80%"], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);



  return (
      <VStack flex={1} bg="white" alignItems={"center"} >
        <Header title="Etiologia da queimadura" />
        <TouchableCard
          title="Queimadura Térmica"
          subtitle="Camada mais externa"
          color="#EB5656"
       
          onPress={() => {
            setText("Podem ser subdivididas em queimaduras por escaldos, labaredas e contato com objeto aquecido. Os sintomas de uma lesão térmica variam de acordo com a profundidade da lesão, assim como as repercussões sistêmicas são proporcionais a gravidade da lesão. As queimaduras térmicas são as mais prevalentes, sendo a escaldadura a mais comum.")
            handleSnapPress(0);
          }}
          
        />
        <TouchableCard
          title="Queimadura Elétrica"
          subtitle="Camada mais externa"
          color="#EB5656"
       
          onPress={() => {
            setText("Dependem, na maioria dos casos, da passagem de corrente elétrica pelo corpo lesando todos os tecidos que percorre entre o ponto de entrada e o ponto de saída. Ocorre com voltagem superior a 1.000 volts, sendo praticamente fatal com 70.000 volts. - Baixa voltagem: causa pequenas e profundas lesões, principalmente nos locais de entrada e saída, podendo interferir no funcionamento correto do coração, necessitando de monitoramento cardíaco.  - Alta voltagem: causa injúria pela passagem da corrente pelo organismo, causando danos em uma grande extensão do tecido, bem como necrose de tecido mole e ósseo e dano cardíaco. O grande dano ao tecido muscular pode causar rabdomiólise, ocasionando insuficiência renal, o que requer uma ressuscitação volêmica e desbridamento maior que em outros casos. É preciso dobrar a meta de reanimação volêmica com relação a outros tipos de queimaduras para garantir a eliminação esperada de mioglobina. O gerenciamento adequado de fluídos é essencial para evitar complicações tanto com a sub quanto com a super reanimação volêmica.  O sequestro de fluídos para tecidos musculares danificados pode levar a elevação de pressão de compartimentos, comprometendo a perfusão por restrição ao fluxo venoso, a perda de pulso arterial e compartimentos com distensibilidade máxima (30mmhg) indicam a necessidade de escarotomias ou fasciotomias, a descompressão precoce do membro é indicada evitando maiores complicações devido ao dano neurovascular. - Em alguns casos a queimadura pode acontecer devido a uma alta zona de energia que pode acontecer ao redor da fonte de energia, e lesar camadas superficiais, pelo calor irradiado e não pela passagem elétrica.")
            handleSnapPress(0);
          }}
          
        />
        <TouchableCard
          title="Queimadura Química"
          subtitle="Camada mais externa"
          color="#EB5656"
       
          onPress={() => {
            setText("O quadro clínico depende do agente químico envolvido: ácido, base ou composto orgânico. O dano tecidual acontece até que haja a neutralização do agente envolvido.  Substâncias químicas tem alta capacidade de absorção cutânea, podendo ter acometimentos sistêmicos e potenciais complicações. Queimaduras por gentes básicos causam maior dano tecidual quando comparados com agentes ácidos ou térmicos.")
            handleSnapPress(0);
          }}
          
        />
        <TouchableCard
          title="Queimadura por Inalação"
          subtitle="Camada mais externa"
          color="#EB5656"
       
          onPress={() => {
            setText("Podem ser divididas em três tipos: alterações metabólicas, lesões de vias aéreas superiores e lesões de vias aéreas inferiores. Podem ocorrer de maneira simultânea ou isolada. O diagnóstico deve levar em consideração o histórico da lesão e sinais como: diminuição do nível de consciência, presença de fuligem na cavidade oral ou faringe, queimaduras faciais e sinais de desconforto respiratório. Essas manifestações podem não aparecer ou ser sútil nas primeiras 24-48h, por isso o monitoramento é essencial. O manejo dessas queimaduras se baseia na manutenção da via aérea de acordo com a gravidade do caso. Alterações metabólicas - Intoxicação por monóxido de carbono (CO): é um gás asfixiante que impede a utilização de oxigênio pelo organismo tendo maior afinidade com a hemoglobina que o oxigênio. É produzido pela combustão incompleta de hidrocarbonetos, não tem cor e cheiro, e não é irritante. A intoxicação acontece pela alta inalação do gás em ambientes fechados, é diagnosticada por meio do histórico de exposição e dosagem de carboxihemoglobina (cima de 30% é grave). Os sintomas de intoxicação são cefaleia, náusea, confusão mental e coma, podendo levar a morte. Deve ser tratada com suplementação de oxigênio em altas concentrações. - Intoxicação por cianeto: ocorrem quando há incêndio em locais fechados que contém produtos sintéticos.  As manifestações clínicas são resultado do bloqueio da respiração aeróbica celular, tem um curso de apresentação inespecífico e evolução rápida e, muitas vezes é fatal. O tratamento preconizado pelo Ministério da saúde é a hidroxicobalamina, que se liga ao cianeto no organismo e é eliminado pela urina. Queimaduras de vias superiores São relacionadas principalmente a obstrução da via, seja por partículas ou por edema. Os principais sinais e sintomas são: tosse, rouquidão, dispneia, lacrimejamento, escarro com fuligem, hiperemia conjuntival, desconforto respiratório, sibilos entre outros. Tem como fatores de risco queimaduras de face, cavidade oral e nasal e acidentes em incêndios de locais fechados. Queimaduras de vias inferiores Se dá pelo desenvolvimento do processo inflamatório. Principais sinais e sintomas: dispneia, taquipneia, uso de musculatura acessória, roncos, sibilos, cianose de extremidades, queda no nível de consciência, entre outros.")
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