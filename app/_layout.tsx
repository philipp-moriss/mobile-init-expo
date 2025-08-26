import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { ErrorBoundary } from "@/src/shared/components/ui-kit/error-boundary";
import { LIGHT } from "@hooks/use-theme/light";
import { ThemeProvider } from "@hooks/use-theme/use-theme";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": LIGHT.assets.RobotoRegular,
    GeologicaRegular: LIGHT.assets.RobotoRegular,
    GeologicaMedium: LIGHT.assets.GeologicaMedium,
    GeologicaSemiBold: LIGHT.assets.GeologicaSemiBold,
    GeologicaLight: LIGHT.assets.GeologicaLight,
  });

  if (!fontsLoaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
