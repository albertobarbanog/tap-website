"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { AlertCircle, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { bookingEmail } from "@/lib/data";

const SOUND_MAX = 3;
const ACCENT = { accentColor: "#A9C4D4" };

type Status = "idle" | "sending" | "sent" | "error";

export default function SurveyForm() {
  const { lang } = useLanguage();
  const tr = (es: string, en: string) => (lang === "en" ? en : es);

  const [status, setStatus] = useState<Status>("idle");
  const [discovery, setDiscovery] = useState("");
  const [platform, setPlatform] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState("");
  const [soundElements, setSoundElements] = useState<string[]>([]);

  function toggleSound(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSoundElements((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      if (prev.length >= SOUND_MAX) return prev;
      return [...prev, value];
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      city: String(data.get("city") ?? ""),
      era: String(data.get("era") ?? ""),
      discovery: String(data.get("discovery") ?? ""),
      discoveryOther: String(data.get("discoveryOther") ?? ""),
      favoriteRelease: String(data.get("favoriteRelease") ?? ""),
      soundElements,
      platform: String(data.get("platform") ?? ""),
      platformOther: String(data.get("platformOther") ?? ""),
      attendedLive: String(data.get("attendedLive") ?? ""),
      nextCity: String(data.get("nextCity") ?? ""),
      setlistSong: String(data.get("setlistSong") ?? ""),
      merchInterest: data.getAll("merchInterest").map(String),
      designStyle: String(data.get("designStyle") ?? ""),
      feedback: String(data.get("feedback") ?? ""),
      wantsUpdates: data.get("wantsUpdates") === "yes",
      email: String(data.get("email") ?? ""),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/survey", {
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
          <p className="font-display text-lg tracking-wide-label text-text">
            {tr("¡GRACIAS POR RESPONDER!", "THANKS FOR ANSWERING!")}
          </p>
          <p className="mt-2 max-w-sm text-sm text-text-muted">
            {tr(
              "Tu respuesta nos ayuda muchísimo a seguir construyendo esto.",
              "Your answer genuinely helps us keep building this.",
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-16">
      <Block title={tr("Tu Conexión con la Banda", "Your Connection to the Band")}>
        <Question label={tr("¿En qué ciudad y país vives actualmente?", "What city and country do you currently live in?")}>
          <input
            type="text"
            name="city"
            placeholder={tr("Ej. Santiago, Chile", "E.g. Santiago, Chile")}
            className="w-full max-w-sm border-b border-line bg-transparent py-2 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
          />
        </Question>

        <Question label={tr("¿Desde qué era o lanzamiento sigues a la banda?", "Since which era or release have you followed the band?")}>
          <RadioOption name="era" value="origins" label={tr("Desde los inicios / Sencillo Reset (2012)", "Since the beginning / Reset single (2012)")} />
          <RadioOption name="era" value="timebreaker_transmute" label={tr("Era Timebreaker / Transmute (2017 – 2018)", "The Timebreaker / Transmute era (2017–2018)")} />
          <RadioOption name="era" value="aim" label={tr("Era AIM (2020)", "The AIM era (2020)")} />
          <RadioOption name="era" value="chrono_reverie" label={tr("Recientemente con Chrono Reverie (2026)", "Recently, with Chrono Reverie (2026)")} />
        </Question>

        <Question label={tr("¿Cómo descubriste a The Antarctica Project por primera vez?", "How did you first discover The Antarctica Project?")}>
          <RadioOption name="discovery" value="friend" label={tr("Recomendación de un amigo / Boca a boca", "A friend's recommendation / word of mouth")} checked={discovery === "friend"} onChange={() => setDiscovery("friend")} />
          <RadioOption name="discovery" value="playlist" label={tr("Playlist de Spotify, Apple Music o YouTube", "A Spotify, Apple Music, or YouTube playlist")} checked={discovery === "playlist"} onChange={() => setDiscovery("playlist")} />
          <RadioOption name="discovery" value="algorithm" label={tr("Algoritmo / Recomendaciones en Instagram, TikTok o Facebook", "Algorithm / recommendations on Instagram, TikTok, or Facebook")} checked={discovery === "algorithm"} onChange={() => setDiscovery("algorithm")} />
          <RadioOption name="discovery" value="live_show" label={tr("Show o tocata en vivo / Festival", "A live show or festival")} checked={discovery === "live_show"} onChange={() => setDiscovery("live_show")} />
          <RadioOption name="discovery" value="press" label={tr("Prensa musical, e-zines o reseñas (Rock Legacy, Discordancia, etc.)", "Music press, e-zines, or reviews (Rock Legacy, Discordancia, etc.)")} checked={discovery === "press"} onChange={() => setDiscovery("press")} />
          <RadioOption name="discovery" value="other" label={tr("Otro", "Other")} checked={discovery === "other"} onChange={() => setDiscovery("other")} />
          {discovery === "other" && (
            <input
              type="text"
              name="discoveryOther"
              placeholder={tr("¿Cómo?", "How?")}
              className="mt-1 w-full max-w-sm border-b border-line bg-transparent py-2 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
            />
          )}
        </Question>
      </Block>

      <Block title={tr("Preferencias Musicales y Concepto", "Musical Preferences and Concept")}>
        <Question label={tr("¿Cuál es tu trabajo o lanzamiento favorito hasta la fecha?", "What's your favorite release so far?")}>
          <RadioOption name="favoriteRelease" value="transmute" label={tr("Transmute (Álbum debut, 2018)", "Transmute (Debut album, 2018)")} />
          <RadioOption name="favoriteRelease" value="aim" label={tr("AIM (EP, 2020)", "AIM (EP, 2020)")} />
          <RadioOption name="favoriteRelease" value="timebreaker" label={tr("Timebreaker (Single, 2017)", "Timebreaker (Single, 2017)")} />
          <RadioOption name="favoriteRelease" value="chrono_reverie" label={tr("Chrono Reverie (Single, 2026)", "Chrono Reverie (Single, 2026)")} />
        </Question>

        <Question
          label={tr(
            "¿Qué elementos disfrutas más de nuestra propuesta sonora? (Puedes seleccionar hasta 3)",
            "What do you enjoy most about our sound? (Choose up to 3)",
          )}
        >
          <CheckboxOption
            name="soundElements"
            value="aggression"
            label={tr("La agresividad, ritmos pesados y breakdowns (Djent / Deathcore)", "The aggression, heavy rhythms, and breakdowns (djent / deathcore)")}
            checked={soundElements.includes("aggression")}
            onChange={toggleSound}
            disabled={!soundElements.includes("aggression") && soundElements.length >= SOUND_MAX}
          />
          <CheckboxOption
            name="soundElements"
            value="structures"
            label={tr("Las estructuras complejas, métricas raras y cambios de compás", "The complex structures, odd meters, and time signature changes")}
            checked={soundElements.includes("structures")}
            onChange={toggleSound}
            disabled={!soundElements.includes("structures") && soundElements.length >= SOUND_MAX}
          />
          <CheckboxOption
            name="soundElements"
            value="atmosphere"
            label={tr("Las capas atmosféricas, sintetizadores y secuencias", "The atmospheric layers, synths, and sequencing")}
            checked={soundElements.includes("atmosphere")}
            onChange={toggleSound}
            disabled={!soundElements.includes("atmosphere") && soundElements.length >= SOUND_MAX}
          />
          <CheckboxOption
            name="soundElements"
            value="vocals"
            label={tr("La versatilidad vocal (balance entre voces rasgadas/screams y melódicas)", "The vocal versatility (balance between screams and melodic vocals)")}
            checked={soundElements.includes("vocals")}
            onChange={toggleSound}
            disabled={!soundElements.includes("vocals") && soundElements.length >= SOUND_MAX}
          />
          <CheckboxOption
            name="soundElements"
            value="narrative"
            label={tr("La narrativa de las letras y la estética visual/filosófica", "The lyrical narrative and the visual/philosophical aesthetic")}
            checked={soundElements.includes("narrative")}
            onChange={toggleSound}
            disabled={!soundElements.includes("narrative") && soundElements.length >= SOUND_MAX}
          />
          <CheckboxOption
            name="soundElements"
            value="execution"
            label={tr("La ejecución técnica de los instrumentos", "The technical execution of the instruments")}
            checked={soundElements.includes("execution")}
            onChange={toggleSound}
            disabled={!soundElements.includes("execution") && soundElements.length >= SOUND_MAX}
          />
        </Question>

        <Question label={tr("¿En qué plataforma escuchas principalmente nuestra música?", "Which platform do you mainly listen to us on?")}>
          <RadioOption name="platform" value="spotify" label="Spotify" checked={platform === "spotify"} onChange={() => setPlatform("spotify")} />
          <RadioOption name="platform" value="apple_music" label="Apple Music" checked={platform === "apple_music"} onChange={() => setPlatform("apple_music")} />
          <RadioOption name="platform" value="youtube" label={tr("YouTube / YouTube Music", "YouTube / YouTube Music")} checked={platform === "youtube"} onChange={() => setPlatform("youtube")} />
          <RadioOption name="platform" value="bandcamp" label="Bandcamp" checked={platform === "bandcamp"} onChange={() => setPlatform("bandcamp")} />
          <RadioOption name="platform" value="other" label={tr("Otra", "Other")} checked={platform === "other"} onChange={() => setPlatform("other")} />
          {platform === "other" && (
            <input
              type="text"
              name="platformOther"
              placeholder={tr("¿Cuál?", "Which one?")}
              className="mt-1 w-full max-w-sm border-b border-line bg-transparent py-2 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
            />
          )}
        </Question>
      </Block>

      <Block title={tr("Experiencia en Vivo y Setlist", "Live Experience and Setlist")}>
        <Question label={tr("¿Has asistido a algún concierto o tocata en vivo de TAP?", "Have you been to a live TAP show?")}>
          <RadioOption name="attendedLive" value="several" label={tr("Sí, a varios shows", "Yes, to several shows")} />
          <RadioOption name="attendedLive" value="one" label={tr("Sí, a 1 show", "Yes, to 1 show")} />
          <RadioOption name="attendedLive" value="not_yet" label={tr("Aún no, pero me gustaría asistir", "Not yet, but I'd like to")} />
        </Question>

        <Question
          label={tr(
            "Si pudieras elegir la próxima ciudad o región para una fecha en vivo, ¿dónde debería ser?",
            "If you could pick the next city or region for a live date, where should it be?",
          )}
        >
          <input
            type="text"
            name="nextCity"
            placeholder={tr("Ej. Valparaíso, Concepción, Buenos Aires, etc.", "E.g. Valparaíso, Concepción, Buenos Aires, etc.")}
            className="w-full max-w-sm border-b border-line bg-transparent py-2 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
          />
        </Question>

        <Question label={tr("¿Qué canción NO puede faltar por ningún motivo en nuestro setlist en vivo?", "What song absolutely can't be missing from our live setlist?")}>
          <input
            type="text"
            name="setlistSong"
            className="w-full max-w-sm border-b border-line bg-transparent py-2 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
          />
        </Question>
      </Block>

      <Block title={tr("Merchandising y Productos Oficiales", "Merchandise and Official Products")}>
        <Question
          label={tr(
            "Si lanzáramos una nueva línea de merchandise oficial, ¿qué productos te interesaría comprar?",
            "If we launched a new official merch line, what would you be interested in buying?",
          )}
        >
          <CheckboxOption name="merchInterest" value="tshirt" label={tr("Polera / Camiseta estampada", "Printed t-shirt")} />
          <CheckboxOption name="merchInterest" value="hoodie" label={tr("Polerón / Hoodie", "Hoodie")} />
          <CheckboxOption name="merchInterest" value="cd" label={tr("Formato físico: CD (Transmute / AIM / Futuro disco)", "Physical format: CD (Transmute / AIM / future album)")} />
          <CheckboxOption name="merchInterest" value="vinyl" label={tr("Formato físico: Vinilo de colección", "Physical format: collector's vinyl")} />
          <CheckboxOption name="merchInterest" value="accessories" label={tr("Accesorios (Gorros, parches, stickers, uñetas, etc.)", "Accessories (beanies, patches, stickers, picks, etc.)")} />
        </Question>

        <Question label={tr("¿Qué línea gráfica o estilo de diseño prefieres para el merch de la banda?", "What graphic style do you prefer for the band's merch?")}>
          <RadioOption
            name="designStyle"
            value="illustrated"
            label={tr(
              "Ilustrado / Oscuro: arte detallado, estética metalcore moderna / sci-fi / naturaleza.",
              "Illustrated / Dark: detailed art, modern metalcore / sci-fi / nature aesthetic.",
            )}
          />
          <RadioOption
            name="designStyle"
            value="minimalist"
            label={tr(
              "Minimalista / Streetwear: diseños sobrios, tipografías limpias y marcas discretas.",
              "Minimalist / Streetwear: sober designs, clean typography, and discreet branding.",
            )}
          />
          <RadioOption
            name="designStyle"
            value="technical"
            label={tr(
              "Técnico / Geométrico: íconos, esquemas, coordenadas y símbolos conceptuales.",
              "Technical / Geometric: icons, diagrams, coordinates, and conceptual symbols.",
            )}
          />
        </Question>
      </Block>

      <Block title={tr("Comunidad y Feedback Abierto", "Community and Open Feedback")}>
        <Question label={tr("¿Tienes alguna sugerencia, comentario o mensaje para la banda?", "Any suggestion, comment, or message for the band?")}>
          <textarea
            name="feedback"
            rows={4}
            className="w-full resize-none border-b border-line bg-transparent py-2 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
          />
        </Question>

        <Question
          label={tr(
            "¿Te gustaría recibir antes que nadie avisos de nuevos lanzamientos, preventa de entradas y merchandising exclusivo?",
            "Would you like to be first to hear about new releases, ticket presales, and exclusive merch?",
          )}
        >
          <RadioOption
            name="wantsUpdates"
            value="yes"
            label={tr("Sí, quiero recibir novedades", "Yes, I want updates")}
            checked={wantsUpdates === "yes"}
            onChange={() => setWantsUpdates("yes")}
          />
          <RadioOption
            name="wantsUpdates"
            value="no"
            label={tr("No por ahora", "Not for now")}
            checked={wantsUpdates === "no"}
            onChange={() => setWantsUpdates("no")}
          />
          {wantsUpdates === "yes" && (
            <input
              type="email"
              name="email"
              placeholder={tr("Tu email", "Your email")}
              className="mt-1 w-full max-w-sm border-b border-line bg-transparent py-2 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
            />
          )}
        </Question>
      </Block>

      {status === "error" && (
        <p className="flex items-start gap-2 text-sm text-text-muted">
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-accent" />
          <span>
            {tr("No se pudo enviar tu respuesta. Intenta de nuevo o escríbenos a", "Your answer couldn't be sent. Please try again or email us at")}{" "}
            <a href={`mailto:${bookingEmail}`} className="font-mono text-accent hover:opacity-75">
              {bookingEmail}
            </a>
            .
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-fit items-center gap-2 border border-text px-7 py-3 text-xs tracking-wide-label text-text transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
      >
        {status === "sending" ? tr("Enviando...", "Sending...") : tr("Enviar respuesta", "Submit answer")}
        {status !== "sending" && <ArrowRight size={14} />}
      </button>
    </form>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8 border-t border-line pt-10 first:border-t-0 first:pt-0">
      <h3 className="font-display text-lg tracking-wide-label text-accent sm:text-xl">
        {title}
      </h3>
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  );
}

function Question({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="max-w-2xl text-sm text-text">{label}</p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function RadioOption({
  name,
  value,
  label,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm text-text-muted transition-colors hover:text-text">
      <input
        type="radio"
        name={name}
        value={value}
        checked={onChange ? checked : undefined}
        defaultChecked={onChange ? undefined : false}
        onChange={onChange}
        style={ACCENT}
        className="mt-0.5 h-4 w-4 shrink-0"
      />
      {label}
    </label>
  );
}

function CheckboxOption({
  name,
  value,
  label,
  checked,
  onChange,
  disabled,
}: {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <label
      className={`flex items-start gap-3 text-sm transition-colors ${
        disabled
          ? "cursor-not-allowed text-text-faint"
          : "cursor-pointer text-text-muted hover:text-text"
      }`}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={onChange ? checked : undefined}
        defaultChecked={onChange ? undefined : false}
        onChange={onChange}
        disabled={disabled}
        style={ACCENT}
        className="mt-0.5 h-4 w-4 shrink-0"
      />
      {label}
    </label>
  );
}
