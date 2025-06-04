import { horizontalScale, verticalScale } from '@theme/responsive';
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  centerContainer: {
    flex: 1,
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
});
