import React from 'react';
import { StyleSheet, View } from 'react-native';
// Components
import { Text } from '@components/core';

export default function Loading() {
  return (
    <View style={styles.root}>
      <Text font="bodyLMedium">Loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
