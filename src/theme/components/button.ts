import { TextStyle, ViewStyle } from 'react-native';

import { ContainerTextStyle } from './index';
import { COLORS } from '../colors';
import { TEXT_STYLES } from './text';
import { SPACING } from '@theme/spacing';
import { BORDERS } from '@theme/borders';
import { commonStyles } from '@theme/common';

export type ButtonType = {
  primary: ContainerTextStyle;
  secondary: ContainerTextStyle;
  outline: ContainerTextStyle;
  disabled: ContainerTextStyle;
};

const baseStyle: ViewStyle = {
  ...commonStyles.card,
  ...commonStyles.row,
  justifyContent: 'center',
  paddingVertical: SPACING.sm,
  borderRadius: BORDERS.sm,
  gap: SPACING.xs,
};

const baseTextStyle: TextStyle = {
  ...TEXT_STYLES.bodyMMedium,
  textAlign: 'center',
};

export const BUTTON_STYLES: Record<keyof ButtonType, ContainerTextStyle> = {
  primary: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.primaryContainer,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.onPrimaryContainer,
    },
  },
  secondary: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.secondaryContainer,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.onSecondaryContainer,
    },
  },
  outline: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.surface,
      borderWidth: 1,
      borderColor: COLORS.outline,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.primary,
    },
  },
  disabled: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.outline,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.surface,
    },
  },
};
