import { useUserStore } from "@/src/shared/store/use-store";
import { Redirect, Stack } from "expo-router";

export default function PrivateLayout() {
  const { user, token } = useUserStore();

  if (!user || !token) {
    return <Redirect href="/(public)/login" />;
  }

  return <Stack />;
}
