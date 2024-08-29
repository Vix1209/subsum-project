import { z } from "zod";

const AirtimeFormSchema = z.object({
  phone: z.coerce
    .number()
    .int()
    .min(0, { message: "Phone number is required" }),

  amount: z.coerce.number().int().min(0, { message: "Field is required" }),

  pin: z.coerce.number().int().min(0, { message: "Pin is required" }),
});

export default AirtimeFormSchema;
