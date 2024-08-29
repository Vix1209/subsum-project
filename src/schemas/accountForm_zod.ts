import { z } from "zod";

const AccountFormSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, { message: "Password must be 6 chracters or more" })
      .max(15, { message: "Password too long" }),
    newPassword: z
      .string()
      .min(6, { message: "Password must be 6 chracters or more" })
      .max(15, { message: "Password too long" }),
    confirmNewPassword: z.string().min(0),
    currentPin: z
      .string()
      .min(6, { message: "Pin must be 6 integers" })
      .max(7, { message: "Pin too long" }),
    newPin: z
      .string()
      .min(6, { message: "Pin must be 6 integers" })
      .max(7, { message: "Pin too long" }),
    confirmNewPin: z.string().min(0),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords must match",
    path: ["confirmNewPassword"],
  })
  .refine((data) => data.newPin === data.confirmNewPin, {
    message: "Pin must match",
    path: ["confirmNewPin"],
  })
export default AccountFormSchema;
