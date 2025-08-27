import { Stack } from "expo-router";
import "react-native-reanimated";


export default function AuthLayout() {

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
