import { User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export interface RegisterUser {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Login {
  identifier: string;
  password: string;
}

export interface ActivationCode {
  code: string;
}

export interface UserExtended extends User {
  accessToken?: string;
  role?: string;
}

export interface SessionExtended extends Session {
  accessToken?: string;
}

export interface JWTExtended extends JWT {
  user?: UserExtended;
}
