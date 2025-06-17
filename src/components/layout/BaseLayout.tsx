import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { theme } from '@theme/index';

interface BaseLayoutProps {
  style?: ViewStyle;
  scrollable?: boolean;
}

export default function BaseLayout({
  style,
  scrollable,
  children,
}: PropsWithChildren<BaseLayoutProps>) {
  if (scrollable) {
    return (
      <View style={[styles.root, style]}>
        <ScrollView contentContainerStyle={styles.padding}>
          {children}
        </ScrollView>
      </View>
    );
  }
  return <View style={[styles.root, styles.padding, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  padding: {
    paddingHorizontal: theme.spacing.md,
  },
});
