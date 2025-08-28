// Store для управления состоянием авторизации
import { IUserDto } from '@/src/shared/api/types/data-contracts';
import { AuthState } from '@/src/shared/types/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface AuthStore extends AuthState {
  logout: () => Promise<void>;
  setUser: (user: IUserDto) => void;
  setIsFirstEnter: (isFirstEnter: boolean) => void;
  setAuth: (user: IUserDto) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  isFirstEnter: true,

  logout: async () => {
    set({ isLoading: true });
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refresh');
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

  setAuth: (user: IUserDto) => {
    set({ user, isAuthenticated: true, isLoading: false });
  },
}));

