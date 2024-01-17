import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Correo electronico invalido!').min(5, 'La contrasena es muy corta'),
  password: z.string().min(5, 'La contrasena es muy corta'),
});
export type TLoginSchema = z.infer<typeof LoginSchema>;


export const SignUpSchema = z.object({
  fullName: z.string().min(4, 'El nombre es muy corto').max(35, 'El nombre es muy extenso'),
  email: z.string().email('Correo electronico invalido!').min(5, 'La contrasena es muy corta'),
  password: z.string().min(5, 'La contrasena es muy corta'),
  age: z.string().min(1, 'Menores de 9 no son permitidos'),
});
export type TSignUpSchema = z.infer<typeof SignUpSchema>;

export const RecoverPwdSchema = z.object({
  email: z.string().email('Correo electronico invalido!').min(5, 'La contrasena es muy corta'),
});
export type TRecoverPwdSchema = z.infer<typeof RecoverPwdSchema>;

