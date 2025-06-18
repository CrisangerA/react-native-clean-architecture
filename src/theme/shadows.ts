import { Platform, ViewStyle } from 'react-native';
import { COLORS } from './colors';

export type Shadow = {
  md: 'md';
};

export const SHADOWS: Record<keyof Shadow, ViewStyle> = {
  md: Platform.select({
    ios: {
      shadowColor: COLORS.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
    },
    android: {
      elevation: 12,
    },
    default: {},
  }),
};

SHADOWS.md;
