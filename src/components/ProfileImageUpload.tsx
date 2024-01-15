import React, { useEffect, useState } from "react";
import { View, Image, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { uploadProfileImage } from "../../firebase-utils";
import Storage from "@react-native-firebase/storage";
import auth from "@react-native-firebase/auth";
import { RefreshControl } from "react-native-gesture-handler";

export function ProfileImageUpload() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const userEmail = auth().currentUser?.email;

  useEffect(() => {
    Storage()
      .ref("profile_images/" + userEmail + "/profile.jpg")
      .getDownloadURL()
      .then((url) => {
        setProfileImage(url);
        
      })
      .catch((error) => {
        setProfileImage(null);
      });
  }, []);

  const hasMediaLibraryPermission = async () => {
    const status = await ImagePicker.getMediaLibraryPermissionsAsync();
    return status.status === "granted";
  };

  const requestMediaLibraryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return status === "granted";
  };

  async function handleChooseImage() {
    const mediaLibraryPermission = await hasMediaLibraryPermission();

    if (!mediaLibraryPermission) {
      const permissionGranted = await requestMediaLibraryPermission();

      if (!permissionGranted) {
        alert("Permissão necessária para acessar a biblioteca de mídia.");
        return;
      }
    }

    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedAsset = result.assets[0];
      setProfileImage(selectedAsset.uri);
      uploadProfileImage(selectedAsset.uri);
    }
  }

  return (
    <View>
      {profileImage && (
        <TouchableOpacity onPress={handleChooseImage}>
          <Image
            alt="Foto de perfil"
            key={profileImage}
            source={{ uri: profileImage }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "black",
            }}
          />
        </TouchableOpacity>
      )}
      {!profileImage && (
        <TouchableOpacity onPress={handleChooseImage}>
          <Image
            source={require("../assets/pngwing.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "black",
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
