export interface User {
  name: string;
  password: string;
  email: string;
  saldo: number;
}

export interface UserResponse {
  data: User
}
