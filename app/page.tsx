export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-[var(--hp-ink)] overflow-hidden flex flex-col">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/30 blur-[100px] motion-safe:animate-[orb-float_12s_infinite_alternate]" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-pink-400/20 blur-[120px] motion-safe:animate-[orb-float_15s_infinite_alternate-reverse]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-cyan-400/30 blur-[100px] motion-safe:animate-[orb-float_18s_infinite_alternate]" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-purple-400/20 blur-[110px] motion-safe:animate-[orb-float_14s_infinite_alternate]" />
      </div>

      <div className="h-10 bg-[linear-gradient(90deg,var(--hp-ink),var(--hp-primary-deep))] text-[var(--hp-on-ink)] relative z-20">
        <div className="mx-auto max-w-6xl h-full px-6 flex items-center justify-center">
          <p className="text-[12px] tracking-wide text-center">
            We&apos;re building something new — launching soon.
          </p>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <section className="relative w-full max-w-4xl p-8 sm:p-14 lg:p-16 rounded-[24px] bg-white/60 backdrop-blur-2xl border border-white/60 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 pointer-events-none" />

          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex flex-row items-center gap-2 rounded-full bg-white/80 border border-white/50 shadow-sm px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--hp-primary)] motion-safe:animate-pulse" aria-hidden />
              <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--hp-ink)]">
                Under construction
              </span>
            </div>

            <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[var(--hp-primary)] to-gray-900 leading-tight">
              Website Under Construction
            </h1>

            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
              We&apos;re working hard to bring you a great experience. Please check back soon.
            </p>

            <div className="mt-12 w-full max-w-lg flex flex-col items-center">
              {/* Rethought sleek and colorful progress bar */}
              <div className="h-4 w-full rounded-full bg-white/70 backdrop-blur-md border border-white/60 p-1 shadow-inner overflow-hidden flex items-center">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 w-[60%] motion-safe:animate-[slide-progress_4s_ease-in-out_infinite] shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
              </div>
              <p className="mt-4 text-sm font-medium text-gray-600">
                Updating the latest features...
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[20px] bg-[linear-gradient(135deg,var(--hp-ink),#0f172a)] text-white/90 px-8 py-10 sm:px-14 shadow-lg w-full max-w-4xl text-center flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white">Thanks for your patience.</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base opacity-90 leading-relaxed">
            We&apos;ll be live soon with a refreshed, colorful, and highly polished experience.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--hp-bloom-coral)]" aria-hidden />
            <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-white">Stay tuned</span>
          </div>
        </section>
      </main>
    </div>
  );
}
