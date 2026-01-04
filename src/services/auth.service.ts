import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.contants";
import { ActivationCode, RegisterUser } from "@/types/Auth";

export const authServices = {
  register: (payload: RegisterUser) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
  activation: (payload: ActivationCode) =>
    instance.post(`${endpoint.AUTH}/activation`, payload),
};
