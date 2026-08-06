import api from "../api/axios";
import type { Transaction, TransactionResponse } from "../types/Transaction";

export const get = async (): Promise<Transaction[]> => {
  const response = await api.get<Transaction[]>("/");
  return response.data;
};

export const show = async (): Promise<TransactionResponse> => {
  const response = await api.get<TransactionResponse>("/transaction/my_transactions");
  return response.data;
};

export const create = async (transaction: Transaction): Promise<Transaction> => {
  const response = await api.post<Transaction>("/transaction/create", transaction);
  return response.data;
}

export const update = async (id: number, transaction: Transaction): Promise<Transaction> => {
  const response = await api.put<Transaction>(`/transaction/update/${id}`, transaction);
  return response.data;
}

export const destroy = async (id: number): Promise<any> => {
  const response = await api.delete(`/transaction/delete/${id}`);
  return response.data;
}