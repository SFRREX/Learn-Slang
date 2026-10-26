import { colors } from './colors';
import { typography, fontFamilies, fontWeights } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radius';
export * from './shadows';

export const theme = {
  colors,
  typography,
  fontFamilies,
  fontWeights,
  spacing,
  radius,
  shadows,
} as const;

export type Theme = typeof theme;
export default theme;
