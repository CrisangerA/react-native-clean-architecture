// Re-exportar los estilos de fuente y el tipo desde el archivo de fuentes principal
// para mantener una única fuente de verdad para los estilos de texto base.
// Si se necesitan estilos específicos adicionales para el componente Text que no son

import { TextStyle } from 'react-native';
import { TextType, FONT_FAMILY, FONT_SIZES } from '../fonts';

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

  // Heading 1
  h1Regular: { fontFamily: FONT_FAMILY.regular, fontSize: FONT_SIZES.h1 },
  h1Medium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.h1,
    fontWeight: '500',
  },
  h1Bold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.h1,
    fontWeight: 'bold',
  },

  // Heading 2
  h2Regular: { fontFamily: FONT_FAMILY.regular, fontSize: FONT_SIZES.h2 },
  h2Medium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.h2,
    fontWeight: '500',
  },
  h2Bold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.h2,
    fontWeight: 'bold',
  },

  // Heading 3
  h3Regular: { fontFamily: FONT_FAMILY.regular, fontSize: FONT_SIZES.h3 },
  h3Medium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.h3,
    fontWeight: '500',
  },
  h3Bold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.h3,
    fontWeight: 'bold',
  },

  // Body Large
  bodyLRegular: { fontFamily: FONT_FAMILY.regular, fontSize: FONT_SIZES.bodyL },
  bodyLMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.bodyL,
    fontWeight: '500',
  },
  bodyLBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.bodyL,
    fontWeight: 'bold',
  },

  // Body Medium (Default)
  bodyMRegular: { fontFamily: FONT_FAMILY.regular, fontSize: FONT_SIZES.bodyM },
  bodyMMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.bodyM,
    fontWeight: '500',
  },
  bodyMBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.bodyM,
    fontWeight: 'bold',
  },

  // Body Small
  bodySRegular: { fontFamily: FONT_FAMILY.regular, fontSize: FONT_SIZES.bodyS },
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

  // Caption
  captionRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.caption,
  },
  captionMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.caption,
    fontWeight: '500',
  },
  captionBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.caption,
    fontWeight: 'bold',
  },

  // Overline
  overlineRegular: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZES.overline,
  },
  overlineMedium: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZES.overline,
    fontWeight: '500',
  },
  overlineBold: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZES.overline,
    fontWeight: 'bold',
  },
};

export type FontStyle = typeof TEXT_STYLES;
