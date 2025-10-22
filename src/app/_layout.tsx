import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import "../styles/global.css";

const queryClint = new QueryClient();
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClint}>
      <Stack />;
    </QueryClientProvider>
  );
}
