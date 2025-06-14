import { Platform, ViewStyle } from 'react-native';

import { ContainerTextStyle } from './index';
import { COLORS } from '../colors';
import { horizontalScale } from '@theme/responsive';
import { BORDERS } from '@theme/borders';

export type TextInputType = {
  primary: ContainerTextStyle;
  error: ContainerTextStyle;
  disabled: ContainerTextStyle;
};

const baseStyle: ViewStyle = {
  borderWidth: 1,
  borderColor: COLORS.outline,
  borderRadius: BORDERS.sm,
  paddingHorizontal: Platform.select({
    ios: horizontalScale(14),
    android: horizontalScale(10),
  }),
  paddingVertical: Platform.select({
    ios: horizontalScale(12),
    android: horizontalScale(0),
  }),
};

export const TEXT_INPUT_STYLES: Record<
  keyof TextInputType,
  ContainerTextStyle
> = {
  primary: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.surface,
    },
    text: {
      color: COLORS.onSurface,
    },
  },
  error: {
    container: {
      ...baseStyle,
      borderColor: COLORS.error,
    },
    text: {
      color: COLORS.error,
    },
  },
  disabled: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.outline,
    },
    text: {
      color: COLORS.onSurface,
    },
  },
};
