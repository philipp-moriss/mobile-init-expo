/**
 * Иконки из Figma дизайна
 */

import { EmailIcon, EyeIcon, LockIcon } from '../components/icons';

// 20px иконки
export const Icons20 = {
  edit: require('../assets/icons/edit-20px.svg'),
  xCircle: require('../assets/icons/x-circle-20px.svg'),
  info: require('../assets/icons/info-20px.svg'),
  readAll: require('../assets/icons/read-all-20px.svg'),
  search: require('../assets/icons/search-20px.svg'),
  reset: require('../assets/icons/reset-20px.svg'),
  heart: require('../assets/icons/heart-20px.svg'),
  phone: require('../assets/icons/phone-20px.svg'),
  clean: require('../assets/icons/clean-20px.svg'),
} as const;

// 24px иконки
export const Icons24 = {
  arrowBack: require('../assets/icons/arrow-back-24px.svg'),
  search: require('../assets/icons/search-24px.svg'),
  scaleMax: require('../assets/icons/scale-max-24px.svg'),
  scaleMin: require('../assets/icons/scale-min-24px.svg'),
  phone: require('../assets/icons/phone-24px.svg'),
  notification: require('../assets/icons/notification-24px.svg'),
  heart: require('../assets/icons/heart-24px.svg'),
  widget: require('../assets/icons/widget-24px.svg'),
  user: require('../assets/icons/user-24px.svg'),
  calendar: require('../assets/icons/calendar-24px.svg'),
  anchor: require('../assets/icons/anchor-24px.svg'),
  ship: require('../assets/icons/ship-24px.svg'),
  vk: require('../assets/icons/vk-24px.svg'),
  telegram: require('../assets/icons/telegram-24px.svg'),
  // Email иконка - используем React компонент
  email: EmailIcon,
} as const;

// 32px иконки
export const Icons32 = {
  passport: require('../assets/icons/passport-32px.svg'),
  verified: require('../assets/icons/verified-32px.svg'),
  document: require('../assets/icons/document-32px.svg'),
  // Lock иконка - используем React компонент
  lock: LockIcon,
  // Eye иконка - используем React компонент
  eye: EyeIcon,
} as const;

// 16px иконки
export const Icons16 = {
  warning: require('../assets/icons/warning-16px.svg'),
  xCircle: require('../assets/icons/x-circle-16px.svg'),
  mapPoint: require('../assets/icons/map-point-16px.svg'),
  anchor: require('../assets/icons/anchor-16px.svg'),
  closeLine: require('../assets/icons/close-line-16px.svg'),
  arrowBack: require('../assets/icons/arrow-back-24px.svg'), // Используем 24px версию
} as const;

// Все иконки
export const Icons = {
  ...Icons32,
  ...Icons24,
  ...Icons20,
  ...Icons16,
} as const;

// Типы для иконок
export type IconName32 = keyof typeof Icons32;
export type IconName24 = keyof typeof Icons24;
export type IconName20 = keyof typeof Icons20;
export type IconName16 = keyof typeof Icons16;
export type IconName = keyof typeof Icons;
