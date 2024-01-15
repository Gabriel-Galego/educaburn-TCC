import { VStack } from "native-base";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export function Criterios() {
  return (

      <VStack flex={1} pb={6} bg="white" alignItems={"center"} >
        <Header
          title="Critérios para internação ou transferência"
          width="90%"
        />

        <Card
          text="• Queimaduras de 2º grau em áreas de superfície corpórea maiores que 10% em crianças e 20% em adultos;"
          text2="• Extremos de idade (maior risco de instabilidade);"
          text3="• Queimaduras de 3º grau em qualquer extensão;"
          text4="• Queimaduras elétricas;"
          text5="• Queimaduras químicas;"
          text6="• Lesões na face, nos olhos, no períneo, nas mãos, nos pés e em grandes articulações;"
          text7="• Lesões inalatórias;"
          text8="• Síndromes compartimentais;"
          text9="• Presença de comorbidades;"
          text10="• Tentativas de autoextermínio;"
          text11="• Politrauma;"
          text12="• Maus tratos;"
        />
      </VStack>
  );
}
