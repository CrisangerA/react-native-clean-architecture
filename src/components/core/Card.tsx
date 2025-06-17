import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
// Components
import Text from './Text';
// Theme
import { commonStyles } from '@theme/common';
import Margin from './Margin';
import { theme } from '@theme/index';

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
      {props.title && (
        <Margin bottom={theme.spacing.md}>
          <Text title={props.title} font="titleSMedium" />
        </Margin>
      )}
      {children}
    </Container>
  );
}

const styles = StyleSheet.create({
  root: {
    ...commonStyles.card,
  },
});
