export const Typography = {
  // Заголовки
  h1: {
    fontFamily: 'Onest',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.0208,
  },
  h2: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.025,
  },
  h3: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.0278,
  },
  
  // Основной текст
  bodyMedium: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.03125,
  },
  bodyRegular: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.03125,
  },
  bodySmall: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.03125,
  },
  
  // Подписи
  label: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.03125,
  },
  captionMedium: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.03125,
  },
  captionRegular: {
    fontFamily: 'Onest',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.03125,
  },
  captionSmall: {
    fontFamily: 'Onest',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: -0.03125,
  },
  
  // Кнопки
  button: {
    fontFamily: 'Onest',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.03125,
  },
} as const;

export type TypographyKey = keyof typeof Typography;
