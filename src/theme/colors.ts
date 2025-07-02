import { Appearance } from 'react-native';

export type BaseColor = {
  primary: string;
  onPrimary: string;

  secondary: string;
  onSecondary: string;
};

export type SemanticColor = {
  error: string;
  onError: string;

  background: string;
  onBackground: string;

  surface: string;
  onSurface: string;

  disabled: string;
  onDisabled: string;

  text: string;
  textSecondary: string;

  shadow: string;
};

// Unifica todos los tipos de colores
export type Color = BaseColor & SemanticColor;

const lightTheme: Color = {
  primary: '#00AB55',
  onPrimary: '#FFFFFF',

  secondary: '#3366FF',
  onSecondary: '#FFFFFF',

  error: '#F44336',
  onError: '#FFFFFF',

  background: '#FAFAFA',
  onBackground: '#212121',

  surface: '#FFFFFF',
  onSurface: '#212121',

  disabled: 'rgba(145, 158, 171, 0.24)',
  onDisabled: 'rgba(145, 158, 171, 0.8)',

  text: '#000000',
  textSecondary: '#616161',

  shadow: '#000000',
};

const darkTheme: Color = {
  primary: '#00AB55',
  onPrimary: '#1B5E20',
  secondary: '#3366FF',
  onSecondary: '#E65100',
  error: '#EF5350',
  onError: '#B71C1C',
  background: '#121212',
  onBackground: '#FFFFFF',
  surface: '#1E1E1E',
  onSurface: '#FFFFFF',
  disabled: '#2C2C2C',
  onDisabled: '#BDBDBD',
  text: '#000000',
  textSecondary: '#616161',
  shadow: '#000000',
};

export const COLORS =
  Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;

export const getColor = (color: keyof Color | string) =>
  Object.keys(COLORS).includes(color) ? COLORS[color as keyof Color] : color;
