import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.contants";
import { RegisterUser } from "@/types/Auth";

export const authServices = {
  register: (payload: RegisterUser) =>
    instance.post(`${endpoint.AUTH}/register`, payload),
};
