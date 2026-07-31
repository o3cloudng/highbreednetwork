"use server";

import { contactFormSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/send-email";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") ?? "",
    phone: formData.get("phone") ?? "",
    email: formData.get("email") ?? "",
    serviceInterest: formData.get("serviceInterest") ?? "",
    message: formData.get("message") ?? "",
  };

  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [field, errors] of Object.entries(
      result.error.flatten().fieldErrors
    )) {
      fieldErrors[field] = errors ?? [];
    }
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors,
    };
  }

  try {
    await sendContactEmail(result.data);
    return {
      status: "success",
      message: "Thank you! We'll be in touch soon.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong, please try again.",
    };
  }
}
