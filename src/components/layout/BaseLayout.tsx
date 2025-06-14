import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { SPACING } from '@theme/spacing';
import { COLORS } from '@theme/colors';

interface BaseLayoutProps {
  style?: ViewStyle;
}

export default function BaseLayout({
  style,
  children,
}: PropsWithChildren<BaseLayoutProps>) {
  return <View style={[styles.root, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: SPACING.md,
    backgroundColor: COLORS.background,
  },
});
