/**
 * Стили Input полей из Figma дизайна
 */

import { Neutral, Primary } from '../theme';
import { Typography } from '../theme/typography';

// Состояния Input полей
export const InputStates = {
  default: 'default',
  active: 'active',
  filled: 'filled',
  disabled: 'disabled',
} as const;

// Типы Input полей
export const InputTypes = {
  base: 'base',
  mail: 'mail',
  password: 'password',
} as const;

// Стили для Input полей
export const InputStyles = {
  default: {
    backgroundColor: Neutral.grey200,
    borderWidth: 0,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    ...Typography.body,
    color: Neutral.grey700,
  },
  active: {
    backgroundColor: Neutral.white,
    borderWidth: 0,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    ...Typography.body,
    color: Primary.primary600,
    // Тень для активного состояния
    shadowColor: Neutral.black,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 8,
  },
  filled: {
    backgroundColor: Neutral.grey200,
    borderWidth: 0,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    ...Typography.body,
    color: Neutral.black,
  },
  disabled: {
    backgroundColor: Neutral.grey100,
    borderWidth: 0,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    ...Typography.body,
    color: Neutral.grey500,
  },
} as const;

// Стили для placeholder текста
export const PlaceholderStyles = {
  default: {
    color: Neutral.grey700,
  },
  active: {
    color: Neutral.grey700,
  },
  filled: {
    color: Neutral.black,
  },
  disabled: {
    color: Neutral.grey500,
  },
} as const;

// Стили для иконок в Input
export const InputIconStyles = {
  default: {
    color: Neutral.grey700,
    width: 20,
    height: 20,
  },
  active: {
    color: Neutral.grey700,
    width: 20,
    height: 20,
  },
  filled: {
    color: Neutral.grey700,
    width: 20,
    height: 20,
  },
  disabled: {
    color: Neutral.grey500,
    width: 20,
    height: 20,
  },
} as const;

// Стили для кнопки очистки (X circle)
export const ClearButtonStyles = {
  default: {
    backgroundColor: Neutral.grey200,
    borderRadius: 100,
    padding: 10,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: Neutral.grey200,
    borderRadius: 100,
    padding: 10,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: Neutral.grey200,
    borderRadius: 100,
    padding: 10,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: Neutral.grey100,
    borderRadius: 100,
    padding: 10,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
} as const;

// Типы для TypeScript
export type InputState = keyof typeof InputStates;
export type InputType = keyof typeof InputTypes;
