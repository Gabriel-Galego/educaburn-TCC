import "react-native-gesture-handler"

import { NativeBaseProvider, StatusBar } from "native-base";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Mirza_400Regular, Mirza_700Bold } from "@expo-google-fonts/mirza";
import { useFonts } from "expo-font";

import { THEME } from "./src/styles/theme";

import { Loading } from "./src/components/Loading";

import { Routes } from "./src/routes/index";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Mirza_400Regular,
    Mirza_700Bold,
  });

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider theme={THEME}>
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle={"dark-content"}
          />

          {fontsLoaded ? <Routes /> : <Loading />}
        </NativeBaseProvider>
      </GestureHandlerRootView>
  );
}
