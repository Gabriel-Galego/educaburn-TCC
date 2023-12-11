import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";

export async function uploadProfileImage(uri: string) {
  try {
    const user = auth().currentUser;

    if (!user) {
      console.error("Usuário não autenticado.");
      return;
    }

    const storageRef = storage().ref(
      `profile_images/${user.email}/profile.jpg`
    );
    const response = await fetch(uri);
    const blob = await response.blob();

    await storageRef.put(blob);
    console.log(
      "Imagem de perfil enviada com sucesso para o Firebase Storage!"
    );
  } catch (error) {
    console.error("Erro ao enviar a imagem para o Firebase:", error);
  }
}
