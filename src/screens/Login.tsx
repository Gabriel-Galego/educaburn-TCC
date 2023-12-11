import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { VStack, Heading, Icon, useTheme, Text, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from "../routes/app.auth.routes";

import Envelope from "phosphor-react-native/src/icons/Envelope";
import Key from "phosphor-react-native/src/icons/Key";

import { Logo } from "../components/Logo";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  const handleNewAccount = () => {
    navigation.navigate("Cadastro");
  };

  const handleForgotPassword = () => {
    if (!email) {
      return showAlert(
        "Esqueci minha senha",
        "Informe o e-mail para continuar."
      );
    }

    setIsLoading(true);

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        showAlert(
          "Esqueci minha senha",
          "E-mail de recuperação de senha enviado com sucesso."
        );
      })
      .catch((error) => {
        console.log(error);

        if (error.code === "auth/invalid-email") {
          showAlert("Esqueci minha senha", "E-mail inválido.");
        } else if (error.code === "auth/user-not-found") {
          showAlert("Esqueci minha senha", "Usuário não cadastrado.");
        } else {
          showAlert(
            "Esqueci minha senha",
            "Ocorreu um erro ao enviar o e-mail."
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignIn = () => {
    if (!email || !password) {
      return showAlert("Entrar", "Informe e-mail e senha para continuar.");
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);

        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/invalid-login"
        ) {
          showAlert("Entrar", "E-mail ou senha inválida.");
        } else if (error.code === "auth/user-not-found") {
          showAlert("Entrar", "Usuário não cadastrado.");
        } else {
          showAlert("Entrar", "Ocorreu um erro ao fazer login.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} alignItems="center" px={8} pt={24}>
        <Logo />

        <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
          Acesse sua conta
        </Heading>

        <Input
          mb={4}
          placeholder="E-mail"
          onChangeText={setEmail}
          InputLeftElement={
            <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
          }
        />

        <Input
          mb={8}
          placeholder="Senha"
          secureTextEntry
          InputLeftElement={
            <Icon as={<Key color={colors.gray[300]} />} ml={4} />
          }
          onChangeText={setPassword}
        />

        <Button
          title="Acessar"
          w="full"
          onPress={handleSignIn}
          isLoading={isLoading}
        />

        <Text
          mt={4}
          color={"gray.100"}
          fontSize={"sm"}
          mb={3}
          fontFamily={"bold"}
        >
          Esqueceu sua senha?{" "}
          <Text
            color={"orange.700"}
            fontFamily={"bold"}
            fontSize={"sm"}
            onPress={handleForgotPassword}
          >
            Clique aqui.
          </Text>
        </Text>

        <Text
          color={"gray.100"}
          fontSize={"sm"}
          mb={3}
          fontFamily={"bold"}
          mt={24}
        >
          Ainda não tem Acesso?
        </Text>
        <Button
          title="Criar conta"
          w="full"
          variant={"outline"}
          onPress={handleNewAccount}
          mb={8}
        />
      </VStack>
    </ScrollView>
  );
}
