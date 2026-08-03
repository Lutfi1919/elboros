import api from "../api/axios";
import type { LoginPayload, LoginResponse } from "../types/Login";
import type { User, UserResponse } from "../types/User";

export const login = async (user: LoginPayload): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/login", user);
    return response.data;
}

export const signup = async (user: User): Promise<User> => {
    const response = await api.post<User>("/signup", user);
    return response.data;
}

export const saldoUpdate = async (user: User): Promise<User> => {
    const response = await api.put<User>("/saldo", user);
    return response.data;
}

export const showUser = async (): Promise<UserResponse> => {
    const response = await api.get<UserResponse>("/show_user");
    return response.data;
}