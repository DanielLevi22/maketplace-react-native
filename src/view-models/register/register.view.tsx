import { AppButton } from "@/src/shared/components/app-button";
import { AppInputController } from "@/src/shared/components/app-input-controller";
import { AuthFormHeader } from "@/src/shared/components/auth-form-header";
import { KeyboardContainer } from "@/src/shared/key-board-container";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FC } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./use-register.view-model";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  handleSelectAvatar,
  avatarUri,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe seus dados pessoais e de acesso"
        />
        <TouchableOpacity
          onPress={handleSelectAvatar}
          className="size-[120px] rounded-xl justify-center bg-shape self-center mb-8"
        >
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              className=" size-full rounded-xl"
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={32} />
          )}
        </TouchableOpacity>
        <AppInputController
          leftIcon="person-outline"
          label="NOME"
          control={control}
          name="name"
          placeholder="Seu nome completo"
        />

        <AppInputController
          leftIcon="call-outline"
          label="TELEFONE"
          control={control}
          name="phone"
          placeholder="(00) 00000-0000"
        />

        <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

        <AppInputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          name="email"
          placeholder="mail@example.com.br"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="SENHA"
          control={control}
          name="password"
          placeholder="Sua senha"
          secureTextEntry
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          control={control}
          name="confirmPassword"
          placeholder="Confirme sua senha"
          secureTextEntry
        />

        <AppButton className="mt-6" onPress={onSubmit}>
          Registrar
        </AppButton>

        <View className="mt-16">
          <Text className="text-base mb-6 text-gray-300">
            Já tem uma conta?
          </Text>
          <AppButton variant="outlined" onPress={() => router.push("/login")}>
            Login
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
