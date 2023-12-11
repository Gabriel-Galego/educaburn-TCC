import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from "react-native";

import { THEME } from "../styles/theme";

type Props = TouchableOpacityProps & {
  title: string;
};

export function OutlineButton({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
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
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: THEME.colors.BRAND_MID,
    marginRight: 16,
  },
  title: {
    color: THEME.colors.BRAND_MID,
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
});
