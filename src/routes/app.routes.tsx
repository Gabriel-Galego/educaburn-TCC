import React from "react";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { Contatos } from "../screens/Contatos";
import { Preferencias } from "../screens/Preferencias";
import { Informacoes } from "../screens/Informacoes";
import { Inicio } from "../screens/Inicio";
import { EstruturaDaPele } from "../screens/stack/EstruturaDaPele";
import { Fisiopatologia } from "../screens/stack/Fisiopatologia";
import { Classificacao } from "../screens/stack/Classificacao";
import { Etiologia } from "../screens/stack/Etiologia";
import { Profundidade } from "../screens/stack/Profundidade";
import { Calculo } from "../screens/stack/Calculo";
import { Manejo } from "../screens/stack/Manejo";
import { Atendimento } from "../screens/stack/Atendimento";
import { Tratamento } from "../screens/stack/Tratamento";
import { Criterios } from "../screens/stack/Criterios";
import { ManejoFerida } from "../screens/stack/ManejoFerida";

import AddressBook from "phosphor-react-native/src/bold/AddressBook";
import Gear from "phosphor-react-native/src/bold/Gear";
import Info from "phosphor-react-native/src/bold/Info";
import House from "phosphor-react-native/src/bold/House";
import { useTheme } from "native-base";

export type AppRoutes = {
  Informacoes: undefined;
  Contatos: undefined;
  Preferencias: undefined;
  Inicio: undefined;
};

export type AppNavigatorRoutes = {
  Inicial: undefined;
  EstruturaDaPele: undefined;
  Fisiopatologia: undefined;
  Classificacao: undefined;
  Etiologia: undefined;
  Profundidade: undefined;
  Calculo: undefined;
  Manejo: undefined;
  Atendimento: undefined;
  Tratamento: undefined;
  Criterios: undefined;
  ManejoFerida: undefined;
};

export type AppRoutesStackProps = NativeStackScreenProps<AppNavigatorRoutes>;
export type AppNavigatorRoutesProps = BottomTabScreenProps<AppRoutes>;

const Stack = createNativeStackNavigator<AppNavigatorRoutes>();
const BottomTab = createBottomTabNavigator<AppRoutes>();

const tabBarColors = {
  backgroundColor: "black",
  borderColor: "",
};

function AppNavigatorStack() {
  return (
    <Stack.Navigator
      initialRouteName="Inicial"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Inicial" component={Inicio} />
      <Stack.Screen name="EstruturaDaPele" component={EstruturaDaPele} />
      <Stack.Screen name="Fisiopatologia" component={Fisiopatologia} />
      <Stack.Screen name="Classificacao" component={Classificacao} />
      <Stack.Screen name="Etiologia" component={Etiologia} />
      <Stack.Screen name="Profundidade" component={Profundidade} />
      <Stack.Screen name="Calculo" component={Calculo} />
      <Stack.Screen name="Manejo" component={Manejo} />
      <Stack.Screen name="Atendimento" component={Atendimento} />
      <Stack.Screen name="Tratamento" component={Tratamento} />
      <Stack.Screen name="Criterios" component={Criterios} />
      <Stack.Screen name="ManejoFerida" component={ManejoFerida} />
    </Stack.Navigator>
  );
}

export function AppRoutes() {
  const { colors }: any = useTheme();
  return (
    <BottomTab.Navigator
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
          backgroundColor: "#E6E6E6",
        },
        tabBarActiveTintColor: colors.orange[400],
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontFamily: "Roboto_700Bold",
          fontSize: 12,
          
      
        }
      }}
    >
      <BottomTab.Screen
        name="Inicio"
        component={AppNavigatorStack}
        options={{
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Contatos"
        component={Contatos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AddressBook color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Informacoes"
        component={Informacoes}
        options={{
          tabBarIcon: ({ color, size }) => <Info color={color} size={size} />,
        }}
      />
      <BottomTab.Screen
        name="Preferencias"
        component={Preferencias}
        options={{
          tabBarIcon: ({ color, size }) => <Gear color={color} size={size} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
