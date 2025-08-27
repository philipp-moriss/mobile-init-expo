import { Neutral, Primary } from '../theme';
import { Typography } from '../theme/typography';

// Состояния Tag
export const TagStates = {
  default: 'default',
  press: 'press',
} as const;

// Стили для Tag контейнера
export const TagContainerStyles = {
  default: {
    backgroundColor: Neutral.grey200,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  press: {
    backgroundColor: Neutral.grey100,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
} as const;

// Стили для текста в Tag
export const TagTextStyles = {
  default: {
    ...Typography.label,
    color: Primary.primary600,
    textAlign: 'center',
  },
  press: {
    ...Typography.label,
    color: Primary.primary600,
    textAlign: 'center',
  },
} as const;

// Типы для TypeScript
export type TagState = keyof typeof TagStates;
