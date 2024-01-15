import { HStack, Heading, IconButton, Text, VStack, useTheme } from "native-base";
import { TouchableCard } from "../components/TouchableCard";

import TreeStructure from "phosphor-react-native/src/fill/TreeStructure";
import Fire from "phosphor-react-native/src/fill/Fire";
import Folders from "phosphor-react-native/src/fill/Folders";
import Warning from "phosphor-react-native/src/fill/Warning";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Flame from "phosphor-react-native/src/icons/Flame";
import React, { useState, useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Loading } from "../components/Loading";


export function Inicio() {
  const { colors } = useTheme();
  const navigation: any = useNavigation();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchUserName = async () => {
        try {
          const userEmail = auth().currentUser?.email;

          if (userEmail) {
            const documentSnapshot = await firestore()
              .collection("Usuarios")
              .doc(userEmail)
              .get();

            if (documentSnapshot.exists) {
              const userName = documentSnapshot.data()?.nome || "Nome não encontrado";
              setUser(userName);
            }
          }
        } catch (error) {
          console.error("Erro ao buscar dados do Firestore:", error);
        } finally {
          setLoading(false); // Marca o carregamento como concluído, independentemente do resultado
        }
      };

      fetchUserName();
    }, [])
  );

  function handleSignOut() {
    Alert.alert("Sair", "Deseja sair do aplicativo?", [
      {
        text: "Não",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          auth().signOut();
        },
      },
    ]);
  }
  
  return (
  loading ? <Loading /> :
    <ScrollView  style={{
      backgroundColor: "white",
    }}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
    >
      <VStack bg="white" alignItems={"center"} mb={10}>
      <HStack
        w="full"
        alignItems="center"
        bg={colors.white}
        justifyContent="space-between"
        px={4}
        marginTop={10}

      >
      <IconButton
        icon={<Icon name="sign-out-alt" size={26} color={colors.black} />}
        onPress={handleSignOut}
      />
      <Heading>Olá {loading ? "Carregando..." : user.split(" ")[0]}!</Heading>
    </HStack>
        <Fire size={118} color={colors.orange[400]} style={{
          marginTop: 10,
          marginBottom: 50,
        
        }} />
        <TouchableCard
          title="Estrutura da pele"
          subtitle="Epiderme, derme e hipoderme"
          onPress={() => {
            navigation.navigate("EstruturaDaPele");
          }}
          icon={
            <TreeStructure size={36} color={colors.orange[400]} weight="fill" />
          }
          iconRight="direita"
        />
        <TouchableCard
          title="Fisiopatologia da queimadura"
          onPress={() => {
            navigation.navigate("Fisiopatologia");
          }}
          icon={<Flame size={36} color={colors.orange[400]} weight="fill" />}
          iconRight="direita"
        />
        <TouchableCard
          title="Classificação das queimaduras"
          subtitle="Etiologia, profundidade e SCQ"
          onPress={() => {
            navigation.navigate("Classificacao");
          }}
          icon={<Folders size={36} color={colors.orange[400]} weight="fill" />}
          iconRight="direita"
        />
        <TouchableCard
          title="Manejo inicial da queimadura"
          onPress={() => {
            navigation.navigate("Manejo");
          }}
          icon={<Warning size={36} color={colors.orange[400]} weight="fill" />}
          iconRight="direita"
        />
        <TouchableCard
          title="Manejo inicial da ferida"
          onPress={() => {
            navigation.navigate("ManejoFerida");
          }}
          icon={<Warning size={36} color={colors.orange[400]} weight="fill" />}
          iconRight="direita"
        />
        
      </VStack>
    </ScrollView>
  );
}