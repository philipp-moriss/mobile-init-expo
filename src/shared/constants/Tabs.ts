import { Accent, Neutral, Palette, Primary } from '../theme/colors';
import { Typography } from '../theme/typography';

// Состояния Tabs
export const TabStates = {
  default: 'default',
  active: 'active',
  press: 'press',
} as const;

// Типы Tabs
export const TabTypes = {
  type1: 'type1',
  type2: 'type2',
  type3: 'type3',
  type4: 'type4',
} as const;

// Стили для Tabs контейнера
export const TabsContainerStyles = {
  type1: {
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
  type2: {
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
  type3: {
    flexDirection: 'row',
    gap: 4,
    padding: 8,
    backgroundColor: 'transparent',
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
  type4: {
    flexDirection: 'row',
    gap: 4,
    padding: 8,
    backgroundColor: 'transparent',
    borderRadius: 24,
  },
} as const;

// Стили для Tab Item
export const TabItemStyles = {
  default: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  active: {
    backgroundColor: Neutral.grey100,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  press: {
    backgroundColor: 'transparent',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
} as const;

// Стили для иконок в Tabs
export const TabIconStyles = {
  default: {
    backgroundColor: Primary.primary500_12,
    borderRadius: 100,
    padding: 12,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: Accent.accentGradient[0],
    borderRadius: 100,
    padding: 12,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {
    backgroundColor: Primary.primary500_12,
    borderRadius: 100,
    padding: 12,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
} as const;

// Стили для текста в Tabs
export const TabTextStyles = {
  default: {
    ...Typography.label,
    color: Neutral.grey500,
    textAlign: 'center',
  },
  active: {
    ...Typography.label,
    color: Neutral.black, 
  },
  press: {
    ...Typography.label,
    color: Neutral.grey500, 
    textAlign: 'center',
  },
} as const;

// Стили для описания в Tabs
export const TabDescriptionStyles = {
  default: {
    ...Typography.captionMedium,
    color: Neutral.grey700,
    textAlign: 'center',
  },
  active: {
    ...Typography.captionMedium,
    color: Neutral.grey700,
    textAlign: 'center',
  },
  press: {
    ...Typography.captionMedium,
    color: Neutral.grey500,
    textAlign: 'center',
  },
} as const;

// Стили для notification badge
export const NotificationBadgeStyles = {
  default: {
    backgroundColor: Palette.red,
    borderRadius: 100,
    padding: 4,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
} as const;

// Типы для TypeScript
export type TabState = keyof typeof TabStates;
export type TabType = keyof typeof TabTypes;
