import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "@/lib/db";
import { bookingEmail } from "@/lib/data";

const ERA_LABELS: Record<string, string> = {
  origins: "Desde los inicios / Sencillo Reset (2012)",
  timebreaker_transmute: "Era Timebreaker / Transmute (2017–2018)",
  aim: "Era AIM (2020)",
  chrono_reverie: "Recientemente con Chrono Reverie (2026)",
};

const DISCOVERY_LABELS: Record<string, string> = {
  friend: "Recomendación de un amigo / Boca a boca",
  playlist: "Playlist de Spotify, Apple Music o YouTube",
  algorithm: "Algoritmo / Redes sociales",
  live_show: "Show o tocata en vivo / Festival",
  press: "Prensa musical, e-zines o reseñas",
  other: "Otro",
};

const RELEASE_LABELS: Record<string, string> = {
  transmute: "Transmute (Álbum debut, 2018)",
  aim: "AIM (EP, 2020)",
  timebreaker: "Timebreaker (Single, 2017)",
  chrono_reverie: "Chrono Reverie (Single, 2026)",
};

const SOUND_LABELS: Record<string, string> = {
  aggression: "Agresividad, ritmos pesados y breakdowns",
  structures: "Estructuras complejas y métricas raras",
  atmosphere: "Capas atmosféricas, sintetizadores y secuencias",
  vocals: "Versatilidad vocal",
  narrative: "Narrativa de letras y estética visual/filosófica",
  execution: "Ejecución técnica de los instrumentos",
};

const PLATFORM_LABELS: Record<string, string> = {
  spotify: "Spotify",
  apple_music: "Apple Music",
  youtube: "YouTube / YouTube Music",
  bandcamp: "Bandcamp",
  other: "Otra",
};

const ATTENDED_LABELS: Record<string, string> = {
  several: "Sí, a varios shows",
  one: "Sí, a 1 show",
  not_yet: "Aún no, pero le gustaría asistir",
};

const MERCH_LABELS: Record<string, string> = {
  tshirt: "Polera / Camiseta estampada",
  hoodie: "Polerón / Hoodie",
  cd: "Formato físico: CD",
  vinyl: "Formato físico: Vinilo",
  accessories: "Accesorios (gorros, parches, stickers, uñetas)",
};

const DESIGN_LABELS: Record<string, string> = {
  illustrated: "Ilustrado / Oscuro",
  minimalist: "Minimalista / Streetwear",
  technical: "Técnico / Geométrico",
};

function label(map: Record<string, string>, value: unknown) {
  if (typeof value !== "string" || !value) return "—";
  return map[value] ?? value;
}

function labelList(map: Record<string, string>, values: unknown) {
  if (!Array.isArray(values) || values.length === 0) return "—";
  return values.map((v) => map[v] ?? v).join(", ");
}

export async function POST(request: Request) {
  const body = await request.json();

  const {
    city,
    era,
    discovery,
    discoveryOther,
    favoriteRelease,
    soundElements,
    platform,
    platformOther,
    attendedLive,
    nextCity,
    setlistSong,
    merchInterest,
    designStyle,
    feedback,
    wantsUpdates,
    email,
  } = body ?? {};

  const soundElementsArr = Array.isArray(soundElements) ? soundElements : [];
  const merchInterestArr = Array.isArray(merchInterest) ? merchInterest : [];

  try {
    const sql = getDb();
    await sql`
      INSERT INTO survey_responses (
        city, era, discovery, discovery_other, favorite_release,
        sound_elements, platform, platform_other, attended_live,
        next_city, setlist_song, merch_interest, design_style,
        feedback, wants_updates, email
      ) VALUES (
        ${city || null}, ${era || null}, ${discovery || null}, ${discoveryOther || null}, ${favoriteRelease || null},
        ${soundElementsArr}, ${platform || null}, ${platformOther || null}, ${attendedLive || null},
        ${nextCity || null}, ${setlistSong || null}, ${merchInterestArr}, ${designStyle || null},
        ${feedback || null}, ${Boolean(wantsUpdates)}, ${email || null}
      )
    `;
  } catch (err) {
    console.error("Survey DB insert failed:", err);
    return NextResponse.json(
      { error: "No se pudo guardar la respuesta." },
      { status: 500 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const lines = [
      `Ciudad/país: ${city || "—"}`,
      `Sigue la banda desde: ${label(ERA_LABELS, era)}`,
      `Cómo la descubrió: ${label(DISCOVERY_LABELS, discovery)}${discoveryOther ? ` (${discoveryOther})` : ""}`,
      "",
      `Lanzamiento favorito: ${label(RELEASE_LABELS, favoriteRelease)}`,
      `Elementos que más disfruta: ${labelList(SOUND_LABELS, soundElementsArr)}`,
      `Plataforma principal: ${label(PLATFORM_LABELS, platform)}${platformOther ? ` (${platformOther})` : ""}`,
      "",
      `Asistió a shows: ${label(ATTENDED_LABELS, attendedLive)}`,
      `Ciudad sugerida para próxima fecha: ${nextCity || "—"}`,
      `Canción infaltable en el setlist: ${setlistSong || "—"}`,
      "",
      `Merch de interés: ${labelList(MERCH_LABELS, merchInterestArr)}`,
      `Estilo de diseño preferido: ${label(DESIGN_LABELS, designStyle)}`,
      "",
      `Comentario: ${feedback || "—"}`,
      `Quiere recibir novedades: ${wantsUpdates ? "Sí" : "No"}`,
      `Email: ${email || "—"}`,
    ];

    try {
      await resend.emails.send({
        from: "The Antarctica Project <onboarding@resend.dev>",
        to: bookingEmail,
        replyTo: email || undefined,
        subject: "Nueva respuesta a la encuesta de fans",
        text: lines.join("\n"),
      });
    } catch (err) {
      console.error("Survey notification email failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
