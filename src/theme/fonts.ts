import { TextStyle } from 'react-native';
import { normalize } from './responsive';

export const FONT_FAMILY = {
  regular: '',
  bold: '',
  light: '',
  medium: '',
};

export const FONT_SIZES = {
  display: normalize(42),
  h1: normalize(36),
  h2: normalize(30),
  h3: normalize(26),
  bodyL: normalize(18),
  bodyM: normalize(16), // Default body
  bodyS: normalize(14),
  caption: normalize(12),
  overline: normalize(10),
};

export type TextType = {
  displayRegular: TextStyle;
  displayMedium: TextStyle;
  displayBold: TextStyle;

  h1Regular: TextStyle;
  h1Medium: TextStyle;
  h1Bold: TextStyle;

  h2Regular: TextStyle;
  h2Medium: TextStyle;
  h2Bold: TextStyle;

  h3Regular: TextStyle;
  h3Medium: TextStyle;
  h3Bold: TextStyle;

  bodyLRegular: TextStyle;
  bodyLMedium: TextStyle;
  bodyLBold: TextStyle;

  bodyMRegular: TextStyle;
  bodyMMedium: TextStyle;
  bodyMBold: TextStyle;

  bodySRegular: TextStyle;
  bodySMedium: TextStyle;
  bodySBold: TextStyle;

  captionRegular: TextStyle;
  captionMedium: TextStyle;
  captionBold: TextStyle;

  overlineRegular: TextStyle;
  overlineMedium: TextStyle;
  overlineBold: TextStyle;
};
