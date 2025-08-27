
// Базовые тени
export const Shadows = {
  // Основная тень для карточек
  base: {
    shadowColor: '#1A1A1A',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 50,
    elevation: 8, // для Android
  },
  
  // Красная тень для ошибок/предупреждений
  red: {
    shadowColor: '#F53F3F',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  
  // Красная тень с дополнительным радиусом
  redLarge: {
    shadowColor: '#F53F3F',
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 6,
  },
  
  // Комбинированная красная тень (как в Figma)
  redCombined: {
    shadowColor: '#F53F3F',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
    // Дополнительная тень
    shadowOffset2: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity2: 0.6,
    shadowRadius2: 5,
  },
} as const;

// Размытие
export const Blur = {
  // Основное размытие
  backdrop: {
    backdropFilter: 'blur(80px)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
  },
  
  // Легкое размытие
  light: {
    backdropFilter: 'blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  
  // Среднее размытие
  medium: {
    backdropFilter: 'blur(40px)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  
  // Сильное размытие
  heavy: {
    backdropFilter: 'blur(80px)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
} as const;

// Готовые стили для компонентов
export const Effects = {
  // Карточка с базовой тенью
  card: {
    ...Shadows.base,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
  },
  
  // Карточка с красной тенью
  cardRed: {
    ...Shadows.redCombined,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
  },
  
  // Размытый фон
  backdrop: {
    ...Blur.backdrop,
    borderRadius: 24,
  },
  
  // Легкий размытый фон
  backdropLight: {
    ...Blur.light,
    borderRadius: 16,
  },
} as const;
