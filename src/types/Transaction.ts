export interface Transaction {
  user_id: number;
  judul: string;
  nominal: number;
  catatan: string;
  createdAt?: string;
}

export interface TransactionResponse {
  data: Transaction[];
}
