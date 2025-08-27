// Store для управления состоянием авторизации
import { create } from 'zustand';
import { authService } from '../services/auth.service';
import { AuthState, User } from '../types';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  verifyEmail: (code: string) => Promise<void>;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  user: null,
  isLoading: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const response = await authService.login({ email, password });
      set({
        isAuthenticated: true,
        user: response.user,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (userData: any) => {
    set({ isLoading: true });
    try {
      const response = await authService.register(userData);
      set({
        isAuthenticated: true,
        user: response.user,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await authService.logout();
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

  verifyEmail: async (code: string) => {
    set({ isLoading: true });
    try {
      await authService.verifyEmail(code);
      const currentUser = get().user;
      if (currentUser) {
        set({
          user: { ...currentUser, isVerified: true },
          isLoading: false,
        });
      }
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  setUser: (user: User) => {
    set({ user, isAuthenticated: true });
  },

  clearUser: () => {
    set({ user: null, isAuthenticated: false });
  },
}));

