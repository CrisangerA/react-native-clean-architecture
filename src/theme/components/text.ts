// Re-exportar los estilos de fuente y el tipo desde el archivo de fuentes principal
// para mantener una única fuente de verdad para los estilos de texto base.
// Si se necesitan estilos específicos adicionales para el componente Text que no son

import { TextStyle } from 'react-native';
import { FONT_FAMILY, FONT_SIZES } from '../fonts';
import { theme } from '../index';

export type TextType = {
  displayRegular: TextStyle;
  displayMedium: TextStyle;
  displayBold: TextStyle;

  headlineRegular: TextStyle;
  headlineMedium: TextStyle;
  headlineBold: TextStyle;

  headlineSRegular: TextStyle;
  headlineSMedium: TextStyle;
  headlineSBold: TextStyle;

  titleRegular: TextStyle;
  titleMedium: TextStyle;
  titleBold: TextStyle;

  titleSRegular: TextStyle;
  titleSMedium: TextStyle;
  titleSBold: TextStyle;

  bodyRegular: TextStyle;
  bodyMedium: TextStyle;
  bodyBold: TextStyle;

  bodySRegular: TextStyle;
  bodySMedium: TextStyle;
  bodySBold: TextStyle;

  labelRegular: TextStyle;
  labelMedium: TextStyle;
  labelBold: TextStyle;

  labelSRegular: TextStyle;
  labelSMedium: TextStyle;
  labelSBold: TextStyle;
};

const baseTextStyles: TextStyle = {
  color: theme.colors.text,
};

export const TEXT_STYLES: Record<keyof TextType, TextStyle> = {
  // Display
  displayRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.display,
    ...baseTextStyles,
  },
  displayMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.display,
    fontWeight: '500',
    ...baseTextStyles,
  },
  displayBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.display,
    fontWeight: 'bold',
    ...baseTextStyles,
  },

  // Headline
  headlineRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.headline,
    ...baseTextStyles,
  },
  headlineMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.headline,
    fontWeight: '500',
    ...baseTextStyles,
  },
  headlineBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.headline,
    fontWeight: 'bold',
    ...baseTextStyles,
  },

  // Headline Small
  headlineSRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.headlineS,
    ...baseTextStyles,
  },
  headlineSMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.headlineS,
    fontWeight: '500',
    ...baseTextStyles,
  },
  headlineSBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.headlineS,
    fontWeight: 'bold',
    ...baseTextStyles,
  },

  // Title
  titleRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.title,
    ...baseTextStyles,
  },
  titleMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.title,
    fontWeight: '500',
    ...baseTextStyles,
  },
  titleBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
    ...baseTextStyles,
  },

  // Title Small
  titleSRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.titleS,
    ...baseTextStyles,
  },
  titleSMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.titleS,
    fontWeight: '500',
    ...baseTextStyles,
  },
  titleSBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.titleS,
    fontWeight: 'bold',
    ...baseTextStyles,
  },

  // Body
  bodyRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.body,
    ...baseTextStyles,
  },
  bodyMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.body,
    fontWeight: '500',
    ...baseTextStyles,
  },
  bodyBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.body,
    fontWeight: 'bold',
    ...baseTextStyles,
  },

  // Body Small
  bodySRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.bodyS,
    ...baseTextStyles,
  },
  bodySMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.bodyS,
    fontWeight: '500',
    ...baseTextStyles,
  },
  bodySBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.bodyS,
    fontWeight: 'bold',
    ...baseTextStyles,
  },

  // Label
  labelRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.label,
    ...baseTextStyles,
  },
  labelMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.label,
    fontWeight: '500',
    ...baseTextStyles,
  },
  labelBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.label,
    fontWeight: 'bold',
    ...baseTextStyles,
  },

  // Label Small
  labelSRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.labelS,
    ...baseTextStyles,
  },
  labelSMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.labelS,
    fontWeight: '500',
    ...baseTextStyles,
  },
  labelSBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.labelS,
    fontWeight: 'bold',
    ...baseTextStyles,
  },
};

export type FontStyle = typeof TEXT_STYLES;
