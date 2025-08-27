import { Neutral, Primary } from '../theme';
import { Typography } from '../theme/typography';

// Стили для Bottom bar контейнера
export const BottomBarContainerStyles = {
  default: {
    flexDirection: 'row',
    gap: 8,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Neutral.white,
    backdropFilter: 'blur(80px)',
  },
} as const;

// Стили для ценового блока
export const PriceBlockStyles = {
  default: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
} as const;

// Стили для основной цены
export const MainPriceStyles = {
  default: {
    ...Typography.h2,
    color: Neutral.black,
    textAlign: 'left',
  },
} as const;

// Стили для дополнительной цены
export const SecondaryPriceStyles = {
  default: {
    ...Typography.body,
    color: Primary.primary600,
    textAlign: 'left',
  },
} as const;

// Стили для кнопки
export const BottomBarButtonStyles = {
  default: {
    backgroundColor: Primary.primary500,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
} as const;

// Стили для текста кнопки
export const BottomBarButtonTextStyles = {
  default: {
    ...Typography.button,
    color: Neutral.white,
    textAlign: 'center',
  },
} as const;
