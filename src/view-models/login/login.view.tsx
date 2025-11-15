import { AppButton } from "@/src/shared/components/app-button";
import { AppInputController } from "@/src/shared/components/app-input-controller";
import { AuthFormHeader } from "@/src/shared/components/auth-form-header";
import { KeyboardContainer } from "@/src/shared/key-board-container";
import { router } from "expo-router";
import { FC } from "react";
import { Text, View } from "react-native";
import { useLoginViewModel } from "./use-login-view-model";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="items-center justify-center flex-1 px-[40px]">
        <View className="flex-1 w-full items-center justify-center">
          <AuthFormHeader
            subtitle="Informe seu e-mail e senha"
            title="Acesse sua conta"
          />

          <AppInputController
            leftIcon="mail-outline"
            label="E-MAIL"
            control={control}
            placeholder="mail@example.com.br"
            name="email"
          />

          <AppInputController
            leftIcon="lock-closed-outline"
            control={control}
            name="password"
            label="SENHA"
            placeholder="Sua senha"
            secureTextEntry
          />

          <AppButton
            className="mt-6"
            rightIcon="arrow-forward"
            onPress={onSubmit}
          >
            Login
          </AppButton>
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-base mb-6 text-gray-300">
            Ainda não tem uma conta?
          </Text>
          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("/(public)/register")}
          >
            Registro
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
};
