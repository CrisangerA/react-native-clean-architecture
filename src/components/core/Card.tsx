import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { commonStyles } from '@theme/common';
import Text from './Text';

interface CardProps {
  title?: string;
  onPress?: () => void;
}

export default function Card({
  children,
  ...props
}: PropsWithChildren<CardProps>) {
  const Container = props.onPress ? TouchableOpacity : View;

  return (
    <Container style={styles.root} onPress={props.onPress}>
      {props.title && <Text title={props.title} font="h3Medium" />}
      {children}
    </Container>
  );
}

const styles = StyleSheet.create({
  root: {
    ...commonStyles.card,
  },
});
