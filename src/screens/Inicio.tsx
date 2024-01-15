import { HStack, Heading, IconButton, Text, VStack, useTheme } from "native-base";
import { TouchableCard } from "../components/TouchableCard";

import TreeStructure from "phosphor-react-native/src/fill/TreeStructure";
import Fire from "phosphor-react-native/src/fill/Fire";
import Folders from "phosphor-react-native/src/fill/Folders";
import Warning from "phosphor-react-native/src/fill/Warning";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Flame from "phosphor-react-native/src/icons/Flame";
import React, { useState, useEffect } from "react";
import { Alert, Image } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import Icon from "react-native-vector-icons/FontAwesome5";


export function Inicio() {
  const { colors } = useTheme();
  const navigation: any = useNavigation();
  const [user, setUser] = useState("");
  const nome = user.split(" ");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    fetchProfileData(); // Chama a função ao carregar a tela
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchProfileData(); // Chama a função ao focar na tela
    }, [])
  );

  const fetchProfileData = async () => {
    const userEmail = auth().currentUser?.email;

    if (userEmail) {
      firestore()
        .collection("Usuarios")
        .doc(userEmail)
        .onSnapshot((documentSnapshot) => {
          setUser(documentSnapshot.data()?.nome);
        });
    }

    try {
      const url = await storage()
        .ref("profile_images/" + userEmail + "/profile.jpg")
        .getDownloadURL();
      setProfileImage(url);
    } catch (error) {
      setProfileImage(null);
    }
  };

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
      <VStack flex={1} pb={6} bg="white" alignItems={"center"}>
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
      <Heading>Olá {nome[0]}!</Heading>
      {profileImage && (
        <Image
          key={profileImage}
          source={{ uri: profileImage }}
          onLoad={() => {}}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            borderWidth: 1,
          }}
        />
      )}
      {!profileImage && (
        <Image
          source={require("../assets/pngwing.png")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginBottom: 10,
            borderWidth: 1,
          }}
        />
      )}
    </HStack>
        <Flame size={118} color={colors.orange[400]} style={{
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
          icon={<Fire size={36} color={colors.orange[400]} weight="fill" />}
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
  );
}