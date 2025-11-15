import { useMutation } from "@tanstack/react-query";
import { login } from "../../ services/auths-services";
import { LoginHttpParams } from "../../interfaces/http/login";
import { useUserStore } from "../../store/use-store";

export const useLoginMutation = () => {
  const { setSession } = useUserStore();
  const mutation = useMutation({
    mutationFn: (userData: LoginHttpParams) => login(userData),
    onSuccess: (response) => {
      console.log(response);

      setSession({
        refreshToken: response.refreshToken,
        token: response.token,
        user: response.user,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
};
