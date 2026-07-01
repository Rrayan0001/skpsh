import Link from "next/link";

const documents = [
  {
    title: "Affiliation Letter",
    href: "/mandatory-disclosure/affiliation-letter",
    icon: "🏫",
  },
  {
    title: "Society/Trust Registration Certificate",
    href: "/mandatory-disclosure/society-trust-registration",
    icon: "📜",
  },
  {
    title: "Society/Trust Bay Laws",
    href: "/mandatory-disclosure/society-trust-bye-laws",
    icon: "📋",
  },
  {
    title: "School Management Committee (SMC)",
    href: "/mandatory-disclosure/smc",
    icon: "🏛️",
  },
  {
    title: "Parents Teacher Association (PTA)",
    href: "/mandatory-disclosure/pta",
    icon: "🤝",
  },
  {
    title: "NOC (No Objection Certificate)",
    href: "/mandatory-disclosure/noc",
    icon: "✅",
  },
  {
    title: "Recognition Certificate",
    href: "/mandatory-disclosure/recognition-certificate",
    icon: "🎖️",
  },
  {
    title: "Building Safety Certificate",
    href: "/mandatory-disclosure/building-safety",
    icon: "🏗️",
  },
  {
    title: "Fire Safety Certificate",
    href: "/mandatory-disclosure/fire-safety",
    icon: "🔥",
  },
  {
    title: "Water, Health & Sanitation Certificate",
    href: "/mandatory-disclosure/water-health-sanitation",
    icon: "💧",
  },
  {
    title: "Annual Report",
    href: "/mandatory-disclosure/annual-report",
    icon: "📊",
  },
];

export default function MandatoryDisclosurePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--hp-canvas)] text-[var(--hp-ink)]">
      {/* Ambient background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(26,86,219,0.18),transparent_40%),radial-gradient(circle_at_88%_12%,rgba(26,86,219,0.10),transparent_36%),linear-gradient(180deg,rgba(219,234,254,0.85),rgba(255,255,255,1)_30%,rgba(239,246,255,1)_70%,rgba(255,255,255,1))]" />
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[var(--brand-primary)] opacity-[0.12] blur-3xl" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-[var(--brand-primary-light)] opacity-20 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Page header */}
        <div className="mb-10 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--brand-primary)] mb-3">
            Shri Kadasiddheshwar Public School, Hukkeri
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--hp-ink)]">
            Mandatory Disclosure
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[var(--hp-charcoal)] max-w-xl mx-auto leading-relaxed">
            Statutory documents as required by the Central Board of Secondary Education (CBSE).
            Click any document below to view details.
          </p>
        </div>

        {/* Document grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group relative flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-5 shadow-[0_2px_16px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_30px_rgba(26,86,219,0.12)] hover:border-[var(--brand-primary-light)] transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Icon bubble */}
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[var(--brand-primary-soft)] flex items-center justify-center text-xl group-hover:bg-[var(--brand-primary)] group-hover:scale-105 transition-all duration-200">
                <span className="group-hover:grayscale-0">{doc.icon}</span>
              </div>

              {/* Title + arrow */}
              <div className="flex-1 min-w-0">
                <p className="text-[13.5px] font-semibold text-[var(--hp-ink)] leading-snug group-hover:text-[var(--brand-primary)] transition-colors duration-200">
                  {doc.title}
                </p>
                <p className="mt-1 text-[11px] font-medium text-slate-400 group-hover:text-[var(--brand-primary)] transition-colors duration-200 flex items-center gap-1">
                  View document
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
