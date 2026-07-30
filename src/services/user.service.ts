import api from "../api/axios";
import type { User } from "../types/User";

export const login = async (user: User[]): Promise<User[]> => {
    const response = await api.post<User[]>("/login", user);
    return response.data;
}

export const signup = async (user: User[]): Promise<User[]> => {
    const response = await api.post<User[]>("/signup", user);
    return response.data;
}

export const saldoUpdate = async (user: User[]): Promise<User[]> => {
    const response = await api.put<User[]>(`/saldo`, user);
    return response.data;
}