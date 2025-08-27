import { Neutral, Primary } from '../theme';
import { Typography } from '../theme/typography';

// Состояния Tab bar
export const TabBarStates = {
  default: 'default',
  active: 'active',
} as const;

// Стили для Tab bar контейнера
export const TabBarContainerStyles = {
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Neutral.white,
    backdropFilter: 'blur(80px)',
  },
} as const;

// Стили для Tab bar item
export const TabBarItemStyles = {
  default: {
    alignItems: 'center',
    gap: 2,
    borderRadius: 16,
    padding: 8,
  },
  active: {
    alignItems: 'center',
    gap: 2,
    borderRadius: 16,
    padding: 8,
    backgroundColor: Primary.primary500,
  },
} as const;

// Стили для иконок в Tab bar
export const TabBarIconStyles = {
  default: {
    width: 24,
    height: 24,
    color: Neutral.grey700,
  },
  active: {
    width: 24,
    height: 24,
    color: Neutral.white,
  },
} as const;

// Стили для текста в Tab bar
export const TabBarTextStyles = {
  default: {
    ...Typography.caption,
    color: Neutral.grey700,
    textAlign: 'center',
  },
  active: {
    ...Typography.caption,
    color: Neutral.white,
    textAlign: 'center',
  },
} as const;

// Типы для TypeScript
export type TabBarState = keyof typeof TabBarStates;
