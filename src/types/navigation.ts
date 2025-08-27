// Типы для навигации
export type RootStackParamList = {
  onboarding: undefined;
  auth: undefined;
  registration: {
    step: 'city' | 'data' | 'confirm';
  };
  'registration-city': undefined;
  'registration-data': undefined;
  'registration-confirm': undefined;
  '(tabs)': undefined;
  '+not-found': undefined;
};

export type TabParamList = {
  index: undefined;
  explore: undefined;
  search: undefined;
  favorites: undefined;
  profile: undefined;
};

export type AuthStackParamList = {
  login: undefined;
  register: undefined;
  'forgot-password': undefined;
};

