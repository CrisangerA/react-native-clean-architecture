import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { SPACING } from '@theme/spacing';
import { COLORS } from '@theme/colors';

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
    backgroundColor: COLORS.background,
  },
  padding: {
    paddingHorizontal: SPACING.md,
  },
});
