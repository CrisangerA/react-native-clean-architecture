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
  primary: '#4CAF50',
  onPrimary: '#FFFFFF',
  primaryContainer: '#E8F5E8',
  onPrimaryContainer: '#1B5E20',
  secondary: '#FF9800',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#FFF3E0',
  onSecondaryContainer: '#E65100',
  tertiary: '#2196F3',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#E3F2FD',
  onTertiaryContainer: '#0D47A1',
  error: '#F44336',
  onError: '#FFFFFF',
  errorContainer: '#FFEBEE',
  onErrorContainer: '#B71C1C',
  background: '#FAFAFA',
  onBackground: '#212121',
  surface: '#FFFFFF',
  onSurface: '#212121',
  surfaceVariant: '#F5F5F5',
  onSurfaceVariant: '#616161',
  outline: '#9E9E9E',
  outlineVariant: '#E0E0E0',
  shadow: '#000000',
};

const darkTheme: Color = {
  primary: '#81C784',
  onPrimary: '#1B5E20',
  primaryContainer: '#2E7D32',
  onPrimaryContainer: '#C8E6C9',
  secondary: '#FFB74D',
  onSecondary: '#E65100',
  secondaryContainer: '#F57C00',
  onSecondaryContainer: '#FFE0B2',
  tertiary: '#64B5F6',
  onTertiary: '#0D47A1',
  tertiaryContainer: '#1976D2',
  onTertiaryContainer: '#BBDEFB',
  error: '#EF5350',
  onError: '#B71C1C',
  errorContainer: '#C62828',
  onErrorContainer: '#FFCDD2',
  background: '#121212',
  onBackground: '#FFFFFF',
  surface: '#1E1E1E',
  onSurface: '#FFFFFF',
  surfaceVariant: '#2C2C2C',
  onSurfaceVariant: '#BDBDBD',
  outline: '#757575',
  outlineVariant: '#424242',
  shadow: '#000000',
};

export const COLORS =
  Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme;

export const getColor = (color: keyof Color | string) =>
  Object.keys(COLORS).includes(color) ? COLORS[color as keyof Color] : color;
