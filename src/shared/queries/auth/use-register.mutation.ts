import { useMutation } from "@tanstack/react-query";
import { register } from "../../ services/auths-services";
import { RegisterHttpParams } from "../../interfaces/http/register";
import { useUserStore } from "../../store/use-store";

interface UseRegisterMutationParams {
  onSuccess?: () => void;
}

export const useRegisterMutation = ({
  onSuccess,
}: UseRegisterMutationParams = {}) => {
  const { setSession } = useUserStore();

  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpParams) => register(userData),
    onSuccess: (response) => {
      console.log("response", response);
      setSession({
        refreshToken: response.refreshToken,
        token: response.token,
        user: response.user,
      });
      onSuccess?.();
    },
    onError: (error) => {
      console.log("error register", error);
    },
  });

  return mutation;
};
