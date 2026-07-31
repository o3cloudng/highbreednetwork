import { z } from "zod";

export const contactFormSchema = z.object({
  name:            z.string().min(2, "Name is required"),
  phone:           z.string().min(7, "Phone number is required"),
  email:           z.string().email("Invalid email").optional().or(z.literal("")),
  serviceInterest: z.enum([
    "vehicle-diagnostics",
    "ecu-programming",
    "key-immobilizer",
    "hybrid-ev",
    "anti-theft-tracking",
    "performance-tuning",
    "dash-cam",
    "",
  ]),
  message:         z.string().min(10, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
