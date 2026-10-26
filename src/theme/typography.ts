import { TextStyle } from 'react-native';

export const fontFamilies = {
  poppins: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },
} as const;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

export interface TypographyToken {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: TextStyle['fontWeight'];
  letterSpacing?: number;
}

export const typography: Record<
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'caption',
  TypographyToken
> = {
  h1: {
    fontFamily: fontFamilies.poppins.bold,
    fontSize: 32,
    lineHeight: 38.4, // 32 * 1.2
    fontWeight: '700',
  },
  h2: {
    fontFamily: fontFamilies.poppins.semiBold,
    fontSize: 24,
    lineHeight: 31.2, // 24 * 1.3
    fontWeight: '600',
  },
  h3: {
    fontFamily: fontFamilies.poppins.semiBold,
    fontSize: 20,
    lineHeight: 26, // 20 * 1.3
    fontWeight: '600',
  },
  h4: {
    fontFamily: fontFamilies.poppins.medium,
    fontSize: 16,
    lineHeight: 22.4, // 16 * 1.4
    fontWeight: '500',
  },
  bodyLarge: {
    fontFamily: fontFamilies.poppins.regular,
    fontSize: 16,
    lineHeight: 25.6, // 16 * 1.6
    fontWeight: '400',
  },
  bodyMedium: {
    fontFamily: fontFamilies.poppins.regular,
    fontSize: 14,
    lineHeight: 22.4, // 14 * 1.6
    fontWeight: '400',
  },
  bodySmall: {
    fontFamily: fontFamilies.poppins.regular,
    fontSize: 13,
    lineHeight: 20.8, // 13 * 1.6
    fontWeight: '400',
  },
  caption: {
    fontFamily: fontFamilies.poppins.regular,
    fontSize: 11,
    lineHeight: 15.4, // 11 * 1.4
    fontWeight: '400',
  },
} as const;

export type TypographyVariant = keyof typeof typography;
