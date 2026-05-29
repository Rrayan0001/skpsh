export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--hp-canvas)] text-[var(--hp-ink)]">
      <div className="h-10 bg-[linear-gradient(90deg,var(--hp-ink),var(--hp-primary-deep))] text-[var(--hp-on-ink)]">
        <div className="mx-auto max-w-6xl h-full px-6 flex items-center justify-center">
          <p className="text-[12px] tracking-wide text-center">
            We&apos;re building something new — launching soon.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <section className="relative overflow-hidden rounded-[16px] bg-[var(--hp-paper)] border border-[var(--hp-hairline)]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute -left-24 top-10 h-48 w-64 bg-[var(--hp-primary)] opacity-90 motion-safe:animate-[hp-chevron-float_9s_ease-in-out_infinite] [clip-path:polygon(35%_0,100%_0,65%_100%,0_100%)]"
            />
            <div
              className="absolute -right-28 bottom-12 h-56 w-72 bg-[var(--hp-primary)] opacity-90 motion-safe:animate-[hp-chevron-float_11s_ease-in-out_infinite] [animation-delay:-2.5s] [clip-path:polygon(0_0,65%_0,100%_100%,35%_100%)]"
            />
            <div
              className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_18%,var(--hp-primary-soft),transparent_55%),radial-gradient(circle_at_78%_28%,var(--hp-bloom-rose),transparent_52%),radial-gradient(circle_at_55%_92%,var(--hp-storm-mist),transparent_58%)]"
            />
          </div>

          <div className="relative px-8 py-14 sm:px-14 sm:py-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--hp-cloud)] border border-[var(--hp-hairline)] px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--hp-primary)]" aria-hidden />
              <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--hp-ink)]">
                Under construction
              </span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-medium tracking-tight text-[var(--hp-ink)]">
              Website Under Construction
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-[var(--hp-charcoal)] leading-relaxed">
              We&apos;re working hard to bring you a great experience. Please check back soon.
            </p>

            <div className="mt-10">
              <div className="relative h-2 w-full max-w-xl rounded-full bg-[var(--hp-fog)] overflow-hidden border border-[var(--hp-hairline)]">
                <div
                  className="absolute inset-0 bg-[repeating-linear-gradient(135deg,var(--hp-primary)_0_10px,transparent_10px_20px)] [background-size:48px_48px] motion-safe:animate-[hp-scan_1.1s_linear_infinite]"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 w-28 bg-[linear-gradient(90deg,transparent,var(--hp-primary-soft),transparent)] opacity-70 motion-safe:animate-[hp-shimmer_1.7s_ease-in-out_infinite]"
                  aria-hidden
                />
                <div
                  className="absolute left-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[var(--hp-primary-bright)] border border-[var(--hp-paper)] motion-safe:animate-[hp-loader-dot_1.6s_ease-in-out_infinite]"
                  aria-hidden
                />
              </div>
              <p className="mt-3 text-[12px] text-[var(--hp-graphite)]">
                Updates are in progress.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[16px] bg-[linear-gradient(135deg,var(--hp-ink),var(--hp-storm-deep))] text-[var(--hp-on-ink)] px-8 py-10 sm:px-14">
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight">Thanks for your patience.</h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base text-[var(--hp-on-ink)] opacity-90">
            We&apos;ll be live soon with a refreshed, professional experience.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--hp-on-ink)]/10 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--hp-bloom-coral)]" aria-hidden />
            <span className="text-[12px] font-semibold tracking-[0.12em] uppercase">Stay tuned</span>
          </div>
        </section>
      </main>
    </div>
  );
}
