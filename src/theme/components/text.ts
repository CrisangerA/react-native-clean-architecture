// Re-exportar los estilos de fuente y el tipo desde el archivo de fuentes principal
// para mantener una única fuente de verdad para los estilos de texto base.
// Si se necesitan estilos específicos adicionales para el componente Text que no son

import { TextStyle } from 'react-native';
import { FONT_FAMILY, FONT_SIZES } from '../fonts';

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

export const TEXT_STYLES: Record<keyof TextType, TextStyle> = {
  // Display
  displayRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.display,
  },
  displayMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.display,
    fontWeight: '500',
  },
  displayBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.display,
    fontWeight: 'bold',
  },

  // Headline
  headlineRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.headline,
  },
  headlineMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.headline,
    fontWeight: '500',
  },
  headlineBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.headline,
    fontWeight: 'bold',
  },

  // Headline Small
  headlineSRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.headlineS,
  },
  headlineSMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.headlineS,
    fontWeight: '500',
  },
  headlineSBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.headlineS,
    fontWeight: 'bold',
  },

  // Title
  titleRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.title,
  },
  titleMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.title,
    fontWeight: '500',
  },
  titleBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
  },

  // Title Small
  titleSRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.titleS,
  },
  titleSMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.titleS,
    fontWeight: '500',
  },
  titleSBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.titleS,
    fontWeight: 'bold',
  },

  // Body
  bodyRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.body,
  },
  bodyMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.body,
    fontWeight: '500',
  },
  bodyBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.body,
    fontWeight: 'bold',
  },

  // Body Small
  bodySRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.bodyS,
  },
  bodySMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.bodyS,
    fontWeight: '500',
  },
  bodySBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.bodyS,
    fontWeight: 'bold',
  },

  // Label
  labelRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.label,
  },
  labelMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.label,
    fontWeight: '500',
  },
  labelBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.label,
    fontWeight: 'bold',
  },

  // Label Small
  labelSRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.labelS,
  },
  labelSMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.labelS,
    fontWeight: '500',
  },
  labelSBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.labelS,
    fontWeight: 'bold',
  },
};

export type FontStyle = typeof TEXT_STYLES;
