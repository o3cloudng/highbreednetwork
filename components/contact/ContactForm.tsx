"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { SERVICE_CATEGORIES } from "@/lib/services-data";
import { contactFormSchema } from "@/lib/validations";
import { useState } from "react";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

const focusClasses =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const inputClasses =
  `w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 ${focusClasses}`;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`min-h-[44px] w-full rounded-md bg-brand-blue px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60 ${focusClasses} transition-colors`}
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-md bg-green-50 border border-green-200 p-6 text-center"
      >
        <p className="text-green-800 font-semibold text-lg">{state.message}</p>
        <p className="text-green-700 text-sm mt-1">
          We&apos;ll review your message and get back to you as soon as possible.
        </p>
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Client-side Zod validation before invoking the server action
    const form = e.currentTarget;
    const raw = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "",
      phone:
        (form.elements.namedItem("phone") as HTMLInputElement)?.value ?? "",
      email:
        (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "",
      serviceInterest:
        (form.elements.namedItem("serviceInterest") as HTMLSelectElement)
          ?.value ?? "",
      message:
        (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ??
        "",
    };

    const result = contactFormSchema.safeParse(raw);
    if (!result.success) {
      e.preventDefault();
      const errors: Record<string, string> = {};
      const flat = result.error.flatten().fieldErrors;
      for (const [field, msgs] of Object.entries(flat)) {
        if (msgs && msgs.length > 0) errors[field] = msgs[0];
      }
      setClientErrors(errors);
      return;
    }
    setClientErrors({});
  }

  // Merge server field errors with client errors; client takes precedence during
  // live typing, server errors show when client didn't catch something.
  const serverFieldErrors = state.fieldErrors ?? {};
  function fieldError(name: string): string | undefined {
    return clientErrors[name] ?? serverFieldErrors[name]?.[0];
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      {/* Server-level error banner */}
      {state.status === "error" && !state.fieldErrors && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          {state.message}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-required="true"
          aria-describedby={fieldError("name") ? "name-error" : undefined}
          className={inputClasses}
          placeholder="Your full name"
        />
        {fieldError("name") && (
          <p id="name-error" role="alert" className="mt-1 text-red-600 text-sm">
            {fieldError("name")}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          aria-required="true"
          aria-describedby={fieldError("phone") ? "phone-error" : undefined}
          className={inputClasses}
          placeholder="e.g. 08060617790"
        />
        {fieldError("phone") && (
          <p id="phone-error" role="alert" className="mt-1 text-red-600 text-sm">
            {fieldError("phone")}
          </p>
        )}
      </div>

      {/* Email Address (optional) */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-describedby={fieldError("email") ? "email-error" : undefined}
          className={inputClasses}
          placeholder="you@example.com"
        />
        {fieldError("email") && (
          <p id="email-error" role="alert" className="mt-1 text-red-600 text-sm">
            {fieldError("email")}
          </p>
        )}
      </div>

      {/* Service of Interest */}
      <div>
        <label
          htmlFor="serviceInterest"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Service of Interest
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          aria-describedby={
            fieldError("serviceInterest") ? "serviceInterest-error" : undefined
          }
          className={`${inputClasses} cursor-pointer`}
          defaultValue=""
        >
          <option value="">-- Select a service (optional) --</option>
          {SERVICE_CATEGORIES.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.title}
            </option>
          ))}
        </select>
        {fieldError("serviceInterest") && (
          <p
            id="serviceInterest-error"
            role="alert"
            className="mt-1 text-red-600 text-sm"
          >
            {fieldError("serviceInterest")}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span aria-hidden="true" className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-required="true"
          aria-describedby={fieldError("message") ? "message-error" : undefined}
          className={`${inputClasses} resize-y`}
          placeholder="Tell us about your vehicle or the service you need…"
        />
        {fieldError("message") && (
          <p
            id="message-error"
            role="alert"
            className="mt-1 text-red-600 text-sm"
          >
            {fieldError("message")}
          </p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
