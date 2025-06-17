import React, { PropsWithChildren } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// Theme
import { theme, commonStyles } from '@theme/index';

const queryClient = new QueryClient();

export default function AppContainer({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="default" />
        <GestureHandlerRootView style={commonStyles.flex}>
          <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    ...commonStyles.flex,
    backgroundColor: theme.colors.background,
  },
});
