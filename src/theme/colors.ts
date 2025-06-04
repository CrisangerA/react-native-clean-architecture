interface AppColors {
  button: {
    default: string;
    text: string;
  };
  input: {
    default: string;
    border: string;
    text: string;
    placeholder: string;
  };
  tabs: string;
  card: {
    background: string;
    shadow: string;
  };
}

// Definición de la paleta de colores base
export type BaseColor = {
  primary: string; // Naranja principal
  secondary: string; // Naranja claro (complementario)
  accent: string; // Color de acento, ej. azul vibrante
  // Añade más colores base si es necesario
};

// Definición de colores semánticos
export type SemanticColor = {
  error: string; // Rojo para errores
  warning: string; // Amarillo/Naranja para advertencias
  info: string; // Azul para información
  success: string; // Verde para éxito
};

// Definición de colores neutrales y de texto
export type NeutralColor = {
  background: string; // Fondo principal de la app (ej. blanco o gris muy claro)
  surface: string; // Color para superficies de componentes como cards, modales (ej. blanco)
  text: string; // Color principal del texto (ej. gris oscuro)
  textSecondary: string; // Color secundario del texto (ej. gris medio)
  border: string; // Color para bordes (ej. gris claro)
  disabled: string; // Color para elementos deshabilitados (ej. gris claro)
  // Escala de grises
  black: string;
  grey900: string;
  grey800: string;
  grey700: string;
  grey600: string;
  grey500: string;
  grey400: string;
  grey300: string;
  grey200: string;
  grey100: string;
  white: string;
};

// Unifica todos los tipos de colores
export type Color = BaseColor & SemanticColor & NeutralColor;

export const COLORS: Color = {
  // Base Colors
  primary: '#FF8C00', // Naranja vibrante
  secondary: '#FED9AA', // Naranja pálido
  accent: '#007AFF', // Azul Apple

  // Semantic Colors
  error: '#FF3B30', // Rojo Apple
  warning: '#FF9500', // Naranja Apple
  info: '#007AFF', // Azul Apple (puede ser el mismo que accent o uno diferente)
  success: '#34C759', // Verde Apple

  // Neutral Colors
  background: '#F2F2F7', // Gris claro sistema iOS
  surface: '#FFFFFF', // Blanco
  text: '#1C1C1E', // Casi negro iOS (para texto principal)
  textSecondary: '#8E8E93', // Gris secundario iOS
  border: '#C6C6C8', // Gris para bordes iOS
  disabled: '#D1D1D6', // Gris para deshabilitado iOS

  // Grayscale
  black: '#000000',
  grey900: '#1C1C1E',
  grey800: '#2C2C2E',
  grey700: '#3A3A3C',
  grey600: '#48484A',
  grey500: '#8E8E93', // System Gray
  grey400: '#AEAEB2',
  grey300: '#C7C7CC',
  grey200: '#D1D1D6',
  grey100: '#E5E5EA',
  white: '#FFFFFF',
};

export const APP_COLORS: AppColors = {
  button: {
    default: COLORS.primary,
    text: COLORS.white,
  },
  input: {
    default: COLORS.surface,
    border: COLORS.border,
    text: COLORS.text,
    placeholder: COLORS.grey500,
  },
  tabs: 'rgba(255, 238, 217, 0.7)', // Mantener o ajustar según el nuevo tema
  card: {
    background: COLORS.surface,
    shadow: COLORS.grey500, // Usar un gris para la sombra
  },
};
