import { Heading, Icon, Text, useTheme } from "native-base";
import Flame from "phosphor-react-native/src/icons/Flame";
export function Logo() {
  return (
    <>
      <Icon as={<Flame color="red" size={96} />} color="red" />
      <Heading color="primary.700">
        Educa<Text color="orange.700">Burn</Text>
      </Heading>
    </>
  );
}
