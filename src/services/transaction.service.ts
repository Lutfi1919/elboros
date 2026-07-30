import api from "../api/axios";
import type { Transaction } from "../types/Transaction";

export const get = async (): Promise<Transaction[]> => {
  const response = await api.get<Transaction[]>("/");
  return response.data;
};

export const show = async (): Promise<Transaction[]> => {
  const response = await api.get<Transaction[]>("/transaction/my_transactions");
  return response.data;
};

export const create = async (transaction: Transaction[]): Promise<Transaction[]> => {
  const response = await api.post<Transaction[]>("/transaction/create", transaction)
  return response.data;
}

export const update = async (transaction: Transaction[]): Promise<Transaction[]> => {
  const response = await api.put<Transaction[]>("/transaction/update", transaction)
  return response.data;
}

export const destroy = async (id: number): Promise<void> => {
  const response = await api.delete(`/transaction/delete/${id}`);
  return response.data;
}