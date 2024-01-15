import { Text, VStack, useTheme } from "native-base";
import { TouchableCard } from "../../components/TouchableCard";
import { Card } from "../../components/Card";

import { Header } from "../../components/Header";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState, useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { ScrollView, StyleSheet } from "react-native";

export function Atendimento() {
  const { colors }: any = useTheme();
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");

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
      <VStack bg="white" alignItems={"center"} mb={10} >
        <Header title="Atendimento pré-hospitalar" />

        <Card text="O paciente queimado deve ser considerado um politraumatizado até que se prove o contrário- em acidentes graves pode haver lesões internas associadas a maior gravidade. Dessa forma também se utiliza do método de avaliação ABCDE." />
        <TouchableCard
          title="Vias aéreas e estabilização da coluna cervical"
          color="#E1D144"
          onPress={() => {
            setText("Desobstrução de vias aéreas: A obstrução das vias aéreas pode ocorrer por lesão direta, corpo estranho; vômito; sangue; lesão por inalação ou edema resultante da queimadura, este associado a reação inflamatória do processo térmico. Esse edema pode acontecer de maneira tardia, por isso a vigilância clínica é essencial.")
            setText2("Fatores de risco para obstrução de vias aéreas: queimaduras extensas e profundas; queimaduras de cabeça e face; queimadura de cavidade oral; lesão por inalação; trauma associado; queimadura em crianças.")
            setText3("Indicação de intubação orotraqueal precoce: sinais de obstrução de vias aéreas mesmo após abordagem inicial; queimaduras extensas com SCQ>40-50%; queimaduras faciais profundas; queimaduras circunferenciais graves no pescoço; queimadura de cavidade oral; edema significativos ou iminente; dificuldade de deglutição; sinais de comprometimento respiratório; baixo nível de consciência (Glasgow <8). As indicações devem ser avaliadas de maneira individual.")
            setText4("A estabilização da coluna cervical deve ser feita quando há possibilidade de traumatismos cervicais associado a queimadura. Ex: acidentes com explosões, lesões por desaceleração, quedas, acidentes automobilísticos.")
            setText5("");
            setText6("");
            setText7("");
            setText8("");
            handleSnapPress(0);
          }}
          
          icon={
            <Icon
              name="alpha-a-circle-outline"
              size={36}
              color={colors.orange[400]}
            />
          }
        />
        <TouchableCard
          title="Respiração e ventilação"
          color="#7DCD58"
          onPress={() => {
            setText("Quando necessário deve ser fornecido alto fluxo de oxigênio através de máscara não reinalante (10-15 l/min), visando saturação de O2 entre 94-98%.")
            setText2("Pacientes vítimas de queimaduras em ambientes fechados devem receber O2 100% em máscara não reinalante e o monitoramento neurológico deve ser feito como rotina. No caso de intoxicação por monóxido de carbono a oxigenação diminui o tempo de meia vida da associação no monóxido de carbono com a hemoglobina de 4h em ar ambiente para 40min.")
            setText3("Em casos de queimaduras torácicas circunferenciais graves é necessário fazer escarotomias para aumentar expansão torácica (raramente é necessário em ambiente pré-hospitalar).")
            setText4("");
            setText5("");
            setText6("");
            setText7("");
            setText8("");
            handleSnapPress(0);
          }}
          icon={
            <Icon
              name="alpha-b-circle-outline"
              size={36}
              color={colors.orange[400]}
            />
          }
        />
        <TouchableCard
          title="Circulação e reposição de fluidos"
          color="#8656C3"
          onPress={() => {
            setText("O comprometimento hemodinâmico do paciente grande queimado se dá pela perda constante de fluídos capilares, que se deve a inflamação e aumento da permeabilidade vascular, esse é um processo lento e gradual. Por isso, o choque nas queimaduras é geralmente relacionado ao atraso da hidratação ou infusão de volume menor que o necessário. A reposição de fluídos é recomendada na presença ou não de sinais de hipovolemia/hipotensão, em queimaduras de 2º e 3º graus, principalmente em grandes queimados (SCQ >20% em adultos e >10% em crianças).")
            setText2("É preciso obter dois acessos venosos periféricos calibrosos na pele íntegra, caso não haja pele integra é possível obter o acesso venoso na pele queimada, mas é preciso monitoramento devido ao risco de desalojamento resultante do edema. Ao não conseguir acesso periférico, é necessário acesso central ou punção intraóssea.")
            setText3("A infusão de fluídos deve ser feita com solução cristaloide aquecida, preferencialmente Ringer Lactato, podendo ser utilizada Soro Fisiológico. Não administrar fluídos em bolus para evitar a hiper-hidratação e aumento do edema.")
            setText4("O guideline da International Society for burn injury (ISBI) sugere a adminstração de solução de Ringer Lactato de 2 - 4 ml/kg/ % de SCQ, nas primeiras 24h com débito urinário de 0,3 a 0,5 ml/kg/h em adultos e 1ml/kg/h em crianças. A American Burn Association (ABA) recomenda uma reposição de fluídos mais detalhada.")
            setText5("A reposição volêmica deve ser feita de maneira cuidadosa, pois assim como a baixa ressuscitação volêmica é prejudicial ao paciente o excesso de fluídos pode aumentar o edema e levar a complicações.")
            setText6("É preciso monitorar o débito urinário por meio da inserção de cateter vesical em pacientes grandes queimados.")
            setText7("A pressão arterial pode ser difícil de ser monitorada e geralmente não é confiável.")
            setText8("É preciso ficar atento a lesões circunferenciais, pois podem reduzir a perfusão distal no membro, mesmo com pressão arterial normal. Necessitando a realização e escarotomias.")
            handleSnapPress(0);
          }}
          icon={
            <Icon
              name="alpha-c-circle-outline"
              size={36}
              color={colors.orange[400]}
            />
          }
        />
        <TouchableCard
          title="Disfunção neurológica"
          color="#C64E4E"
          onPress={() => {
            setText("Deve ser avaliação com aplicação da escala de coma de Glasgow. Ficar atento com alterações de nível de consciência em acidentes com risco de inalação de fumaça, traumatismo cranioencefálico e uso de álcool de drogas.")
            setText2("");
            setText3("");
            setText4("");
            setText5("");
            setText6("");
            setText7("");
            setText8("");
            handleSnapPress(0);
          }}
          icon={
            <Icon
              name="alpha-d-circle-outline"
              size={36}
              color={colors.orange[400]}
            />
          }
        />
        <TouchableCard
          title="Exposição e controle de hipotermia"
          color="#C156C3"
          onPress={() => {
            setText("O paciente deve ser todo exposto, afastando a possibilidade de alguma parte da roupa prolongar o processo de queimadura - retirar todos os acessórios (inclusive lente de contato), pois podem restringir a circulação.")
            setText2("Se possível realizar o resfriamento das lesões com água corrente por 20 minutos. O resfriamento interrompe o processo de queimadura e previne complicações e pode ser iniciado até 3 horas após o início da lesão.")
            setText3("Se houver roupa aderida a pele, esta não deve ser retirada no atendimento imediato, deve ser feita a retirada em ambiente controlado sob o efeito de analgésicos. Durante a exposição deve ser feita o cálculo da SCQ e verificação de lesões associadas.")
            setText4("Controle de hipotermia é essencial, pois o paciente perde a capacidade de termorregulação - ambiente aquecido, cobertores limpos- pacientes pediátricos e idosos são ainda mais sensíveis e demandam maior cuidado.")
            setText5("");
            setText6("");
            setText7("");
            setText8("");
            handleSnapPress(0);
          }}
          icon={
            <Icon
              name="alpha-e-circle-outline"
              size={36}
              color={colors.orange[400]}
            />
          }
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
      </BottomSheetScrollView>
    </BottomSheet>
  </>  
  );
}


const styles = StyleSheet.create({
  
  contentContainer: {
  
    backgroundColor: 'white',
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
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
    left: 0,
  },

});