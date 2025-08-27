// Основные типы приложения
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  city: string;
  isVerified: boolean;
  createdAt: Date;
}

export type UserRole = 'user' | 'admin' | 'shipowner';

export interface City {
  id: string;
  name: string;
  region: string;
}

export interface Club {
  id: string;
  name: string;
  city: string;
  address: string;
  description: string;
  images: string[];
  rating: number;
  isFavorite: boolean;
}

export interface Booking {
  id: string;
  clubId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  status: BookingStatus;
  price: number;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface AuthState {
  isFirstEnter: boolean;
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
}

export interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  image?: string;
}

