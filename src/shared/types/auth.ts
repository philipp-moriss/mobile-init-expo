import { IUserDto } from "../api/types/data-contracts";

export interface AuthState {
    isAuthenticated: boolean;
    user: IUserDto | null;
    isLoading: boolean;
    isFirstEnter: boolean;
}