import { useMutation } from "@tanstack/react-query";

import * as AuthService from "../../ services/auths-services";
import type { RegisterHttpParams } from "../../interfaces/http/register";
import { useUserStore } from "../../store/use-store";

export const useRegisterMutation = () => {
  const { setSession } = useUserStore();

  const mutate = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      AuthService.register(userData),
    onSuccess: (response) => {
      setSession(response);
    },
    onError: () => {},
  });
  return mutate;
};
