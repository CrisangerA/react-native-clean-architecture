import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
// Components
import { Text } from '@components/core';
import { Color, theme } from '@theme/index';

interface LoadingProps {
  label?: string;
  size?: 'small' | 'large';
  color?: keyof Color;
}
export default function Loading({
  label,
  size,
  color = 'primary',
}: LoadingProps) {
  return (
    <View style={styles.root}>
      <ActivityIndicator size={size} color={theme.colors[color]} />
      <Text font="bodyMedium" color={color}>
        {label || 'Loading'}
      </Text>
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
