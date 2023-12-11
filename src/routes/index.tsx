import { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { AppRoutes } from "./app.routes";
import { AppAuthRoutes } from "./app.auth.routes";
import { Loading } from "../components/Loading";
import { useTheme, Box } from "native-base";

export function Routes() {
  const [loading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  const { colors } = useTheme();
  const theme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, background: colors.white },
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response);
      setIsLoading(false);
    });

    return subscriber;
  }, []);

  return (
    <Box flex={1} bg={"white"}>
      <NavigationContainer theme={theme}>
        {loading ? <Loading /> : user ? <AppRoutes /> : <AppAuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
