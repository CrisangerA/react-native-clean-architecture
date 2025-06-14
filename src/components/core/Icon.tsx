import React from 'react';
import RNVIcon from '@react-native-vector-icons/material-design-icons';

import { SPACING, COLORS } from '@theme/index';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}
export default function Icon({
  name,
  size = SPACING.md,
  color = COLORS.primary,
}: IconProps) {
  return <RNVIcon name={name as never} size={size} color={color} />;
}
