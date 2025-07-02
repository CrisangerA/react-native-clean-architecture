import { horizontalScale, verticalScale } from '@theme/responsive';
import { StyleSheet } from 'react-native';
import { COLORS } from './colors';
import { SPACING } from './spacing';
import { SHADOWS } from './shadows';

export const commonStyles = StyleSheet.create({
  flex: { flex: 1 },
  ph0: { paddingHorizontal: 0 },
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
  alignCenter: {
    alignItems: 'center',
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
  // Icon container styles
  iconContainer: {
    width: horizontalScale(24),
    height: verticalScale(24),
    borderRadius: horizontalScale(20),
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  iconContainerMd: {
    width: horizontalScale(28),
    height: verticalScale(28),
    borderRadius: horizontalScale(20),
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  // Layout styles
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
});
