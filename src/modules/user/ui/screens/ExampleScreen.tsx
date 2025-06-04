import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExampleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example Screen</Text>
      <Text>This is a sample screen for the new tab.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ExampleScreen;
