import { ViewStyle } from 'react-native';
// Theme
import { theme } from '@theme/index';
import { commonStyles } from '@theme/common';
import { normalize } from '@theme/responsive';
import { Color } from '@theme/colors';

export type IconButtonType = {
  default: {
    container: ViewStyle;
    iconColor: keyof Color;
  };
  primary: {
    container: ViewStyle;
    iconColor: keyof Color;
  };
  secondary: {
    container: ViewStyle;
    iconColor: keyof Color;
  };
  surface: {
    container: ViewStyle;
    iconColor: keyof Color;
  };
  disabled: {
    container: ViewStyle;
    iconColor: keyof Color;
  };
};

const baseStyle: ViewStyle = {
  ...commonStyles.centerContainer,
  padding: theme.spacing.xs,
  borderRadius: normalize(8),
  minWidth: normalize(40),
  minHeight: normalize(40),
};

export const ICON_BUTTON_STYLES: Record<keyof IconButtonType, { container: ViewStyle; iconColor: keyof Color }> = {
  default: {
    container: {
      ...baseStyle,
      backgroundColor: 'transparent',
    },
    iconColor: 'onSurface',
  },
  primary: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.primaryContainer,
    },
    iconColor: 'onPrimaryContainer',
  },
  secondary: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.secondaryContainer,
    },
    iconColor: 'onSecondaryContainer',
  },
  surface: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.surfaceVariant,
    },
    iconColor: 'onSurface',
  },
  disabled: {
    container: {
      ...baseStyle,
      backgroundColor: theme.colors.surfaceVariant,
      opacity: 0.5,
    },
    iconColor: 'outline',
  },
};
