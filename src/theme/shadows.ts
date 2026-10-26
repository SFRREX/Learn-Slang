import { Platform, ViewStyle } from 'react-native';

export const shadows = {
  sm: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#0D132B',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    android: {
      elevation: 1,
    },
    default: {},
  }),
  md: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#0D132B',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
    },
    android: {
      elevation: 4,
    },
    default: {},
  }),
  lg: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#0D132B',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 16,
    },
    android: {
      elevation: 8,
    },
    default: {},
  }),
  card: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#0D132B',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.04,
      shadowRadius: 6,
    },
    android: {
      elevation: 2,
    },
    default: {},
  }),
} as const;
