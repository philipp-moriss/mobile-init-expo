export const Neutral = {
  white: '#FFFFFF',
  black: '#1A1A1A',
  background: '#FAFCFE',
  grey100: '#EFF3F8',
  grey200: '#EAF0F6',
  grey400: '#C8D2E5',
  grey500: '#A1B0CA',
  grey700: '#7D8EAA',
  grey900: '#5A6E8A',
} as const;

export const Primary = {
  primary100: '#C0EDFF',
  primary500: '#19A7E9',
  primary500_12: 'rgba(25, 167, 233, 0.12)',
  primary600: '#008FD2',
  primaryGradient: 'linear-gradient(135deg, #72D2FF 0%, #2FAEE9 100%)',
} as const;

export const Accent = {
  accent500: '#15CDCA',
  accent500_12: 'rgba(21, 205, 202, 0.12)',
  accentGradient: 'linear-gradient(-45deg, #15CDCA 0%, #81ECEA 100%)',
} as const;

export const Palette = {
  red: '#F53F3F',
} as const;

export type NeutralKey = keyof typeof Neutral;
export type PrimaryKey = keyof typeof Primary;
export type AccentKey = keyof typeof Accent;
export type PaletteKey = keyof typeof Palette; 