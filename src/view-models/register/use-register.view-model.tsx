import { useRegisterMutation } from "@/src/shared/queries/auth/use-register.mutation";
import { useUserStore } from "@/src/shared/store/use-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerScheme, type RegisterFormData } from "./resgister.scheme";
export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
      phone: "",
    },
    resolver: zodResolver(registerScheme),
  });

  const onSubmit = handleSubmit(async (userData: RegisterFormData) => {
    const { confirmPassword, ...registerData } = userData;
    const response = await userRegisterMutation.mutateAsync(registerData);
    setSession({
      user: response.user,
      refreshToken: response.refreshToken,
      token: response.token,
    });
  });

  return {
    control,
    errors,
    onSubmit,
  };
};
