export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    data: LoginPayload;
    token: string;
  }
}