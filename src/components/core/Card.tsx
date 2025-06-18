import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
// Components
import Text from './Text';
import Margin from './Margin';
// Theme
import { Shadow, SHADOWS, theme, commonStyles } from '@theme/index';

interface CardProps {
  title?: string;
  onPress?: () => void;
  shadow?: keyof Shadow;
}

export default function Card({
  children,
  shadow = 'md',
  ...props
}: PropsWithChildren<CardProps>) {
  const Container = props.onPress ? TouchableOpacity : View;

  return (
    <Container style={[styles.root, SHADOWS[shadow]]} onPress={props.onPress}>
      {props.title && (
        <Margin bottom={theme.spacing.md}>
          <Text title={props.title} font="titleSBold" />
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
