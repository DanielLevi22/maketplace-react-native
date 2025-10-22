import { Redirect } from "expo-router";

export default function App() {
  const userData = {
    token: "rs3q2re2qf",
    name: " user",
  };

  if (userData) {
    return <Redirect href="/(private)/home" />;
  }

  return <Redirect href="/login" />;
}
