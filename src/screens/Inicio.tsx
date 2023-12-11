import { Text, VStack, useTheme } from "native-base";

import { Header } from "../components/Header";

export function Inicio() {
  const { colors } = useTheme();
  return (
    <VStack flex={1} pb={6} bg="white">
      <Header />
      <Text color="black" fontSize="xl" px={6} mb={4}>
        Sobre o EducaBurn, o que é?
      </Text>
    </VStack>
  );
}
