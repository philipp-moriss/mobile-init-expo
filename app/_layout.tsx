import { ErrorBoundary } from "@components/ui-kit/error-boundary";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useGetMe } from "@/src/modules/auth/api/use-get-me";
import { useAuthStore } from "@/src/modules/auth/stores/auth.store";
import { queryClient } from "@/src/shared/api/configs/query-client-config";
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Toaster } from "sonner-native";
import { ThemeProvider } from "../src/shared/use-theme";

const RootStack = () => {
  const [isAppInitialized, setIsAppInitialized] = useState(false);
  const { isAuthenticated, isLoading, isFirstEnter, setAuth } = useAuthStore();

  const { data: user, isLoading: isLoadingGetMe } = useGetMe();

  useEffect(() => {
    if (!isAppInitialized || isLoading) {
      return;
    }
    if (user) {
      setAuth(user);
    }
    if (isAuthenticated) {
      router.replace("/(protected-tabs)");
    } else if (isFirstEnter) {
      router.replace("/(auth)/onboarding");
    } else {
      router.replace("/(auth)");
    }
  }, [isAuthenticated, isLoading, isAppInitialized, isFirstEnter, user, setAuth]);

  useEffect(() => {
    if (!isAppInitialized) {
      setIsAppInitialized(true);
    }
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(protected-tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          <ErrorBoundary>
            <Toaster
              // icons={{
              //   success: <Image width={24} height={24} source={imgSuccess} />,
              //   warning: <Image width={24} height={24} source={imgWarning} />,
              //   error: <Image width={24} height={24} source={imgWarning} />,
              // }}
              toastOptions={{
                style: {
                  zIndex: 9999,
                },
                toastContainerStyle: {
                  zIndex: 9999,
                  alignItems: "center",
                  justifyContent: "center",
                },
                toastContentStyle: {
                  zIndex: 9999,
                  minWidth: 320,
                  alignItems: "center",
                  justifyContent: "center",
                },
                titleStyle: {
                  color: "#363636",
                  fontSize: 16,
                  lineHeight: 20,
                },
                descriptionStyle: {
                  fontSize: 12,
                  lineHeight: 14,
                  color: "#8E8E8E",
                },
              }}
              style={{
                // zIndex: 9999,
                borderRadius: 22,
                width: "100%",
                paddingVertical: 16,
                // paddingHorizontal: 41,
              }}
              closeButton
              offset={60}
              position="top-center"
            />
            <RootStack />
            <StatusBar style="auto" />
          </ErrorBoundary>
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
