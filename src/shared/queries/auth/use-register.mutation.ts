import { useMutation } from "@tanstack/react-query";

import * as AuthService from "../../ services/auths-services";
import type { RegisterHttpParams } from "../../interfaces/http/register";

export const useRegisterMutation = () => {
  const mutate = useMutation({
    mutationFn: (userData: RegisterHttpParams) =>
      AuthService.register(userData),
    onSuccess: ({}) => {},
    onError: () => {},
  });
  return mutate;
};
