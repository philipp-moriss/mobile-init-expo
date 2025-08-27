/**
 * Стили кнопок из Figma дизайна
 */

import { Neutral, Primary } from '../theme/colors';
import { Typography } from '../theme/typography';

// Основные размеры кнопок
export const ButtonSizes = {
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  base: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
} as const;

// Состояния кнопок
export const ButtonStates = {
  default: 'default',
  press: 'press',
  disabled: 'disabled',
} as const;

// Типы кнопок
export const ButtonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  small: 'small',
  text: 'text',
} as const;

// Стили для Primary кнопки
export const PrimaryButtonStyles = {
  default: {
    backgroundColor: Primary.primary500,
    ...Typography.button,
    color: Neutral.white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  press: {
    backgroundColor: Primary.primary600,
    ...Typography.button,
    color: Neutral.white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  disabled: {
    backgroundColor: Neutral.grey100,
    ...Typography.button,
    color: Neutral.grey500,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
} as const;

// Стили для Secondary кнопки
export const SecondaryButtonStyles = {
  default: {
    backgroundColor: Neutral.grey100,
    ...Typography.button,
    color: Primary.primary600,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  press: {
    backgroundColor: Neutral.grey200,
    ...Typography.button,
    color: Primary.primary600,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  disabled: {
    backgroundColor: Neutral.grey100,
    ...Typography.button,
    color: Neutral.grey500,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
} as const;

// Стили для Small кнопки
export const SmallButtonStyles = {
  default: {
    backgroundColor: Neutral.grey100,
    ...Typography.label,
    color: Primary.primary600,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  press: {
    backgroundColor: Neutral.grey200,
    ...Typography.label,
    color: Primary.primary600,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  disabled: {
    backgroundColor: Neutral.grey100,
    ...Typography.label,
    color: Neutral.grey500,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
} as const;

// Стили для Text кнопки
export const TextButtonStyles = {
  small: {
    backgroundColor: 'transparent',
    ...Typography.label,
    color: Primary.primary600,
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderRadius: 0,
  },
  base: {
    backgroundColor: 'transparent',
    ...Typography.button,
    color: Primary.primary600,
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderRadius: 0,
  },
} as const;

// Готовые стили для всех типов кнопок
export const ButtonStyles = {
  primary: PrimaryButtonStyles,
  secondary: SecondaryButtonStyles,
  small: SmallButtonStyles,
  text: TextButtonStyles,
} as const;

// Типы для TypeScript
export type ButtonSize = keyof typeof ButtonSizes;
export type ButtonState = keyof typeof ButtonStates;
export type ButtonType = keyof typeof ButtonTypes;

// Тип для стилей кнопки с учетом разных состояний для Text кнопок
export type ButtonStyle = {
  primary: {
    [S in ButtonState]: {
      backgroundColor?: string;
      color: string;
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
      fontFamily: string;
      borderRadius?: number;
      paddingVertical?: number;
      paddingHorizontal?: number;
      borderWidth?: number;
    };
  };
  secondary: {
    [S in ButtonState]: {
      backgroundColor?: string;
      color: string;
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
      fontFamily: string;
      borderRadius?: number;
      paddingVertical?: number;
      paddingHorizontal?: number;
      borderWidth?: number;
    };
  };
  small: {
    [S in ButtonState]: {
      backgroundColor?: string;
      color: string;
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
      fontFamily: string;
      borderRadius?: number;
      paddingVertical?: number;
      paddingHorizontal?: number;
      borderWidth?: number;
    };
  };
  text: {
    small: {
      backgroundColor?: string;
      color: string;
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
      fontFamily: string;
      borderRadius?: number;
      paddingVertical?: number;
      paddingHorizontal?: number;
      borderWidth?: number;
    };
    base: {
      backgroundColor?: string;
      color: string;
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
      fontFamily: string;
      borderRadius?: number;
      paddingVertical?: number;
      paddingHorizontal?: number;
      borderWidth?: number;
    };
  };
};
