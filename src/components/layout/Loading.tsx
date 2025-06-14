import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
// Components
import { Text } from '@components/core';
import { SPACING } from '@theme/spacing';

interface LoadingProps {
  label?: string;
}
export default function Loading({ label }: LoadingProps) {
  return (
    <View style={styles.root}>
      <ActivityIndicator />
      <Text font="bodyLMedium">{label || ' Loading'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.sm,
  },
});
