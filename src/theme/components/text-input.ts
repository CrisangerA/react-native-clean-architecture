import { Platform, TextStyle, ViewStyle } from 'react-native';

import { ContainerTextStyle } from './index';
import { COLORS } from '../colors';
import { TEXT_STYLES } from './text';
import { horizontalScale } from '../responsive';
import { BORDERS } from '../borders';
import { commonStyles } from '../common';

export type TextInputType = {
  primary: ContainerTextStyle;
  error: ContainerTextStyle;
  disabled: ContainerTextStyle;
};

const baseStyle: ViewStyle = {
  ...commonStyles.row,
  borderWidth: 1,
  borderColor: COLORS.outline,
  borderRadius: BORDERS.sm,
  paddingHorizontal: Platform.select({
    ios: horizontalScale(10),
    android: horizontalScale(8),
  }),
  paddingVertical: Platform.select({
    ios: horizontalScale(12),
    android: horizontalScale(0),
  }),
};

const baseTextStyle: TextStyle = {
  ...TEXT_STYLES.bodySRegular,
  color: COLORS.primary,
  flex: 1,
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
      ...baseTextStyle,
      color: COLORS.onSurface,
    },
  },
  error: {
    container: {
      ...baseStyle,
      borderColor: COLORS.error,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.error,
    },
  },
  disabled: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.surfaceVariant,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.outline,
    },
  },
};
