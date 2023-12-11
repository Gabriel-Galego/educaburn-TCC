import { HStack, Heading, IconButton, Text, useTheme } from "native-base";
import { LogoSecondary } from "./LogoSecondary";
import Backspace from "phosphor-react-native/src/bold/Backspace";
import { Alert, Image } from "react-native";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import storage from "@react-native-firebase/storage";

export function Header() {
  const { colors } = useTheme();
  const [user, setUser] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const userEmail = auth().currentUser?.email;

    if (userEmail) {
      firestore()
        .collection("Usuarios")
        .doc(userEmail)
        .onSnapshot((documentSnapshot) => {
          setUser(documentSnapshot.data()?.nome);
        });
    }

    storage()
      .ref("profile_images/" + userEmail + "/profile.jpg")
      .getDownloadURL()
      .then((url) => {
        setProfileImage(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleGoBack() {
    {
      /*
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert("Alerta", "Você já está na tela inicial.");

    }
  */
    }

    auth()
      .signOut()
      .then(() => {
        console.log("User signed out!");
      });
  }

  return (
    <HStack
      w="full"
      alignItems="center"
      bg="GRAY_LIGHT"
      justifyContent="space-between"
      pt={12}
      pb={5}
      px={6}
    >
      <IconButton
        icon={<Backspace size={26} color={colors.black} />}
        onPress={handleGoBack}
      />
      <Heading>Olá {user}!</Heading>
      {profileImage && (
        <Image
          source={{ uri: profileImage }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginBottom: 10,
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
  );
}
