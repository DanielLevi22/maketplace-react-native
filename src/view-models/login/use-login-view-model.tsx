import { useLoginMutation } from "@/src/shared/queries/auth/use-login.mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormData, loginScheme } from "./login.scheme";

export const useLoginViewModel = () => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await loginMutation.mutate(userFormData);
    console.log(userData);
  });
  return {
    control,
    onSubmit,
  };
};
