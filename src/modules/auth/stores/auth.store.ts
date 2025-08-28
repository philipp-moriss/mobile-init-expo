// Store для управления состоянием авторизации
import { IUserDto } from '@/src/shared/api/types/data-contracts';
import { AuthState } from '@/src/shared/types/auth';
import { create } from 'zustand';

interface AuthStore extends AuthState {
  logout: () => Promise<void>;
  setUser: (user: IUserDto) => void;
  initialize: () => Promise<void>;
  setIsFirstEnter: (isFirstEnter: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  isFirstEnter: true,

  initialize: async () => {
    set({ isLoading: true });
    try {
      // Здесь можно добавить проверку токена в AsyncStorage
      // const token = await AsyncStorage.getItem('authToken');
      // if (token) {
      //   const user = await authService.getCurrentUser();
      //   set({ isAuthenticated: true, user, isLoading: false });
      // } else {
      //   set({ isLoading: false });
      // }
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.error('Ошибка инициализации аутентификации:', error);
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      // await authService.logout();
      set({
        isAuthenticated: false,
        user: null,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  setIsFirstEnter: (isFirstEnter: boolean) => {
    set({ isFirstEnter });
  },

  setUser: (user: IUserDto) => {
    set({ user, isAuthenticated: true });
  },
}));

