import { horizontalScale, verticalScale } from '@theme/responsive';
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';
import { SHADOWS } from './shadows';

export const commonStyles = StyleSheet.create({
  // Layout styles
  flex: { flex: 1 },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowWithFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  // Paddings
  ph0: { paddingHorizontal: 0 },
  padding: {
    padding: horizontalScale(SPACING.md),
  },
  paddingHorizontal: {
    paddingHorizontal: horizontalScale(SPACING.md),
  },
  paddingVertical: {
    paddingVertical: verticalScale(SPACING.md),
  },
  // Margins
  margin: {
    margin: horizontalScale(SPACING.md),
  },
  marginHorizontal: {
    marginHorizontal: horizontalScale(SPACING.md),
  },
  marginVertical: {
    marginVertical: verticalScale(SPACING.md),
  },
  // Card styles
  card: {
    ...SHADOWS.md,
    backgroundColor: COLORS.surface,
    borderRadius: SPACING.md,
    padding: SPACING.md,
  },
});
