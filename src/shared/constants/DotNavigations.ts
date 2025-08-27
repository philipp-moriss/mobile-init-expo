import { Neutral, Primary } from '../theme';

// Состояния Dot
export const DotStates = {
  default: 'default',
  active: 'active',
} as const;

// Стили для Dot
export const DotStyles = {
  default: {
    backgroundColor: Neutral.grey200,
    borderRadius: 100,
    width: 6,
    height: 6,
  },
  active: {
    backgroundColor: Primary.primary600,
    borderRadius: 100,
    width: 24,
    height: 6,
  },
} as const;

// Стили для Dot bar контейнера
export const DotBarStyles = {
  default: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    padding: 8,
    backgroundColor: Neutral.white,
    borderRadius: 100,
    shadowColor: Neutral.black,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 8,
  },
} as const;

// Типы для TypeScript
export type DotState = keyof typeof DotStates;
