"use client";

import { z } from "zod";

const LoginFormSchema = z.object({
  email: z
    .string()
    .email({ message: "Email is invalid" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 chracters or more" })
    .max(15, { message: "Password too long" }),
});

export default LoginFormSchema;
