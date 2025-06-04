import { horizontalScale, verticalScale } from '@theme/responsive';
import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface MarginProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  vertical?: number;
  horizontal?: number;
  style?: StyleProp<ViewStyle>;
}

export default function Margin(props: PropsWithChildren<MarginProps>) {
  const { vertical, horizontal, style } = props;
  const { children, top, bottom, left, right } = props;

  const marginStyle: StyleProp<ViewStyle> = [
    top !== undefined && { marginTop: verticalScale(top) },
    bottom !== undefined && { marginBottom: verticalScale(bottom) },
    left !== undefined && { marginLeft: horizontalScale(left) },
    right !== undefined && { marginRight: horizontalScale(right) },
    vertical !== undefined && { marginVertical: verticalScale(vertical) },
    horizontal !== undefined && {
      marginHorizontal: horizontalScale(horizontal),
    },
    style,
  ];

  if (children) {
    return <View style={[styles.container, marginStyle]}>{children}</View>;
  }

  return <View style={[styles.container, marginStyle]} />;
}

const styles = StyleSheet.create({
  container: {
    // Estilos base del contenedor si son necesarios
  },
});
