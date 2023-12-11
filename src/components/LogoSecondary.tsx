import { Heading, Icon, Text, View, useTheme } from "native-base";
import Flame from "phosphor-react-native/src/icons/Flame";
export function LogoSecondary() {
  return (
    <View justifyContent="flex-start" flexDirection="row">
      <Icon as={<Flame color="red" size={36} />} color="red" />
      <Heading color="primary.700" alignSelf="center">
        Educa
        <Text color="orange.700">Burn</Text>
      </Heading>
    </View>
  );
}
