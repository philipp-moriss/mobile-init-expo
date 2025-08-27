import { ErrorBoundary } from "@components/ui-kit/error-boundary";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useAuthStore } from "@/src/stores/auth.store";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../src/shared/use-theme";

export default function RootLayout() {
  const [isAppInitialized, setIsAppInitialized] = useState(false);
  const { isAuthenticated, isLoading, isFirstEnter, initialize } = useAuthStore();

  useEffect(() => {
    if (!isAppInitialized || isLoading) {
      return;
    }
    if (isAuthenticated) {
      console.log(isAuthenticated, "isAuthenticated");
      
      router.replace("/(protected-tabs)");
    } else if (isFirstEnter) {
      router.replace("/(auth)/onboarding");
    } else {
      router.replace("/(auth)");
    }
  }, [isAuthenticated, isLoading, isAppInitialized, isFirstEnter]);

  useEffect(() => {
    if (!isAppInitialized) {
      initialize();
      setIsAppInitialized(true);
    }
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(protected-tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
