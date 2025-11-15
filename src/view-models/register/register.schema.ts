import z from "zod";
export const registerScheme = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
    phone: z
      .string()
      .regex(
        /^\d{10,11}$/,
        "Telefone deve conter apenas números e ter 10 ou 11 dígitos"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
export type RegisterFormData = z.infer<typeof registerScheme>;
