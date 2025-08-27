import { Neutral } from '../theme';
import { Typography } from '../theme/typography';

// Стили для Club Card контейнера
export const ClubCardContainerStyles = {
  default: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 12,
    width: 168,
  },
} as const;

// Стили для фото блока
export const PhotoBlockStyles = {
  default: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    padding: 8,
    height: 168,
    borderRadius: 16,
  },
} as const;

// Стили для контент блока
export const ContentBlockStyles = {
  default: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    gap: 8,
    paddingHorizontal: 8,
  },
} as const;

// Стили для заголовка и адреса
export const TitleAddressStyles = {
  default: {
    flexDirection: 'column',
    gap: 4,
  },
} as const;

// Стили для заголовка
export const TitleStyles = {
  default: {
    ...Typography.label,
    color: Neutral.black,
    textAlign: 'left',
  },
} as const;

// Стили для адреса
export const AddressStyles = {
  default: {
    ...Typography.caption,
    color: Neutral.grey700,
    textAlign: 'left',
  },
} as const;

// Стили для ценового блока
export const PriceBlockStyles = {
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
} as const;

// Стили для основной цены
export const MainPriceStyles = {
  default: {
    ...Typography.h3,
    color: Neutral.black,
    textAlign: 'left',
  },
} as const;

// Стили для суффикса цены
export const PriceSuffixStyles = {
  default: {
    ...Typography.caption,
    color: Neutral.grey700,
    textAlign: 'left',
  },
} as const;
