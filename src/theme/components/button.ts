import { TextStyle, ViewStyle } from 'react-native';

import { ContainerTextStyle } from './index';
import { COLORS, APP_COLORS } from '../colors';
import { TEXT_STYLES } from './text';
import { verticalScale } from '@theme/responsive';

export type ButtonType = {
  primary: ContainerTextStyle;
  secondary: ContainerTextStyle;
  outline: ContainerTextStyle;
  disabled: ContainerTextStyle;
};

const baseStyle: ViewStyle = {
  backgroundColor: APP_COLORS.button.default,
  paddingVertical: verticalScale(12),
  borderRadius: 8,
};

const baseTextStyle: TextStyle = {
  ...TEXT_STYLES.bodyMMedium,
  color: APP_COLORS.button.text,
  textAlign: 'center',
};

export const BUTTON_STYLES: Record<keyof ButtonType, ContainerTextStyle> = {
  primary: {
    container: {
      ...baseStyle,
    },
    text: {
      ...baseTextStyle,
    },
  },
  secondary: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.secondary,
      borderWidth: 1,
      borderColor: COLORS.primary,
    },
    text: {
      ...baseTextStyle,
    },
  },
  outline: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.surface,
      borderWidth: 1,
      borderColor: COLORS.primary,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.primary,
    },
  },
  disabled: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.disabled,
    },
    text: {
      ...baseTextStyle,
    },
  },
};
