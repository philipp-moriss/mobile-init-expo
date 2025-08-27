import { Neutral, Primary } from '../theme';
import { Typography } from '../theme/typography';

// Стили для Bottom Sheet контейнера
export const BottomSheetContainerStyles = {
  default: {
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 34,
    width: 359,
  },
} as const;

// Стили для основного блока
export const BottomSheetMainBlockStyles = {
  default: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 16,
    padding: 4,
    paddingHorizontal: 16,
    backgroundColor: Neutral.white,
    borderRadius: 32,
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

// Стили для заголовка
export const BottomSheetTitleStyles = {
  default: {
    ...Typography.h2,
    color: Neutral.black,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
} as const;

// Стили для описания
export const BottomSheetDescriptionStyles = {
  default: {
    ...Typography.body,
    color: Neutral.grey700,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
} as const;

// Стили для кнопки
export const BottomSheetButtonStyles = {
  default: {
    backgroundColor: Neutral.grey200,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
} as const;

// Стили для текста кнопки
export const BottomSheetButtonTextStyles = {
  default: {
    ...Typography.button,
    color: Primary.primary600,
    textAlign: 'center',
  },
} as const;
