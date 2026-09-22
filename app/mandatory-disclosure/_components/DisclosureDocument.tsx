import Link from "next/link";

type RelatedDoc = {
  title: string;
  href: string;
};

type Props = {
  title: string;
  description: string;
  pdfUrl: string;
  fileLabel?: string;
  meta?: { label: string; value: string }[];
  extraDocs?: RelatedDoc[];
  backHref?: string;
  backLabel?: string;
};

export default function DisclosureDocument({
  title,
  description,
  pdfUrl,
  fileLabel,
  meta = [],
  extraDocs = [],
  backHref = "/mandatory-disclosure",
  backLabel = "Back to Mandatory Disclosure",
}: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--hp-canvas)] text-[var(--hp-ink)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(26,86,219,0.18),transparent_40%),radial-gradient(circle_at_88%_12%,rgba(26,86,219,0.10),transparent_36%),linear-gradient(180deg,rgba(219,234,254,0.85),rgba(255,255,255,1)_30%,rgba(239,246,255,1)_70%,rgba(255,255,255,1))]" />
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[12px] font-semibold text-[var(--brand-primary)] hover:underline"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          {backLabel}
        </Link>

        <div className="mt-4 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--brand-primary)] mb-3">
            Shri Kadasiddheshwar Public School, Hukkeri
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm sm:text-base text-[var(--hp-charcoal)] max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {meta.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {meta.map((m) => (
              <span
                key={m.label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11.5px] font-medium text-slate-600"
              >
                <span className="font-bold text-slate-400 uppercase tracking-wide text-[10px]">{m.label}</span>
                {m.value}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-primary)] px-5 py-2.5 text-[13px] font-semibold !text-white shadow-[0_8px_24px_rgba(26,86,219,0.25)] hover:brightness-110 transition"
          >
            Open PDF in new tab
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-2.5 text-[13px] font-semibold text-[var(--hp-ink)] hover:border-[var(--brand-primary-light)] hover:text-[var(--brand-primary)] transition"
          >
            Download
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>

        <p className="mt-3 text-center text-[11px] text-slate-400 font-mono break-all">
          {fileLabel ?? pdfUrl}
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.06)]">
          <iframe
            src={pdfUrl}
            title={`${title} — PDF viewer`}
            className="h-[70vh] min-h-[480px] w-full"
            loading="lazy"
          />
        </div>

        {extraDocs.length > 0 && (
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white/80 p-5">
            <p className="text-[12px] font-bold uppercase tracking-widest text-slate-400">Related files</p>
            <ul className="mt-3 space-y-2">
              {extraDocs.map((d) => (
                <li key={d.href}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[var(--brand-primary)] hover:underline"
                  >
                    {d.title}
                    <span className="text-[11px] font-mono font-normal text-slate-400">{d.href}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
