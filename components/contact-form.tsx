"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { getSupabaseBrowserClient } from "@/lib/supabase";

type ContactFields = { name: string; email: string; message: string; website: string };
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

const initialFields: ContactFields = { name: "", email: "", message: "", website: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof ContactFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: FieldErrors = {};
    if (!fields.name.trim()) nextErrors.name = "Enter your name.";
    if (!fields.email.trim()) nextErrors.email = "Enter your email address.";
    else if (!emailPattern.test(fields.email)) nextErrors.email = "Enter a valid email address.";
    if (!fields.message.trim()) nextErrors.message = "Tell me a little about your project.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    if (fields.website) {
      setFields(initialFields);
      toast.success("Your message has been sent, i would get back to you as soon as possible");
      return;
    }

    setIsSubmitting(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.from("contacts").insert({
        name: fields.name.trim(),
        email: fields.email.trim().toLowerCase(),
        message: fields.message.trim(),
      });
      if (error) throw error;
      setFields(initialFields);
      toast.success("Your message has been sent, i would get back to you as soon as possible.");
    } catch (error) {
      console.error("Unable to send contact message:", error);
      toast.error("Your message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit} noValidate>
    <div className="contact-form-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" value={fields.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} disabled={isSubmitting} />{errors.name && <p id="contact-name-error" className="field-error">{errors.name}</p>}</div>
    <div className="contact-form-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" value={fields.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} disabled={isSubmitting} />{errors.email && <p id="contact-email-error" className="field-error">{errors.email}</p>}</div>
    <div className="contact-form-field"><label htmlFor="contact-message">What are you working on?</label><textarea id="contact-message" name="message" rows={5} value={fields.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} disabled={isSubmitting} />{errors.message && <p id="contact-message-error" className="field-error">{errors.message}</p>}</div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={fields.website} onChange={(event) => updateField("website", event.target.value)} /></div>
    <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending message..." : "Send message"}<span aria-hidden="true">↗</span></button>
  </form>;
}
