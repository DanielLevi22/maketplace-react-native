import { useRegisterMutation } from "@/src/shared/queries/auth/use-register.mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerScheme, type RegisterFormData } from "./resgister.scheme";
export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
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
    await userRegisterMutation.mutateAsync(registerData);
  });

  return {
    control,
    errors,
    onSubmit,
  };
};
