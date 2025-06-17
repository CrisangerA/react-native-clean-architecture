import { normalize } from './responsive';

export const FONT_FAMILY = {
  regular: '',
  bold: '',
  light: '',
  medium: '',
};

export const FONT_SIZES = {
  display: normalize(42),
  headline: normalize(36),
  headlineS: normalize(30),
  title: normalize(26),
  titleS: normalize(18),
  body: normalize(16), // Default body
  bodyS: normalize(14),
  label: normalize(12),
  labelS: normalize(10),
};
