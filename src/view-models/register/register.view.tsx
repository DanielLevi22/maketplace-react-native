import { AppInput } from "@/src/shared/components/app-input";
import type { FC } from "react";
import { View } from "react-native";
import type { useRegisterViewModel } from "./use-register.view-model";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = () => {
  return (
    <View className="flex-1">
      <AppInput />
    </View>
  );
};
