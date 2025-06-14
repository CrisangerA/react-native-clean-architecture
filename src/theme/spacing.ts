import { horizontalScale } from './responsive';

const SPACING_UNIT = 8;

export const SPACING = {
  xs: horizontalScale(SPACING_UNIT / 2), // 4px
  sm: horizontalScale(SPACING_UNIT), // 8px
  md: horizontalScale(SPACING_UNIT * 2), // 16px
  lg: horizontalScale(SPACING_UNIT * 3), // 24px
  xl: horizontalScale(SPACING_UNIT * 4), // 32px
  xxl: horizontalScale(SPACING_UNIT * 5), // 40px
};
