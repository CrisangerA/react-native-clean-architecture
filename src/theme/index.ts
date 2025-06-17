import { BORDERS } from './borders';
import { COLORS } from './colors';
import { FONT_FAMILY, FONT_SIZES } from './fonts';
import { SHADOWS } from './shadows';
import { SPACING } from './spacing';

export * from './borders';
export * from './colors';
export * from './common';
export * from './fonts';
export * from './responsive';
export * from './shadows';
export * from './spacing';

export const theme = {
  borders: BORDERS,
  colors: COLORS,
  fonts: {
    family: FONT_FAMILY,
    sizes: FONT_SIZES,
  },
  shadows: SHADOWS,
  spacing: SPACING,
};

export type Theme = typeof theme;
