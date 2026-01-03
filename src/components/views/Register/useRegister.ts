import { useState } from "react";

function useRegister() {
  const [visiblePassword, setVisiblePassword] = useState({
    password: false,
    passwordConfirm: false,
  });

  const handleVisiblePassword = (key: "password" | "passwordConfirm") => {
    setVisiblePassword({
      ...visiblePassword,
      [key]: !visiblePassword[key],
    });
  };

  return {
    visiblePassword,
    handleVisiblePassword,
  };
}

export default useRegister;
