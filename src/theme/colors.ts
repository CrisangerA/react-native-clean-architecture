import { Appearance } from 'react-native';

export type BaseColor = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
};

export type SemanticColor = {
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
};

// Unifica todos los tipos de colores
export type Color = BaseColor & SemanticColor;

const lightTheme: Color = {
  primary: '#316A41',
  onPrimary: '#FFFFFF',
  primaryContainer: '#B4F1BE',
  onPrimaryContainer: '#17512B',
  secondary: '#326941',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#B4F1BE',
  onSecondaryContainer: '#17512B',
  tertiary: '#006877',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#A2EEFF',
  onTertiaryContainer: '#004E5A',
  error: '#904A43',
  onError: '#FFFFFF',
  errorContainer: '#FFDAD5',
  onErrorContainer: '#73342D',
  background: '#F6FBF3',
  onBackground: '#181D18',
  surface: '#F6FBF3',
  onSurface: '#181D18',
  surfaceVariant: '#DDE5DB',
  onSurfaceVariant: '#414941',
  outline: '#717971',
  outlineVariant: '#C1C9BF',
  shadow: '#000000',
};

const darkTheme: Color = {
  primary: '#98D4A3',
  onPrimary: '#003919',
  primaryContainer: '#17512B',
  onPrimaryContainer: '#B4F1BE',
  secondary: '#99D4A3',
  onSecondary: '#003919',
  secondaryContainer: '#17512B',
  onSecondaryContainer: '#B4F1BE',
  tertiary: '#83D2E3',
  onTertiary: '#00363E',
  tertiaryContainer: '#004E5A',
  onTertiaryContainer: '#A2EEFF',
  error: '#FFB4AB',
  onError: '#561E19',
  errorContainer: '#73342D',
  onErrorContainer: '#FFDAD5',
  background: '#101510',
  onBackground: '#DFE4DC',
  surface: '#101510',
  onSurface: '#DFE4DC',
  surfaceVariant: '#414941',
  onSurfaceVariant: '#C1C9BF',
  outline: '#8B938A',
  outlineVariant: '#414941',
  shadow: '#000000',
};

export const COLORS =
  Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;
