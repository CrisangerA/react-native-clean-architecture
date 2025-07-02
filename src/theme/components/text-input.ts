import { Platform, TextStyle, ViewStyle } from 'react-native';

import { ContainerTextStyle } from './index';
import { COLORS } from '../colors';
import { TEXT_STYLES } from './text';
import { horizontalScale } from '../responsive';
import { BORDERS } from '../borders';
import { commonStyles } from '../common';
import { TextInputProps } from '@components/core';

export type TextInputType = {
  primary: ContainerTextStyle;
  error: ContainerTextStyle;
  disabled: ContainerTextStyle;
  focus: ContainerTextStyle;
};

const baseStyle: ViewStyle = {
  ...commonStyles.row,
  borderWidth: 1,
  borderColor: COLORS.text,
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
  ...TEXT_STYLES.bodyRegular,
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
      backgroundColor: COLORS.background,
      borderColor: COLORS.disabled,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.onDisabled,
    },
  },
  focus: {
    container: {
      ...baseStyle,
      backgroundColor: COLORS.background,
      borderColor: COLORS.primary,
    },
    text: {
      ...baseTextStyle,
      color: COLORS.primary,
    },
  },
};

export function getTextInputStyles(props: TextInputProps) {
  console.log('get style: ', props.type);

  const styles = TEXT_INPUT_STYLES[props.type || 'primary'];

  if (props.editable === false) {
    return TEXT_INPUT_STYLES.disabled;
  }

  if (props.error) {
    return TEXT_INPUT_STYLES.error;
  }

  return styles;
}
