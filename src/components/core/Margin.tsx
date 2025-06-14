import { horizontalScale } from '@theme/responsive';
import { SPACING } from '@theme/spacing';
import React, { PropsWithChildren } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

interface MarginProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  vertical?: number;
  horizontal?: number;
  spacing?: keyof typeof SPACING;
  style?: StyleProp<ViewStyle>;
}

export default function Margin(props: PropsWithChildren<MarginProps>) {
  const { vertical, horizontal, style, spacing } = props;
  const { children, top, bottom, left, right } = props;

  const marginStyle: StyleProp<ViewStyle> = [
    top !== undefined && { marginTop: horizontalScale(top) },
    bottom !== undefined && { marginBottom: horizontalScale(bottom) },
    left !== undefined && { marginLeft: horizontalScale(left) },
    right !== undefined && { marginRight: horizontalScale(right) },
    vertical !== undefined && { marginVertical: horizontalScale(vertical) },
    horizontal !== undefined && {
      marginHorizontal: horizontalScale(horizontal),
    },
    spacing !== undefined && {
      width: SPACING[spacing],
      height: SPACING[spacing],
    },
    style,
  ];

  if (children) {
    return <View style={marginStyle}>{children}</View>;
  }

  return <View style={marginStyle} />;
}
