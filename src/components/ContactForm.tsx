"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { bookingEmail } from "@/lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "");
    const email = String(data.get("email") ?? "");
    const asunto = String(data.get("asunto") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");

    const subject = `[Sitio web] ${asunto}`;
    const body = `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`;
    const mailto = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 border border-line bg-bg-elevated px-8 py-12">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-dim text-accent">
          <Check size={18} />
        </div>
        <div>
          <p className="font-display text-lg tracking-wide-label text-text">
            {t("contacto.sentTitle")}
          </p>
          <p className="mt-2 max-w-sm text-sm text-text-muted">
            {t("contacto.sentBody1")}{" "}
            <span className="font-mono text-text">{bookingEmail}</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <Field label={t("contacto.name")} name="nombre" type="text" required />
      <Field label={t("contacto.email")} name="email" type="email" required />
      <Field
        label={t("contacto.subject")}
        name="asunto"
        type="text"
        required
      />

      <label className="flex flex-col gap-2">
        <span className="text-xs tracking-wide-label text-text-faint">
          {t("contacto.message")}
        </span>
        <textarea
          name="mensaje"
          required
          rows={5}
          className="resize-none border-b border-line bg-transparent py-2 text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="mt-4 flex w-fit items-center gap-2 border border-text px-7 py-3 text-xs tracking-wide-label text-text transition-colors hover:border-accent hover:text-accent"
      >
        {t("contacto.send")}
        <ArrowRight size={14} />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs tracking-wide-label text-text-faint">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="border-b border-line bg-transparent py-2 text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
      />
    </label>
  );
}
