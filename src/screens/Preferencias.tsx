import React from "react";
import { View, StyleSheet } from "react-native";
import { ProfileImageUpload } from "../components/ProfileImageUpload";

export function Preferencias() {
  return (
    <View style={styles.container}>
      <ProfileImageUpload />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
