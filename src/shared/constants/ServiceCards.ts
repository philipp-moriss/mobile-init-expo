import { Neutral } from '../theme';
import { Typography } from '../theme/typography';

// Стили для Service Card контейнера
export const ServiceCardContainerStyles = {
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    width: 343,
    backgroundColor: Neutral.white,
    borderRadius: 16,
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
export const ServiceCardTitleStyles = {
  default: {
    ...Typography.body,
    color: Neutral.black,
    textAlign: 'left',
    flex: 1,
  },
} as const;

// Стили для ценового блока
export const ServiceCardPriceBlockStyles = {
  default: {
    flexDirection: 'row',
    alignItems: 'center',
  },
} as const;

// Стили для основной цены
export const ServiceCardMainPriceStyles = {
  default: {
    ...Typography.h3,
    color: Neutral.black,
    textAlign: 'left',
  },
} as const;

// Стили для суффикса цены
export const ServiceCardPriceSuffixStyles = {
  default: {
    ...Typography.caption,
    color: Neutral.grey700,
    textAlign: 'left',
  },
} as const;
