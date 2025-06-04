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
