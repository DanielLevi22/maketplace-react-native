import { useUserStore } from "@/src/shared/store/use-store";
import { Redirect, Stack } from "expo-router";

export default function PublicLayout() {
  const { user, token } = useUserStore();

  if (user && token) {
    return <Redirect href="/(private)/home" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
