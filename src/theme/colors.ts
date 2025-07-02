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
  // Primary colors - mantener el verde pero ajustar onPrimary para mejor contraste
  primary: '#00AB55',
  onPrimary: '#000000', // Invertido del lightTheme

  // Secondary colors - mantener el azul pero ajustar onSecondary
  secondary: '#3366FF',
  onSecondary: '#000000', // Invertido del lightTheme

  // Error colors - usar un rojo más suave para modo oscuro
  error: '#FF5252', // Versión más clara del error del lightTheme
  onError: '#000000', // Invertido del lightTheme

  // Background colors - fondo oscuro con texto claro
  background: '#121212', // Opuesto del #FAFAFA (muy claro -> muy oscuro)
  onBackground: '#E0E0E0', // Opuesto del #212121 (muy oscuro -> claro)

  // Surface colors - superficie oscura con texto claro
  surface: '#1E1E1E', // Opuesto del #FFFFFF (blanco -> gris muy oscuro)
  onSurface: '#E0E0E0', // Opuesto del #212121 (muy oscuro -> claro)

  // Disabled colors - versiones oscuras con opacidad apropiada
  disabled: 'rgba(255, 255, 255, 0.12)', // Invertido: blanco con baja opacidad
  onDisabled: 'rgba(255, 255, 255, 0.38)', // Invertido: blanco con opacidad media

  // Text colors - texto claro para fondo oscuro
  text: '#FFFFFF', // Opuesto del #000000 (negro -> blanco)
  textSecondary: '#B0B0B0', // Opuesto del #616161 (gris oscuro -> gris claro)

  // Shadow - sombras más sutiles en modo oscuro
  shadow: 'rgba(0, 0, 0, 0.8)', // Sombra más intensa para fondos oscuros
};

export const COLORS =
  Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;

export const getColor = (color: keyof Color | string) =>
  Object.keys(COLORS).includes(color) ? COLORS[color as keyof Color] : color;
