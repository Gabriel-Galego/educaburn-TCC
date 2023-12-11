import { Check } from "phosphor-react-native";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

import { THEME } from "../styles/theme";

export function ConfirmButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <Text style={styles.title}>Confirmar</Text>

      <Check color={THEME.colors.white} weight="bold" size={24} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.colors.BRAND_MID,
    flexDirection: "row",
    overflow: "hidden",
  },
  title: {
    color: THEME.colors.white,
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
    marginRight: 7,
  },
});
