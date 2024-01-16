import { z } from 'zod';

export const LoginSchema = z.object({
  // username: z.string().min(3, 'Username is too short').max(20, 'Username is too long'),
  email: z.string().email('Correo electronico invalido!').min(5, 'La contrasena es muy corta'),
  password: z.string().min(5, 'La contrasena es muy corta'),
});
export type TLoginSchema = z.infer<typeof LoginSchema>;


