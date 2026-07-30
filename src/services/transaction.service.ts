import api from "../api/axios";
import type { Transaction } from "../types/Transaction";

export const get = async (): Promise<Transaction[]> => {
  const response = await api.get<Transaction[]>("/");
  return response.data;
};
