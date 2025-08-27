// Сервис для авторизации
import { AuthResponse, LoginCredentials, RegisterCredentials } from '../types/auth';

class AuthService {
  private baseUrl = 'https://api.dockmap.com'; // Заглушка

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Заглушка для демонстрации
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: '1',
            email: credentials.email,
            firstName: 'Пользователь',
            lastName: 'Тест',
            role: 'user',
            city: 'Санкт-Петербург',
            isVerified: true,
          },
          token: 'fake-jwt-token',
        });
      }, 1000);
    });
  }

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    // Заглушка для демонстрации
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: {
            id: '1',
            email: credentials.email,
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            role: credentials.role,
            city: credentials.city,
            isVerified: false,
          },
          token: 'fake-jwt-token',
        });
      }, 1000);
    });
  }

  async logout(): Promise<void> {
    // Заглушка для демонстрации
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  async verifyEmail(code: string): Promise<boolean> {
    // Заглушка для демонстрации
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
  }
}

export const authService = new AuthService();

