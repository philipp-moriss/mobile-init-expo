import { ErrorBoundary } from '@components/ui-kit/error-boundary';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

import { useFonts } from '../src/shared/hooks/useFonts';
import { ThemeProvider } from '../src/shared/use-theme';

export default function RootLayout() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const fontsLoaded = useFonts();

  useEffect(() => {
    // Здесь можно добавить логику проверки первого запуска
    // Пока что всегда показываем онбординг
    setIsFirstLaunch(true);
  }, []);

  useEffect(() => {
    if (isFirstLaunch === null) return;
    router.replace('/onboarding' as any);
  }, [isFirstLaunch]);



  console.log('Debug:', { isFirstLaunch, fontsLoaded });

  if (isFirstLaunch === null) {
    console.log('Showing loading screen - first launch');
    return <View style={{ flex: 1, backgroundColor: '#FAFCFE' }} />;
  }

  console.log('Rendering main app');

  return (
    <ThemeProvider>
      <ErrorBoundary>
          <Stack>
          <Stack.Screen
            name="onboarding"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="auth"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="registration-city"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="registration-data"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="registration-confirm"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="home"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="search"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="favorites"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="profile"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
