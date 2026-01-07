import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginUser, RegisterUser } from "@/types/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please input your username or email."),
  password: yup.string().required("Please input your password."),
});

function useLogin() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibilty = () => setIsVisible(!isVisible);

  const callbackUrl: string = (router.query.callbackUrl as string) || "/";

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  async function loginService(payload: LoginUser) {
    const result = await signIn("credentials", {
      ...payload,
      redirect: false,
      callbackUrl,
    });
    if (result?.error && result.status === 401) {
      throw new Error("Email or username is not match with your password.");
    }
  }

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onError(error) {
      setError("root", {
        message: error.message,
      });
    },
    onSuccess: () => {
      router.push(callbackUrl);
      reset();
    },
  });

  const handleLogin = (data: LoginUser) => mutateLogin(data);

  return {
    isVisible,
    toggleVisibilty,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  };
}

export default useLogin;
