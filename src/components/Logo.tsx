import { Text, useTheme } from "native-base";
import Fire from "phosphor-react-native/src/icons/Fire";
export function Logo() {
  const { colors }: any = useTheme();
  return (
    <>
      <Fire size={118} color={colors.orange[400]} />
      <Text
        fontSize={48}
        fontFamily={"logo"}
        style={{
          textAlign: "center",
          color: "#830505",
          textShadowColor: "#E0C432C7",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
        }}
      >
        EducaBurn
      </Text>
    </>
  );
}
