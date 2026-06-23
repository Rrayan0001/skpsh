export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[var(--hp-canvas)] text-[var(--hp-ink)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(26,86,219,0.25),transparent_40%),radial-gradient(circle_at_85%_14%,rgba(26,86,219,0.12),transparent_36%),linear-gradient(180deg,rgba(219,234,254,0.92),rgba(255,255,255,1)_32%,rgba(239,246,255,1)_70%,rgba(255,255,255,1))]" />
        <div className="absolute left-[-8rem] top-28 h-80 w-80 rounded-full bg-[var(--brand-primary)] opacity-20 blur-3xl" />
        <div className="absolute right-[-6rem] top-36 h-96 w-96 rounded-full bg-[var(--brand-primary-light)] opacity-30 blur-3xl" />
        <div className="absolute bottom-[-9rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-[var(--brand-primary)] opacity-15 blur-3xl" />
      </div>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        <section className="relative w-full max-w-3xl overflow-hidden rounded-[20px] border border-[var(--hp-hairline)] bg-[rgba(255,255,255,0.85)] shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl px-8 py-14 sm:px-14">
          <span className="text-xs sm:text-sm font-bold text-[var(--brand-primary)] uppercase tracking-widest block mb-4 text-center">
            Shri Kadasiddheshwar Public School, Hukkeri
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--hp-ink)] mb-10 text-center">
            Contact Us
          </h1>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--brand-primary-soft)] border border-[var(--brand-primary-light)]">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-bold text-[var(--brand-primary)] uppercase tracking-wider mb-1">Address</p>
                <p className="text-[15px] font-medium text-[var(--hp-ink)]">
                  Hukkeri, Bus Stand Road<br />
                  Dist: Belagavi, Karnataka – 591305
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--brand-primary-soft)] border border-[var(--brand-primary-light)]">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-bold text-[var(--brand-primary)] uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+917795043124" className="block text-[15px] font-medium text-[var(--hp-ink)] hover:text-[var(--brand-primary)] transition">
                  +91 77950 43124
                </a>
                <a href="tel:+918073054377" className="block text-[15px] font-medium text-[var(--hp-ink)] hover:text-[var(--brand-primary)] transition">
                  +91 8073 054 377
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--brand-primary-soft)] border border-[var(--brand-primary-light)]">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-bold text-[var(--brand-primary)] uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:skpublichukkeri@gmail.com" className="text-[15px] font-medium text-[var(--hp-ink)] hover:text-[var(--brand-primary)] transition">
                  skpublichukkeri@gmail.com
                </a>
              </div>
            </div>

            {/* Affiliation */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--brand-primary-soft)] border border-[var(--brand-primary-light)]">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-bold text-[var(--brand-primary)] uppercase tracking-wider mb-1">Affiliation</p>
                <p className="text-[15px] font-medium text-[var(--hp-ink)]">
                  Affiliated to <strong>CBSE</strong><br />
                  Affiliation No: 830305
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
