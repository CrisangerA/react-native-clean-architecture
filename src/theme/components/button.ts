import { TextStyle, ViewStyle } from 'react-native';
// Theme
import { TEXT_STYLES } from './text';
import { theme } from '@theme/index';
import { commonStyles } from '@theme/common';
import { ContainerTextStyle } from './index';

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
  paddingVertical: theme.spacing.sm,
  borderRadius: theme.borders.sm,
  gap: theme.spacing.xs,
};

const baseTextStyle: TextStyle = {
  ...TEXT_STYLES.bodyMedium,
  textAlign: 'center',
};

export const BUTTON_STYLES: Record<keyof ButtonType, ContainerTextStyle> = {
  primary: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.primaryContainer,
    },
    text: {
      ...baseTextStyle,
      color: theme.colors.onPrimaryContainer,
    },
  },
  secondary: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.secondaryContainer,
    },
    text: {
      ...baseTextStyle,
      color: theme.colors.onSecondaryContainer,
    },
  },
  outline: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.outline,
      shadowColor: 'transparent',
    },
    text: {
      ...baseTextStyle,
      color: theme.colors.primary,
    },
  },
  disabled: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.surfaceVariant,
      shadowColor: 'transparent',
    },
    text: {
      ...baseTextStyle,
      color: theme.colors.outline,
    },
  },
};
