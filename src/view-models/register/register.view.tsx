import { AppInputController } from "@/src/shared/components/app-input-controller";
import { type FC } from "react";
import { View } from "react-native";
import type { useRegisterViewModel } from "./use-register.view-model";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <View className="flex-1">
      <AppInputController
        leftIcon="mail-outline"
        label="E-mail"
        name="email"
        control={control}
      />
    </View>
  );
};
