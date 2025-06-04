import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

import { horizontalScale } from '@theme/responsive';

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
    padding: horizontalScale(20),
  },
});
