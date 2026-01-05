import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.contants";
import { ActivationCode, Login, RegisterUser } from "@/types/Auth";

export const authServices = {
  register: (payload: RegisterUser) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
  activation: (payload: ActivationCode) =>
    instance.post(`${endpoint.AUTH}/activation`, payload),
  login: (payload: Login) => instance.post(`${endpoint.AUTH}/login`, payload),
  getProfileWithToken: (token: string) =>
    instance.get(`${endpoint.AUTH}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
