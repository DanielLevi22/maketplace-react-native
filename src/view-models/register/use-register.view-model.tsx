import { useImage } from "@/src/shared/hooks/use-image";
import { useUserStore } from "@/src/shared/store/use-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { CameraType } from "expo-image-picker";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUploadAvatarMutation } from "../../shared/queries/auth/use-upload-avatar.mutation";
import { RegisterFormData, registerScheme } from "./register.schema";

export const useRegisterViewModel = () => {
  const { updateUser } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  });

  const handleSelectAvatar = async () => {
    await handleSelectImage();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  const uploadAvatarMutation = useUploadAvatarMutation();

  const userRegisterMutation = useRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri);
        console.log({ url });

        updateUser({ avatarUrl: url });
      }
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;
    console.log("ENVIANDO PARA API:", registerData);

    await userRegisterMutation.mutateAsync(registerData);
  });

  return {
    control,
    errors,
    onSubmit,
    handleSelectAvatar,
    avatarUri,
  };
};
