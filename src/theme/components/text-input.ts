import { ContainerTextStyle } from './index';
import { COLORS, APP_COLORS } from '../colors';
import { Platform, ViewStyle } from 'react-native';
import { horizontalScale } from '@theme/responsive';

export type TextInputType = {
  primary: ContainerTextStyle;
  error: ContainerTextStyle;
  disabled: ContainerTextStyle;
};

const baseStyle: ViewStyle = {
  backgroundColor: APP_COLORS.input.default,
  borderWidth: 1,
  borderColor: APP_COLORS.input.border,
  borderRadius: 8,
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
    },
    text: {},
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
      backgroundColor: APP_COLORS.tabs,
    },
    text: {},
  },
};
