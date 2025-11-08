import * as ImagePicker from "expo-image-picker";
import { useCallback, useState } from "react";
import { Toast } from "toastify-react-native";

export const useCamera = ({
  exif,
  allowsEditing,
  aspect,
  quality,
}: ImagePicker.ImagePickerOptions) => {
  const [isLoading, setIsLoading] = useState(false);

  const requestCameraPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      const currentStatus = status === "granted";
      if (!currentStatus) {
        Toast.error("Precisamos da permissão pra acessar a camera.");
      }
      return currentStatus;
    } catch (error) {
      Toast.error("Erro ao solicitar permissão pra acessar a camera.");

      return false;
    }
  }, []);

  const openCamera = useCallback(async (): Promise<string | null> => {
    setIsLoading(true);
    try {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) null;

      const result = await ImagePicker.launchCameraAsync({
        exif,
        allowsEditing,
        aspect,
        quality,
      });
      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Foto capturada com sucesso.", "top");

        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      Toast.error("Erro ao abrir câmera.", "top");
      console.error(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);
  return {
    requestCameraPermission,
    isLoading,
    openCamera,
  };
};
