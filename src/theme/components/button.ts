import { TextStyle, ViewStyle } from 'react-native';
// Theme
import { TEXT_STYLES } from './text';
import { theme } from '@theme/index';
import { commonStyles } from '@theme/common';
import { ContainerTextStyle } from './index';
import { ButtonProps } from '@components/core';

export type ButtonType = {
  primary: ContainerTextStyle;
  secondary: ContainerTextStyle;
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
      backgroundColor: theme.colors.primary,
    },
    text: {
      ...baseTextStyle,
      color: theme.colors.onPrimary,
    },
  },
  secondary: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.secondary,
    },
    text: {
      ...baseTextStyle,
      color: theme.colors.onSecondary,
    },
  },
  disabled: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.disabled,
      shadowColor: 'transparent',
    },
    text: {
      ...baseTextStyle,
      color: theme.colors.onDisabled,
    },
  },
};

export function getButtonStyles(props: ButtonProps) {
  const styles =
    BUTTON_STYLES[props.disabled ? 'disabled' : props.type || 'primary'];

  if (props.disabled || props.type === 'disabled') {
    return styles;
  }

  if (props.variant === 'outline') {
    return {
      ...styles,
      container: {
        ...styles.container,
        backgroundColor: theme.colors.background,
        borderColor: styles.container.backgroundColor,
        borderWidth: 1,
      },
      text: {
        ...styles.text,
        color: styles.container.backgroundColor,
      },
    };
  }

  return styles;
}
