export const primaryColors = {
  lingoPurple: '#6C4EF5',
  lingoDeepPurple: '#5B3BF6',
  lingoBlue: '#4D8BFF',
  lingoGreen: '#21C16B',
} as const;

export const semanticColors = {
  success: '#21C16B',
  warning: '#FFCB00',
  streak: '#FF8A00',
  error: '#FF4D4F',
  info: '#4D8BFF',
} as const;

export const neutralColors = {
  textPrimary: '#0D132B',
  textSecondary: '#6B7380',
  border: '#E5E7EB',
  surface: '#F6F7FB',
  background: '#FFFFFF',
} as const;

export const colors = {
  primary: primaryColors,
  semantic: semanticColors,
  neutrals: neutralColors,
  ...primaryColors,
  ...semanticColors,
  ...neutralColors,
} as const;

export type PrimaryColorKey = keyof typeof primaryColors;
export type SemanticColorKey = keyof typeof semanticColors;
export type NeutralColorKey = keyof typeof neutralColors;
export type ColorKey = keyof typeof colors;
