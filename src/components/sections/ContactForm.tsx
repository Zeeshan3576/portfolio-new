"use client";

import { useState, type FormEvent } from "react";

import { FormField } from "@/components/sections/FormField";
import { PROFILE } from "@/content/site";

type TFieldName = "name" | "email" | "subject" | "message";
type TFieldErrors = Partial<Record<TFieldName, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): TFieldErrors {
  const value = (field: TFieldName) => String(data.get(field) ?? "").trim();
  const errors: TFieldErrors = {};

  if (!value("name")) errors.name = "Please enter your name.";
  if (!value("email")) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(value("email"))) errors.email = "Please enter a valid email.";
  if (!value("subject")) errors.subject = "Please enter a subject.";
  if (!value("message")) errors.message = "Please enter a message.";

  return errors;
}

/**
 * UI-only for now: there is no backend, so a valid submission shows a notice
 * instead of sending. Wiring up delivery is a separate, pending decision.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<TFieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(new FormData(event.currentTarget));
    setErrors(nextErrors);
    setIsSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
      <FormField id="name" label="Name" placeholder="John Doe" autoComplete="name" error={errors.name} />
      <FormField id="email" label="Email" type="email" autoComplete="email" error={errors.email} />
      <FormField id="subject" label="Subject" error={errors.subject} />
      <FormField id="message" label="Message" multiline error={errors.message} />

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          className="h-[54px] rounded-full bg-accent px-10 text-base font-bold uppercase text-background transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Submit
        </button>
        <p role="status" className="text-sm text-muted">
          {isSubmitted &&
            `Thanks! This form isn't connected yet, so please email ${PROFILE.email} directly.`}
        </p>
      </div>
    </form>
  );
}
