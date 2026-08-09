"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { bookingEmail } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [replyTo, setReplyTo] = useState("");
  const { t } = useLanguage();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      nombre: String(data.get("nombre") ?? ""),
      email: String(data.get("email") ?? ""),
      asunto: String(data.get("asunto") ?? ""),
      mensaje: String(data.get("mensaje") ?? ""),
    };

    setReplyTo(payload.email);
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 border border-line bg-bg-elevated px-8 py-12">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-dim text-accent">
          <Check size={18} />
        </div>
        <div>
          <p className="font-display text-lg font-semibold tracking-wide-label text-text">
            {t("contacto.sentTitle")}
          </p>
          <p className="mt-2 max-w-sm text-sm text-text-muted">
            {t("contacto.sentBody1")}{" "}
            <span className="font-mono text-text">{replyTo}</span>{" "}
            {t("contacto.sentBody2")}
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

      {status === "error" && (
        <p className="flex items-start gap-2 text-sm text-text-muted">
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-accent" />
          <span>
            {t("contacto.error")}{" "}
            <a
              href={`mailto:${bookingEmail}`}
              className="font-mono text-accent hover:opacity-75"
            >
              {bookingEmail}
            </a>
            .
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 flex w-fit items-center gap-2 border border-text px-7 py-3 text-xs tracking-wide-label text-text transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
      >
        {status === "sending" ? t("contacto.sending") : t("contacto.send")}
        {status !== "sending" && <ArrowRight size={14} />}
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
