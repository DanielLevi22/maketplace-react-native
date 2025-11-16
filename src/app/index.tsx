import { Redirect } from "expo-router";
import { useUserStore } from "../shared/store/use-store";

export default function App() {
  const { user, token } = useUserStore();

  if (user && token) {
    return <Redirect href="/(private)/home" />;
  }

  return <Redirect href="/(public)/login" />;
}
