import type { FC } from "react";
import { Image, Text, View } from "react-native";

interface AuthFormHeaderProps {
  title: string;
  subtitle: string;
}
export const AuthFormHeader: FC<AuthFormHeaderProps> = ({
  subtitle,
  title,
}) => {
  return (
    <View className="items-center mb-8 ">
      <Image
        source={require("../../../assets/images/Logo.png")}
        resizeMode="contain"
        className="w-[80px] h-[60px] mb-8"
      />
      <Text className="font-bold text-3xl mb-3 text-gray-500">{title}</Text>
      <Text className="font-base text-gray-300">{subtitle}</Text>
    </View>
  );
};
