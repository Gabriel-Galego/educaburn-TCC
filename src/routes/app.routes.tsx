import React from "react";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

import { Inicio } from "../screens/Inicio";
import { Preferencias } from "../screens/Preferencias";
import { Testes } from "../screens/Testes";

import AddressBook from "phosphor-react-native/src/bold/AddressBook";
import Gear from "phosphor-react-native/src/bold/Gear";
import Info from "phosphor-react-native/src/bold/Info";

type AppRoutes = {
  Testes: undefined;
  Inicio: undefined;
  Preferencias: undefined;
};

export type AppNavigatorRoutesProps = BottomTabScreenProps<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

const tabBarColors = {
  activeTintColor: "#996DFF",
  backgroundColor: "black",
  borderColor: "",
};

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomWidth: 0,
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          position: "absolute",
          ...tabBarColors,
        },
        tabBarLabelStyle: {
          fontFamily: "Inter_400Regular",
          fontSize: 12,
        },
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AddressBook color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Testes"
        component={Testes}
        options={{
          tabBarIcon: ({ color, size }) => <Info color={color} size={size} />,
        }}
      />
      <Screen
        name="Preferencias"
        component={Preferencias}
        options={{
          tabBarIcon: ({ color, size }) => <Gear color={color} size={size} />,
        }}
      />
    </Navigator>
  );
}
