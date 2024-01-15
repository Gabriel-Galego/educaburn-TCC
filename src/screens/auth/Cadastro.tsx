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

import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Alert } from "react-native";
import { Header } from "../../components/Header";

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
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      backgroundColor={"white"}
    >
      <VStack flex={1} alignItems="center" px={8}>
        <Header title="Cadastro" />
        <Input mb={6} placeholder="Nome" onChangeText={setNome} />

        <Input mb={6} placeholder="E-mail" onChangeText={setEmail} />

        <Input
          mb={6}
          placeholder="Senha"
          secureTextEntry
          onChangeText={setSenha}
        />

        <Input
          mb={6}
          placeholder="Confirmar Senha"
          secureTextEntry
          onChangeText={setCsenha}
        />

        <Input
          mb={6}
          placeholder="Ocupação: Estudante, Professor..."
          onChangeText={setOcupacao}
        />

        <Input
          mb={6}
          placeholder="Idade"
          keyboardType="numeric"
          maxLength={2}
          onChangeText={setIdade}
        />

        <Select
          mb={6}
          size={"md"}
          width={"100%"}
          selectedValue={sexo}
          accessibilityLabel="Selecione o sexo"
          placeholder="Selecione o sexo"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" color={"black"} />,
          }}
          onValueChange={(itemValue) => setSexo(itemValue)}
          bg="#F6F6F6"
          height={14}
          borderWidth={1}
          borderColor="#E8E8E8"
          fontSize="md"
          fontFamily="body"
          color="black"
          placeholderTextColor="#BDBDBD"
        >
          <Select.Item label="Masculino" value="M" />
          <Select.Item label="Feminino" value="F" />
          <Select.Item label="Não informar" value="O" />
        </Select>

        <Input mb={6} placeholder="Estado" onChangeText={setEstado} />

        <Input mb={8} placeholder="Cidade" onChangeText={setCidade} />

        <Button
          title="Criar e Acessar"
          w="full"
          onPress={handleSignUp}
          isLoading={isLoading}
          mb={6}
        />
      </VStack>
    </ScrollView>
  );
}
