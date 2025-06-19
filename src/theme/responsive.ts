import { PixelRatio, Dimensions, Platform } from 'react-native';

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');
const BASE_WIDTH = Platform.select({
  ios: 390,
  android: 360,
  default: 412,
}); // Tamaño de pantalla de referencia para el ancho (ej: iPhone 11)
const BASE_HEIGHT = Platform.select({
  ios: 844,
  android: 800,
  default: 917,
}); // Tamaño de pantalla de referencia para la altura (ej: iPhone 11)

// Escala moderada para evitar una escalada lineal perfecta
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

// Normalizar el tamaño de la fuente basado en el PixelRatio
function normalize(size: number) {
  const newSize = moderateScale(size);
  if (PixelRatio.get() <= 2) {
    return newSize;
  } else if (PixelRatio.get() > 2 && PixelRatio.get() <= 3) {
    return newSize * 1.15;
  } else {
    return newSize * 1.3;
  }
}

// Escala horizontal
const horizontalScale = (size: number) => (screenWidth / BASE_WIDTH) * size;

// Escala vertical
const verticalScale = (size: number) => (screenHeight / BASE_HEIGHT) * size;

// Porcentaje de ancho
const wp = (percent: string | number) => {
  const value = typeof percent === 'string' ? parseFloat(percent) : percent;
  return PixelRatio.roundToNearestPixel((value * screenWidth) / 100);
};

// Porcentaje de alto
const hp = (percent: string | number) => {
  const value = typeof percent === 'string' ? parseFloat(percent) : percent;
  return PixelRatio.roundToNearestPixel((value * screenHeight) / 100);
};

export { horizontalScale, verticalScale, moderateScale, normalize, wp, hp };

// #region
export interface ScaleObject {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

/**
 * Factory para crear objetos de escala (borders, spacing, etc.)
 * @param baseUnit - Unidad base para los cálculos
 * @param scaleFunction - Función de escalado (por defecto horizontalScale)
 * @returns Objeto con valores escalados
 */
export const createScaleObject = (
  baseUnit: number,
  scaleFunction: (value: number) => number = horizontalScale,
): ScaleObject => {
  return {
    xs: scaleFunction(baseUnit / 2),
    sm: scaleFunction(baseUnit),
    md: scaleFunction(baseUnit * 2),
    lg: scaleFunction(baseUnit * 3),
    xl: scaleFunction(baseUnit * 4),
    xxl: scaleFunction(baseUnit * 5),
  };
};
// #endregion
