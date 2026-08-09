import { NextResponse } from "next/server";
import { Resend } from "resend";
import { bookingEmail } from "@/lib/data";

export async function POST(request: Request) {
  const { nombre, email, asunto, mensaje } = await request.json();

  if (!nombre || !email || !asunto || !mensaje) {
    return NextResponse.json(
      { error: "Faltan campos requeridos." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "El servicio de correo no está configurado." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "The Antarctica Project <onboarding@resend.dev>",
      to: bookingEmail,
      replyTo: email,
      subject: `[Sitio web] ${asunto}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 500 },
    );
  }
}
