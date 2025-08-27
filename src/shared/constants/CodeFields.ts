import { Neutral, Palette, Primary } from '../theme';
import { Typography } from '../theme/typography';

// Состояния CodeField
export const CodeFieldStates = {
  default: 'default',
  active: 'active',
  filled: 'filled',
  error: 'error',
} as const;

// Стили для CodeField контейнера
export const CodeFieldContainerStyles = {
  default: {
    flexDirection: 'row',
    gap: 4,
    padding: 8,
    backgroundColor: Neutral.white,
    borderRadius: 24,
    shadowColor: Neutral.black,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 8,
  },
  active: {
    flexDirection: 'row',
    gap: 4,
    padding: 8,
    backgroundColor: Neutral.white,
    borderRadius: 24,
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
    flexDirection: 'row',
    gap: 4,
    padding: 8,
    backgroundColor: Neutral.white,
    borderRadius: 24,
    shadowColor: Neutral.black,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 8,
  },
  error: {
    flexDirection: 'row',
    gap: 4,
    padding: 8,
    backgroundColor: Neutral.white,
    borderRadius: 24,
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

// Стили для отдельных полей ввода
export const CodeFieldInputStyles = {
  default: {
    backgroundColor: Neutral.grey200,
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  active: {
    backgroundColor: Primary.primary500_12,
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  filled: {
    backgroundColor: Neutral.grey200,
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  error: {
    backgroundColor: Palette.red,
    borderRadius: 16,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
} as const;

// Стили для текста в полях
export const CodeFieldTextStyles = {
  default: {
    ...Typography.h1,
    color: Neutral.grey700,
    textAlign: 'center',
  },
  active: {
    ...Typography.h1,
    color: Primary.primary600,
    textAlign: 'center',
  },
  filled: {
    ...Typography.h1,
    color: Neutral.black,
    textAlign: 'center',
  },
  error: {
    ...Typography.h1,
    color: Palette.red,
    textAlign: 'center',
  },
} as const;

// Стили для placeholder
export const CodeFieldPlaceholderStyles = {
  default: {
    color: Neutral.grey700,
  },
  active: {
    color: Primary.primary600,
  },
  filled: {
    color: Neutral.black,
  },
  error: {
    color: Palette.red,
  },
} as const;

// Стили для сообщения об ошибке
export const CodeFieldErrorStyles = {
  default: {
    backgroundColor: 'transparent',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: 'transparent',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: 'transparent',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    backgroundColor: 'transparent',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
  },
} as const;

// Стили для иконки предупреждения
export const CodeFieldWarningIconStyles = {
  default: {
    width: 12,
    height: 12,
    color: 'transparent',
  },
  active: {
    width: 12,
    height: 12,
    color: 'transparent',
  },
  filled: {
    width: 12,
    height: 12,
    color: 'transparent',
  },
  error: {
    width: 12,
    height: 12,
    color: Palette.red,
  },
} as const;

// Стили для текста ошибки
export const CodeFieldErrorTextStyles = {
  default: {
    ...Typography.caption,
    color: 'transparent',
    textAlign: 'center',
  },
  active: {
    ...Typography.caption,
    color: 'transparent',
    textAlign: 'center',
  },
  filled: {
    ...Typography.caption,
    color: 'transparent',
    textAlign: 'center',
  },
  error: {
    ...Typography.caption,
    color: Palette.red,
    textAlign: 'center',
  },
} as const;

// Типы для TypeScript
export type CodeFieldState = keyof typeof CodeFieldStates;
