import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text className="bg-white"> Olá mundo!</Text>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
