export default function SportsPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[var(--hp-canvas)] text-[var(--hp-ink)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(26,86,219,0.25),transparent_40%),radial-gradient(circle_at_85%_14%,rgba(26,86,219,0.12),transparent_36%),linear-gradient(180deg,rgba(219,234,254,0.92),rgba(255,255,255,1)_32%,rgba(239,246,255,1)_70%,rgba(255,255,255,1))]" />
        <div className="absolute left-[-8rem] top-28 h-80 w-80 rounded-full bg-[var(--brand-primary)] opacity-20 blur-3xl" />
        <div className="absolute right-[-6rem] top-36 h-96 w-96 rounded-full bg-[var(--brand-primary-light)] opacity-30 blur-3xl" />
      </div>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <section className="relative w-full max-w-4xl overflow-hidden rounded-[20px] border border-[var(--hp-hairline)] bg-[rgba(255,255,255,0.85)] shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl px-8 py-14 sm:px-14 text-center">
          <span className="text-xs sm:text-sm font-bold text-[var(--brand-primary)] uppercase tracking-widest block mb-4">
            Shri Kadasiddheshwar Public School, Hukkeri
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--hp-ink)] mb-4">
            Sports
          </h1>
          <p className="text-sm sm:text-lg text-[var(--hp-charcoal)] leading-relaxed max-w-2xl mx-auto">
            Our sports program encourages students to develop teamwork, discipline, and a healthy lifestyle.
            Content for this section is coming soon.
          </p>
        </section>
      </main>
    </div>
  );
}
