export interface RegisterUser {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ActivationCode {
  code: string;
}
