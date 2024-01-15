import { HStack, Heading, IconButton, useTheme } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

export function Header(props: { title: string; width?: string }) {
  const { colors }: any = useTheme();
  const { fonts }: any = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack
      w="full"
      bg="white"
      pb={10}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={4}
      pt={10}
    >
      <IconButton
        icon={<Icon2 name="chevron-back" size={32} color="#333333" />}
        onPress={handleGoBack}
        alignSelf="flex-start"
      />
      <Heading
        style={{
          fontFamily: fonts.heading,
          fontSize: 24,
          color: "#333333",
          textAlign: "left",
          flexWrap: "wrap",
          width: "80%",
          alignSelf: "center",
          lineHeight: 35,
        }}
      >
        {props.title}
      </Heading>
    </HStack>
  );
}
