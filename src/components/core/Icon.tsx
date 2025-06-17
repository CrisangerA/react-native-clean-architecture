import React from 'react';
import RNVIcon from '@react-native-vector-icons/material-design-icons';

import { theme, Color, getColor } from '@theme/index';

interface IconProps {
  name: string;
  size?: number;
  color?: keyof Color;
}

export default function Icon({
  name,
  size = theme.spacing.md,
  color = 'primary',
}: IconProps) {
  const finalColor = getColor(color);

  return <RNVIcon name={name as never} size={size} color={finalColor} />;
}
