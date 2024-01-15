import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { AppRoutes } from "./app.routes";
import { AppAuthRoutes } from "./app.auth.routes";
import { Loading } from "../components/Loading";
import { Box } from "native-base";

export function Routes() {
  const [loading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response);
      setIsLoading(false);
    });

    return subscriber;
  }, []);

  return (
    <Box flex={1} bg={"white"}>
      <NavigationContainer>
        {loading ? <Loading /> : user ? <AppRoutes /> : <AppAuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
