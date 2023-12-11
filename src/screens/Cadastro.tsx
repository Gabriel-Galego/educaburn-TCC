import { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import {
  VStack,
  Heading,
  Icon,
  useTheme,
  Select,
  CheckIcon,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from "native-base";

import { useNavigation } from "@react-navigation/native";

import Envelope from "phosphor-react-native/src/icons/Envelope";
import Key from "phosphor-react-native/src/icons/Key";
import GenderMale from "phosphor-react-native/src/icons/GenderMale";
import GenderFemale from "phosphor-react-native/src/icons/GenderFemale";
import User from "phosphor-react-native/src/icons/User";
import SuitCaseSimple from "phosphor-react-native/src/icons/SuitcaseSimple";
import MapTrifold from "phosphor-react-native/src/icons/MapTrifold";
import Buildings from "phosphor-react-native/src/icons/Buildings";
import Baby from "phosphor-react-native/src/icons/Baby";

import { Logo } from "../components/Logo";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Alert } from "react-native";

export function Cadastro() {
  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [csenha, setCsenha] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleSignUp = () => {
    const validationError = validateInput();
    if (validationError) {
      return Alert.alert("Cadastro", validationError);
    }

    setIsLoading(true);

    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        firestore()
          .collection("Usuarios")
          .doc(email)
          .set({
            docId: email,
            nome: nome,
            email: email,
            ocupacao: ocupacao,
            idade: idade,
            sexo: sexo,
            estado: estado,
            cidade: cidade,
          })
          .catch((error) => {
            setIsLoading(false);
            return Alert.alert(
              "Cadastrar",
              "Ocorreu um erro ao cadastrar os dados."
            );
          });
      })
      .catch((error) => {
        setIsLoading(false);

        if (error.code === "auth/email-already-in-use") {
          return Alert.alert(
            "Cadastrar",
            "O endereço de e-mail já está sendo usado por outra conta."
          );
        }

        if (error.code === "auth/invalid-email") {
          return Alert.alert(
            "Cadastro",
            "O endereço de e-mail está mal formatado."
          );
        }

        return Alert.alert("Cadastrar", "Ocorreu um erro ao fazer o cadastro.");
      });
  };

  const validateInput = () => {
    if (
      !email ||
      !senha ||
      !nome ||
      !csenha ||
      !ocupacao ||
      !idade ||
      !sexo ||
      !estado ||
      !cidade
    ) {
      return "Informe todos os dados para continuar.";
    }
    if (senha !== csenha) {
      return "Senhas não coincidem.";
    }
    if (nome.length < 3) {
      return "Nome muito curto.";
    }
    if (senha.length < 6) {
      return "Senha muito curta.";
    }
    const parsedAge = parseInt(idade);
    if (isNaN(parsedAge) || parsedAge < 0) {
      return "Idade inválida.";
    }

    return "";
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <VStack flex={1} alignItems="center" px={8} pt={24}>
          <Logo />

          <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
            Cadastre-se
          </Heading>

          <Input
            mb={6}
            placeholder="Nome"
            onChangeText={setNome}
            InputLeftElement={
              <Icon as={<User color={colors.gray[300]} />} ml={4} />
            }
          />

          <Input
            mb={6}
            placeholder="E-mail"
            onChangeText={setEmail}
            InputLeftElement={
              <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
            }
          />

          <Input
            mb={6}
            placeholder="Senha"
            secureTextEntry
            InputLeftElement={
              <Icon as={<Key color={colors.gray[300]} />} ml={4} />
            }
            onChangeText={setSenha}
          />

          <Input
            mb={6}
            placeholder="Confirmar Senha"
            secureTextEntry
            onChangeText={setCsenha}
            InputLeftElement={
              <Icon as={<Key color={colors.gray[300]} />} ml={4} />
            }
          />

          <Input
            mb={6}
            placeholder="Ocupação: Estudante, Professor..."
            onChangeText={setOcupacao}
            InputLeftElement={
              <Icon as={<SuitCaseSimple color={colors.gray[300]} />} ml={4} />
            }
          />

          <Input
            mb={6}
            placeholder="Idade"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={setIdade}
            InputLeftElement={
              <Icon as={<Baby color={colors.gray[300]} />} ml={4} />
            }
          />

          <Select
            mb={6}
            size={"md"}
            width={"100%"}
            selectedValue={sexo}
            accessibilityLabel="Selecione o sexo"
            placeholder="Selecione o sexo"
            _selectedItem={{
              bg: "orange.300",
              endIcon: <CheckIcon size="5" />,
              borderRadius: "md",
            }}
            onValueChange={(itemValue) => setSexo(itemValue)}
            bg="gray.700"
            height={14}
            borderWidth={0}
            fontSize="md"
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.300"
          >
            <Select.Item
              label="Masculino"
              value="M"
              leftIcon={<GenderMale color={colors.gray[700]} />}
            />
            <Select.Item
              label="Feminino"
              value="F"
              leftIcon={<GenderFemale color={colors.red[700]} />}
            />
            <Select.Item label="Outros" value="O" />
          </Select>

          <Input
            mb={6}
            placeholder="Estado"
            onChangeText={setEstado}
            InputLeftElement={
              <Icon as={<MapTrifold color={colors.gray[300]} />} ml={4} />
            }
          />

          <Input
            mb={8}
            placeholder="Cidade"
            onChangeText={setCidade}
            InputLeftElement={
              <Icon as={<Buildings color={colors.gray[300]} />} ml={4} />
            }
          />

          <Button
            title="Criar e Acessar"
            w="full"
            onPress={handleSignUp}
            isLoading={isLoading}
          />
          <Text
            color={"gray.100"}
            fontSize={"sm"}
            mb={3}
            fontFamily={"bold"}
            mt={24}
          >
            Já tem Acesso?
          </Text>
          <Button
            title="Voltar para o login"
            w="full"
            variant={"outline"}
            onPress={navigation.goBack}
            mb={8}
          />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
