// Типы для авторизации
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  city: string;
  role: 'user' | 'admin' | 'shipowner';
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: 'user' | 'admin' | 'shipowner';
    city: string;
    isVerified: boolean;
  };
  token: string;
}

export interface SocialAuthProvider {
  id: 'vk' | 'telegram';
  name: string;
  icon: string;
}

