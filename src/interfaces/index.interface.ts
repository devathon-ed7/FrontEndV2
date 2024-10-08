export interface AuthState {
  checking: boolean;
  errorMessage: string | undefined;
  status: StatusSession;
  user: User | undefined;
}

export type StatusSession = "authenticated" | "not-authenticated" | "checking";

export interface UserLogin extends Required<Pick<User, "userName">> {
  password: string;
}

export interface User {
  userName?: string;
  role?: string;
}
