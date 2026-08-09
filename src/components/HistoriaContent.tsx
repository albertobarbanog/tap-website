"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HistoriaContent() {
  const { t, lang } = useLanguage();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <header className="text-center">
        <span className="text-sm tracking-wider-label text-text-muted">
          {t("historia.eyebrow")}
        </span>
        <h1 className="font-display mt-4 text-4xl tracking-wide-label text-text sm:text-5xl">
          {t("historia.title")}
        </h1>
        <span className="font-display mt-3 block text-xs tracking-wider-label text-accent sm:text-sm">
          THE ANTARCTICA PROJECT
        </span>
      </header>

      <div className="relative mt-16 aspect-[3/4] w-full overflow-hidden">
        <Image
          src="/images/banda-historia.jpg"
          alt="The Antarctica Project en Santiago"
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover object-top grayscale"
        />
      </div>

      <div className="mt-20 flex flex-col gap-20">
        {lang === "en" ? <BiographyEN /> : <BiographyES />}
      </div>
    </article>
  );
}

function BiographyES() {
  return (
    <>
      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Origen y Significado
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            La historia de la banda se remonta a 2011, cuando la idea
            comenzó a gestarse en el segundo piso de la casa de Alberto
            junto a José Ramírez y Felipe Cuevas (Destinos / Estudio
            Arrebol).
            Impulsados por el impacto que dejó en ellos haber escuchado{" "}
            <em className="text-text">Discoveries</em> de Northlane, surgió
            la intención de explorar el peso técnico, la afinación baja y
            las atmósferas del metalcore progresivo moderno. Bajo el nombre{" "}
            <em className="text-text">Antarctica</em>, el grupo alcanzó a
            materializar su primer hito con el sencillo{" "}
            <em className="text-text">Reset</em> (2012) tras ganar un
            concurso de grabación. Aunque esa primera etapa se disolvió poco
            después, la semilla del proyecto quedó plantada.
          </p>
          <p>
            El nombre Antarctica conectaba de forma natural con la
            geografía e identidad chilena, evocando la fuerza simbólica de
            un territorio lejano, cargado de enigmas y secretos sepultados
            bajo el hielo. En 2016, José Ramírez y Alberto Barbano
            decidieron revivir la banda con una visión renovada y un nuevo
            nombre: <em className="text-text">The Antarctica Project</em>.
            Añadir la palabra &ldquo;Project&rdquo; no fue una decisión
            cosmética; le dio una impronta más seria y declaró la
            naturaleza fundamental del grupo: un trabajo en permanente
            construcción, sin la pretensión de quedarse en una forma
            estática.
          </p>
          <p>
            Ese nuevo impulso se concretó rápidamente en 2017 con el
            sencillo <em className="text-text">Timebreaker</em>, su primer
            lanzamiento oficial bajo el nuevo nombre (que les valió una
            nominación a los Premios Escuchar 2018).
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          La Era &lsquo;Transmute&rsquo; (2018)
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            En 2018, la banda dio el paso definitivo hacia su primer álbum
            de larga duración con <em className="text-text">Transmute</em>.
            En esta etapa clave, José Ramírez se desempeñó como el
            vocalista de la era Transmute y el creador de las letras de esa
            etapa. Paralelamente, se destaca la llegada de Andrés Olivares
            en la batería y Jaime García en el bajo, aportando una
            solidez rítmica, un groove técnico y una potencia fundamental
            para definir la nueva arquitectura sonora del grupo.
          </p>
          <p>
            Concebido como una obra conceptual, el disco trasladó a lo
            visual y lo sonoro una estética azul, prístina y cristalina
            —superficies que parecen hielo o vidrio a punto de
            fracturarse— funcionando como espejo directo del concepto del
            álbum: la mutación, el tiempo que se estira o se quiebra, y el
            ciclo de creación y destrucción.
          </p>
          <p>
            <em className="text-text">Transmute</em> se probó en los
            escenarios con un show de lanzamiento totalmente
            autoproducido, estableciendo el nivel de exigencia técnica, las
            secuencias complejas y la pulcritud sonora que caracterizan a
            la banda en vivo.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Evolución, &lsquo;AIM&rsquo; y la Gira a Córdoba (2019 – 2020)
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            El camino de The Antarctica Project ha estado definido por la
            resistencia dentro del underground chileno y la capacidad de
            superar contratiempos. En 2019, durante su primera gira
            internacional a Córdoba, Argentina, la banda enfrentó la salida
            repentina de su vocalista horas antes del show. Lejos de
            cancelar, se presentaron en formato 100% instrumental,
            convirtiendo la dificultad en un hito de solidez técnica. Tras
            esta etapa de transición, el guitarrista Alberto Barbano asumió
            el rol de frontman para liderar la proyección del grupo.
          </p>
          <p>
            En 2020, en pleno confinamiento por la pandemia, lanzaron el EP{" "}
            <em className="text-text">AIM</em>, marcando una clara
            evolución sonora hacia matices más ambientales y expansivos. En
            esta época se destaca de forma clave la llegada de João Riveros
            en la voz —quien aportó un amplio registro dinámico capaz de
            cantar limpio de diversas maneras aparte de los gritos y
            guturales— junto a la incorporación de Gustavo Plaza en el
            bajo, consolidando una línea rítmica y vocal renovada.
          </p>
          <p>
            <em className="text-text">AIM</em> introdujo baterías acústicas
            grabadas y una lírica profundamente conceptual. Las letras de
            la banda comenzaron a nutrirse tanto de la filosofía como de la
            cultura pop, explorando emociones humanas y dilemas
            existenciales. <em className="text-text">AIM</em> logró
            nominaciones a Mejor Portada en los Premios Índigo 2020 y a
            Mejor Disco de Metal Extremo en los Premios Escuchar 2021.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          La Consolidación y el Lanzamiento de &lsquo;Chrono
          Reverie&rsquo; (2026)
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            Con la formación integrada por João Riveros (voz), Alberto
            Barbano (guitarra), Andrés Olivares (batería), Felipe Cuevas
            (guitarra) y Gustavo Plaza (bajo), The Antarctica Project
            inició una nueva etapa de madurez artística y mayor ambición
            técnica.
          </p>
          <p>
            En marzo de 2026, la banda estrenó mundialmente su sencillo y
            video oficial &ldquo;Chrono Reverie&rdquo;, un trabajo que
            lleva la propuesta conceptual del grupo a su punto más
            elevado. Con una producción audiovisual impecable y una
            lírica cargada de metáforas sobre el tiempo, la memoria, el
            impresionismo y las dinámicas familiares creadoras y
            destructoras, &ldquo;Chrono Reverie&rdquo; reafirma la
            identidad de TAP: metalcore progresivo de precisión,
            atmósferas densas y una narrativa donde la música y la
            estética visual se funden en una sola experiencia.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Formación Actual
        </h2>
        <ul className="mt-6 flex flex-col gap-2 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base">
          <li>João Riveros — Voz</li>
          <li>Alberto Barbano — Guitarra</li>
          <li>Felipe Cuevas — Guitarra</li>
          <li>Gustavo Plaza — Bajo</li>
          <li>Andrés Olivares — Batería</li>
        </ul>
      </section>
    </>
  );
}

function BiographyEN() {
  return (
    <>
      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Origin and Meaning
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            The band&rsquo;s story goes back to 2011, when the idea first
            started taking shape on the second floor of Alberto&rsquo;s
            house, alongside José Ramírez and Felipe Cuevas (Destinos /
            Estudio Arrebol). Driven by the impact of hearing Northlane&rsquo;s{" "}
            <em className="text-text">Discoveries</em>, the three of them
            set out to explore the technical weight, low tunings, and
            atmospheres of modern progressive metalcore. Under the name{" "}
            <em className="text-text">Antarctica</em>, the group reached
            its first real milestone with the single{" "}
            <em className="text-text">Reset</em> (2012), released after
            winning a recording contest. That first chapter dissolved not
            long after, but the seed of the project had already been
            planted.
          </p>
          <p>
            The name Antarctica connected naturally with Chilean geography
            and identity, evoking the symbolic weight of a distant
            territory, full of mysteries and secrets buried under the ice.
            In 2016, José Ramírez and Alberto Barbano decided to revive the
            band with a renewed vision and a new name:{" "}
            <em className="text-text">The Antarctica Project</em>. Adding
            the word &ldquo;Project&rdquo; wasn&rsquo;t a cosmetic choice;
            it gave the name a more serious edge and declared the
            group&rsquo;s fundamental nature: a permanent work in
            progress, with no pretension of ever settling into a fixed,
            final form.
          </p>
          <p>
            That new momentum quickly took shape in 2017 with the single{" "}
            <em className="text-text">Timebreaker</em>, their first
            official release under the new name — one that earned them a
            nomination at the 2018 Premios Escuchar.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          The &lsquo;Transmute&rsquo; Era (2018)
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            In 2018, the band took the definitive step toward their first
            full-length album with{" "}
            <em className="text-text">Transmute</em>. During this key
            stage, José Ramírez served as the vocalist of the Transmute
            era and the writer of its lyrics. Alongside him, the arrival
            of Andrés Olivares on drums and Jaime García on bass brought a
            rhythmic solidity, a technical groove, and a fundamental power
            that helped define the band&rsquo;s new sonic architecture.
          </p>
          <p>
            Conceived as a concept record, the album carried a blue,
            pristine, crystalline aesthetic into both its sound and its
            visuals — surfaces that look like ice or glass on the verge of
            fracturing — working as a direct mirror of the album&rsquo;s
            concept: mutation, time that stretches or breaks, and the
            cycle of creation and destruction.
          </p>
          <p>
            <em className="text-text">Transmute</em> was put to the test
            on stage with a fully self-produced release show, setting the
            standard for technical demand, complex sequencing, and sonic
            precision that would go on to define the band live.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Evolution, &lsquo;AIM,&rsquo; and the Córdoba Tour (2019–2020)
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            The Antarctica Project&rsquo;s path has been defined by
            persistence within the Chilean underground and an ability to
            push through setbacks. In 2019, during their first
            international tour to Córdoba, Argentina, the band faced the
            sudden departure of their vocalist just hours before the show.
            Rather than cancel, they played the set entirely instrumental,
            turning the setback into a milestone of technical solidity.
            Following this transitional stage, guitarist Alberto Barbano
            stepped into the role of frontman to lead the band&rsquo;s next
            chapter.
          </p>
          <p>
            In 2020, in the middle of the pandemic lockdown, they released
            the EP <em className="text-text">AIM</em>, marking a clear
            sonic evolution toward more ambient, expansive textures. This
            period saw the key arrival of João Riveros on vocals — who
            brought a wide dynamic range capable of clean singing in
            multiple styles beyond screams and growls — alongside the
            addition of Gustavo Plaza on bass, consolidating a renewed
            rhythmic and vocal lineup.
          </p>
          <p>
            <em className="text-text">AIM</em> introduced recorded acoustic
            drums and a deeply conceptual set of lyrics. The band&rsquo;s
            writing began drawing from both philosophy and pop culture,
            exploring human emotions and existential dilemmas.{" "}
            <em className="text-text">AIM</em> went on to earn nominations
            for Best Cover Art at the 2020 Premios Índigo and Best Extreme
            Metal Album at the 2021 Premios Escuchar.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Consolidation and the Release of &lsquo;Chrono Reverie&rsquo;
          (2026)
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            With a lineup now made up of João Riveros (vocals), Alberto
            Barbano (guitar), Andrés Olivares (drums), Felipe Cuevas
            (guitar), and Gustavo Plaza (bass), The Antarctica Project
            entered a new stage of artistic maturity and greater technical
            ambition.
          </p>
          <p>
            In March 2026, the band premiered their single and official
            video for &ldquo;Chrono Reverie&rdquo; worldwide, a work that
            pushes the group&rsquo;s conceptual vision to its highest
            point yet. With impeccable audiovisual production and lyrics
            layered with metaphors about time, memory, impressionism, and
            the creative and destructive dynamics of family, &ldquo;Chrono
            Reverie&rdquo; reaffirms TAP&rsquo;s identity: precision
            progressive metalcore, dense atmospheres, and a narrative
            where music and visual aesthetics merge into a single
            experience.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Current Lineup
        </h2>
        <ul className="mt-6 flex flex-col gap-2 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base">
          <li>João Riveros — Vocals</li>
          <li>Alberto Barbano — Guitar</li>
          <li>Felipe Cuevas — Guitar</li>
          <li>Gustavo Plaza — Bass</li>
          <li>Andrés Olivares — Drums</li>
        </ul>
      </section>
    </>
  );
}
