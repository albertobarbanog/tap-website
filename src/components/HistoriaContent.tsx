"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function HistoriaContent() {
  const { t, lang } = useLanguage();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <header className="text-center">
        <span className="text-xs tracking-wider-label text-text-faint">
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
            Todo empezó en el segundo piso de la casa de Alberto, en
            Santiago: dos guitarras, un amplificador compartido y las tardes
            que le sobraban a José después del liceo. No había plan, ni
            nombre, ni fecha de partida. Había, eso sí, la misma pregunta
            repetida semana tras semana: qué pasaría si esas ideas sueltas —
            un riff, un cambio de compás, una progresión que no calzaba con
            nada que estuvieran escuchando en ese momento — se dejaban crecer
            en lugar de descartarlas.
          </p>
          <p>
            El nombre llegó antes que la banda misma. Se llamaron{" "}
            <em className="text-text">Antarctica</em>: una palabra que
            cargaba distancia, vacío, un lugar que casi nadie pisa. Con el
            tiempo, a medida que la formación se estabilizaba y el proyecto
            dejaba de ser un ensayo de fin de semana para convertirse en algo
            con continuidad, el nombre mutó a{" "}
            <em className="text-text">The Antarctica Project</em>. El cambio
            no fue cosmético: la palabra &ldquo;proyecto&rdquo; declaraba lo
            que la banda quería ser desde el principio, un trabajo en
            construcción permanente, sin la pretensión de llegar a una forma
            final y quedarse ahí.
          </p>
          <p>
            Esa lógica de construcción constante definió también el sonido.
            Ni Alberto ni José querían repetir la fórmula directa del
            metalcore clásico — breakdown, estribillo, breakdown — sin
            cuestionarla. Empezaron a estirar las estructuras, a meter
            compases impares donde el oído esperaba algo cuadrado, a tratar
            la agresión y la complejidad como dos caras de la misma canción
            en lugar de dos géneros distintos. De ahí nace el término que hoy
            usan para describirse: <em className="text-text">
              metalcore progresivo
            </em>, un punto de encuentro entre el peso físico del breakdown y
            la curiosidad estructural de lo progresivo.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          La Era &lsquo;Transmute&rsquo; y la Evolución Sonora
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            En 2018, esas primeras ideas del segundo piso se convirtieron en{" "}
            <em className="text-text">Transmute</em>, el álbum debut de la
            banda. Fue el primer intento serio de traducir a un disco
            completo lo que hasta entonces solo existía en maquetas: una
            propuesta que exigía tanto de la técnica instrumental como de la
            capacidad de la banda para sostener una idea a lo largo de una
            canción entera, sin resolverla demasiado rápido.
          </p>
          <p>
            <em className="text-text">Transmute</em> se construyó como un
            disco conceptual, organizado alrededor de un puñado de ideas que
            se repiten y se transforman entre canción y canción: el espacio
            como vacío y como posibilidad, el tiempo como algo que se puede
            estirar o quebrar, y el ciclo de creación y destrucción como
            motor de cualquier cambio real. La mutación del título no era
            solo una imagen — era literalmente lo que le pasaba al material
            sonoro de una pista a la siguiente.
          </p>
          <p>
            Esa idea de mutación se hizo visible también fuera de la música.
            Desde el arte de portada hasta el primer merch, la banda adoptó
            una estética azul y cristalina — superficies que parecen hielo o
            vidrio a punto de fracturarse — que funcionaba como espejo
            directo del concepto del disco. No fue una decisión improvisada:
            cada elemento visual de la era{" "}
            <em className="text-text">Transmute</em> se pensó con el mismo
            cuidado que una canción, entendiendo que la identidad de la banda
            no terminaba en el audio.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Madurez y Presente
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            Los años que siguieron a{" "}
            <em className="text-text">Transmute</em> fueron, sobre todo,
            años de resistencia. Sostener una banda de metalcore progresivo
            dentro del underground chileno significa tocar en salas
            pequeñas, cargar los propios equipos, y volver a empezar cada
            vez que la formación cambia — algo que The Antarctica Project ha
            enfrentado más de una vez sin detener el proyecto ni una sola
            vez.
          </p>
          <p>
            Con los años, esa resistencia se transformó en precisión. Lo que
            en <em className="text-text">Transmute</em> era ambición hoy es
            oficio: cambios de compás ejecutados con exactitud, arreglos que
            se pulen en el ensayo antes de llegar al escenario, un nivel de
            exigencia técnica que la banda se impone a sí misma disco tras
            disco. No como un ejercicio de virtuosismo vacío, sino como una
            manera de honrar canciones que fueron escritas para ser
            difíciles.
          </p>
          <p>
            Esa misma disciplina es la que sostiene el compromiso de la
            banda con el show en vivo. Para The Antarctica Project el
            escenario no es una réplica del disco, es donde la música
            termina de probarse: da lo mismo si es una sala llena en
            Santiago o una tocata pequeña en el sur, la exigencia es la
            misma. Hoy, con la base de <em className="text-text">
              Transmute
            </em>{" "}
            ya consolidada, la banda sigue tocando desde ese mismo lugar —
            un proyecto que no dejó de mutar desde el segundo piso de
            aquella casa.
          </p>
        </div>
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
            It all started on the second floor of Alberto&rsquo;s house, in
            Santiago: two guitars, one shared amplifier, and whatever
            afternoons José had left after school. There was no plan, no
            name, no starting date. What there was, though, was the same
            question repeated week after week: what would happen if those
            loose ideas — a riff, a shifted time signature, a progression
            that didn&rsquo;t match anything they were listening to at the
            time — were allowed to grow instead of being discarded.
          </p>
          <p>
            The name came before the band itself. They called themselves{" "}
            <em className="text-text">Antarctica</em>: a word loaded with
            distance, emptiness, a place almost no one sets foot on. Over
            time, as the lineup stabilized and the project stopped being a
            weekend rehearsal and became something with continuity, the
            name mutated into{" "}
            <em className="text-text">The Antarctica Project</em>. The
            change wasn&rsquo;t cosmetic: the word &ldquo;project&rdquo;
            declared what the band wanted to be from the start — a
            permanent work in progress, with no pretension of ever arriving
            at a final form and staying there.
          </p>
          <p>
            That same logic of constant construction also defined the
            sound. Neither Alberto nor José wanted to repeat classic
            metalcore&rsquo;s straightforward formula — breakdown, chorus,
            breakdown — without questioning it. They started stretching
            structures, dropping odd time signatures where the ear expected
            something square, treating aggression and complexity as two
            sides of the same song instead of two separate genres.
            That&rsquo;s where the term they use to describe themselves
            today comes from:{" "}
            <em className="text-text">progressive metalcore</em>, a meeting
            point between the physical weight of the breakdown and the
            structural curiosity of the progressive.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          The &lsquo;Transmute&rsquo; Era and Its Sonic Evolution
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            In 2018, those first ideas from the second floor became{" "}
            <em className="text-text">Transmute</em>, the band&rsquo;s
            debut album. It was the first serious attempt to translate into
            a full record what until then had only existed as demos: a
            record that demanded as much from the band&rsquo;s instrumental
            technique as from its ability to sustain an idea across an
            entire song without resolving it too soon.
          </p>
          <p>
            <em className="text-text">Transmute</em> was built as a concept
            album, organized around a handful of ideas that repeat and
            transform from song to song: space as both void and
            possibility, time as something that can stretch or break, and
            the cycle of creation and destruction as the engine of any real
            change. The mutation in the title wasn&rsquo;t just an image —
            it was literally what happened to the sonic material from one
            track to the next.
          </p>
          <p>
            That idea of mutation became visible outside the music too.
            From the cover art to the first merch drop, the band adopted a
            blue, crystalline aesthetic — surfaces that look like ice or
            glass about to fracture — that worked as a direct mirror of the
            album&rsquo;s concept. It wasn&rsquo;t an improvised decision:
            every visual element of the{" "}
            <em className="text-text">Transmute</em> era was thought
            through with the same care as a song, understanding that the
            band&rsquo;s identity didn&rsquo;t end at the audio.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide-label text-text sm:text-2xl">
          Maturity and the Present
        </h2>
        <div className="mt-6 flex flex-col gap-6 text-[15px] leading-relaxed text-[#e5e5e5] sm:text-base sm:leading-relaxed">
          <p>
            The years following <em className="text-text">Transmute</em>{" "}
            were, above all, years of persistence. Keeping a progressive
            metalcore band alive within the Chilean underground means
            playing small venues, hauling your own gear, and starting over
            every time the lineup changes — something The Antarctica
            Project has faced more than once without ever stopping the
            project.
          </p>
          <p>
            Over the years, that persistence turned into precision. What
            was ambition on <em className="text-text">Transmute</em> is
            craft today: time-signature changes executed with exactness,
            arrangements polished in rehearsal before they ever reach the
            stage, a level of technical demand the band holds itself to
            record after record. Not as an exercise in empty virtuosity,
            but as a way of honoring songs that were written to be
            difficult.
          </p>
          <p>
            That same discipline is what sustains the band&rsquo;s
            commitment to the live show. For The Antarctica Project, the
            stage isn&rsquo;t a replica of the record — it&rsquo;s where
            the music finally proves itself: it makes no difference whether
            it&rsquo;s a packed room in Santiago or a small show down
            south, the standard is the same. Today, with the foundation{" "}
            <em className="text-text">Transmute</em> laid now firmly in
            place, the band keeps playing from that same place — a project
            that never stopped mutating since the second floor of that
            house.
          </p>
        </div>
      </section>
    </>
  );
}
