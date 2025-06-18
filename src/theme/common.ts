import { horizontalScale, verticalScale } from '@theme/responsive';
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';
import { SHADOWS } from './shadows';

export const commonStyles = StyleSheet.create({
  flex: { flex: 1 },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  fullWidth: {
    width: '100%',
  },
  padding: {
    padding: horizontalScale(16),
  },
  paddingHorizontal: {
    paddingHorizontal: horizontalScale(16),
  },
  paddingVertical: {
    paddingVertical: verticalScale(16),
  },
  margin: {
    margin: horizontalScale(16),
  },
  marginHorizontal: {
    marginHorizontal: horizontalScale(16),
  },
  marginVertical: {
    marginVertical: verticalScale(16),
  },
  // Card styles
  card: {
    ...SHADOWS.md,
    backgroundColor: COLORS.surface,
    borderRadius: SPACING.md,
    padding: SPACING.md,
  },
});
