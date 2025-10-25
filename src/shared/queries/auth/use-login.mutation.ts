import { useMutation } from "@tanstack/react-query";
import { login } from "../../ services/auths-services";
import { LoginHttpParams } from "../../interfaces/http/login";

export const useLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => login(userData),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
};
