import { Palette } from '../theme';

// Цвета Metro mark
export const MetroMarkColors = {
  red: 'red',
  blue: 'blue',
  green: 'green',
  orange: 'orange',
  purple: 'purple',
} as const;

// Стили для Metro mark
export const MetroMarkStyles = {
  red: {
    backgroundColor: Palette.red,
    borderRadius: 100,
    width: 8,
    height: 8,
  },
  blue: {
    backgroundColor: '#0082D8',
    borderRadius: 100,
    width: 8,
    height: 8,
  },
  green: {
    backgroundColor: '#00BB57',
    borderRadius: 100,
    width: 8,
    height: 8,
  },
  orange: {
    backgroundColor: '#FBA820',
    borderRadius: 100,
    width: 8,
    height: 8,
  },
  purple: {
    backgroundColor: '#8634C2',
    borderRadius: 100,
    width: 8,
    height: 8,
  },
} as const;

// Стили для Metro mark контейнера
export const MetroMarkContainerStyles = {
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 4,
  },
} as const;

// Типы для TypeScript
export type MetroMarkColor = keyof typeof MetroMarkColors;
