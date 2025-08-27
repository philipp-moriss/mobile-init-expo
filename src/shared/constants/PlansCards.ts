import { Neutral } from '../theme';
import { Typography } from '../theme/typography';

// Стили для Plans Card контейнера
export const PlansCardContainerStyles = {
  default: {
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    paddingHorizontal: 15,
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
export const PlansCardTitleStyles = {
  default: {
    ...Typography.body,
    color: Neutral.black,
    textAlign: 'left',
  },
} as const;

// Стили для основного блока
export const PlansCardMainBlockStyles = {
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 11,
  },
} as const;

// Стили для левого блока
export const PlansCardLeftBlockStyles = {
  default: {
    flexDirection: 'column',
    gap: 2,
  },
} as const;

// Стили для описания
export const PlansCardDescriptionStyles = {
  default: {
    ...Typography.caption,
    color: Neutral.grey700,
    textAlign: 'left',
  },
} as const;

// Стили для ценового блока
export const PlansCardPriceBlockStyles = {
  default: {
    flexDirection: 'row',
    alignItems: 'center',
  },
} as const;

// Стили для основной цены
export const PlansCardMainPriceStyles = {
  default: {
    ...Typography.h3,
    color: Neutral.black,
    textAlign: 'left',
  },
} as const;

// Стили для суффикса цены
export const PlansCardPriceSuffixStyles = {
  default: {
    ...Typography.caption,
    color: Neutral.grey700,
    textAlign: 'left',
  },
} as const;
