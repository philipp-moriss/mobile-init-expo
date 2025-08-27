import { Neutral, Primary } from '../theme';
import { Typography } from '../theme/typography';

// Типы Avatar
export const AvatarTypes = {
  none: 'none',
  default: 'default',
} as const;

// Стили для Avatar контейнера
export const AvatarContainerStyles = {
  none: {
    backgroundColor: Neutral.grey200,
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  default: {
    backgroundColor: Primary.primary500,
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
} as const;

// Стили для текста в Avatar
export const AvatarTextStyles = {
  none: {
    ...Typography.h3,
    color: Primary.primary600,
    textAlign: 'center',
  },
  default: {
    ...Typography.h3,
    color: Neutral.white,
    textAlign: 'center',
  },
} as const;

// Типы для TypeScript
export type AvatarType = keyof typeof AvatarTypes;
