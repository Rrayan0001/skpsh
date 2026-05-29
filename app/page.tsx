export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--hp-canvas)] text-[var(--hp-ink)]">
      <div className="h-10 bg-[linear-gradient(90deg,var(--hp-ink),var(--hp-primary-deep))] text-[var(--hp-on-ink)]">
        <div className="mx-auto max-w-5xl h-full px-4 sm:px-6 flex items-center justify-center">
          <p className="text-[12px] tracking-wide text-center">
            We&apos;re building something new — launching soon.
          </p>
        </div>
      </div>

      <main className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-5xl items-center px-4 py-8 sm:min-h-0 sm:items-start sm:px-6 sm:py-16">
        <section className="relative w-full overflow-hidden rounded-[16px] bg-[var(--hp-paper)] border border-[var(--hp-hairline)]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-10 h-40 w-52 bg-[var(--hp-primary)] opacity-90 [clip-path:polygon(35%_0,100%_0,65%_100%,0_100%)]" />
            <div className="absolute -right-24 bottom-10 h-48 w-64 bg-[var(--hp-primary)] opacity-90 [clip-path:polygon(0_0,65%_0,100%_100%,35%_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,var(--hp-primary-soft),transparent_55%)] opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,var(--hp-bloom-rose),transparent_45%)] opacity-50" />
          </div>

          <div className="relative px-6 py-10 sm:px-12 sm:py-14">
            <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-[var(--hp-ink)]">
              Website Under Construction
            </h1>

            <p className="mt-4 max-w-2xl text-sm sm:text-lg text-[var(--hp-charcoal)] leading-relaxed">
              We&apos;re working hard to bring you a great experience. Please check back soon.
            </p>

            <div className="mt-8 max-w-lg">
              <div className="relative h-3.5 w-full rounded-full bg-[var(--hp-fog)] overflow-hidden border border-[var(--hp-hairline)]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--hp-primary),var(--hp-primary-bright))]" aria-hidden />
                <div
                  className="hp-progress-stripes absolute inset-0 opacity-60"
                  aria-hidden
                />
                <div
                  className="hp-progress-sweep absolute inset-y-0 w-24"
                  aria-hidden
                />
                <div
                  className="hp-progress-dot absolute top-1/2 h-3 w-3 rounded-full bg-[var(--hp-bloom-coral)] shadow-[0_0_8px_rgba(255,80,80,0.6)]"
                  aria-hidden
                />
              </div>
              <p className="mt-3 text-[12px] text-[var(--hp-graphite)]">
                Updates are in progress.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
