import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";

type AuthRoutes = {
  Login: undefined;
  Cadastro: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

interface AppAuthRoutesProps {}

export function AppAuthRoutes<AppAuthRoutesProps>() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro" component={Cadastro} />
    </Navigator>
  );
}
