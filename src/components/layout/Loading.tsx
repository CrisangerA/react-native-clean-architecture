import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
// Components
import { Text } from '@components/core';
import { theme } from '@theme/index';

interface LoadingProps {
  label?: string;
}
export default function Loading({ label }: LoadingProps) {
  return (
    <View style={styles.root}>
      <ActivityIndicator />
      <Text font="bodyMedium">{label || ' Loading'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
});
