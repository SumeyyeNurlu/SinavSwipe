/**
 * theme.js — Design tokens for SınavSwipe
 */
export const COLORS = {
  background: '#FAFAFA',
  surface: '#FFFFFF',
  surfaceAlt: '#F2F2F2',
  border: '#EBEBEB',
  text: '#111111',
  textSecondary: '#888888',
  textLight: '#BBBBBB',
  accent: '#111111',
  accentLight: '#F0F0F0',
  learned: '#2ECC71',
  review: '#E74C3C',
  shadow: 'rgba(0,0,0,0.06)',
};

export const FONTS = {
  thin: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
};

export const RADIUS = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const SHADOW = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
};