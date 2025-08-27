import { Neutral } from '../theme';
import { Typography } from '../theme/typography';

// Типы Badge
export const BadgeTypes = {
  type4: 'type4',
  radius2km: 'radius2km',
  type3: 'type3',
} as const;

// Стили для Badge контейнера
export const BadgeContainerStyles = {
  type4: {
    backgroundColor: Neutral.grey200,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  radius2km: {
    backgroundColor: Neutral.grey200,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  type3: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    backdropFilter: 'blur(8px)',
  },
} as const;

// Стили для текста в Badge
export const BadgeTextStyles = {
  type4: {
    ...Typography.caption,
    color: Neutral.grey700,
    textAlign: 'center',
  },
  radius2km: {
    ...Typography.caption,
    color: Neutral.grey700,
    textAlign: 'center',
  },
  type3: {
    ...Typography.caption,
    color: Neutral.white,
    textAlign: 'center',
  },
} as const;

// Стили для иконок в Badge
export const BadgeIconStyles = {
  type4: {
    width: 16,
    height: 16,
    color: Neutral.grey700,
  },
  radius2km: {
    width: 16,
    height: 16,
    color: Neutral.grey700,
  },
  type3: {
    width: 16,
    height: 16,
    color: 'rgba(255, 255, 255, 0.5)',
  },
} as const;

// Типы для TypeScript
export type BadgeType = keyof typeof BadgeTypes;
