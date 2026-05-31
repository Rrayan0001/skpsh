import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shri Kadasiddheshwar Public School, Hukkeri",
  description: "Official website of Shri Kadasiddheshwar Public School (SKPS), Hukkeri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon_io/bg_removed_logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/bg_removed_logo.png" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body className="min-h-full flex flex-col bg-white">

        {/* ── NAVBAR ─────────────────────────────────────────────── */}
        <header className="w-full sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100/85 transition-all duration-200">

          {/* Hamburger toggle — hidden checkbox trick, no JS needed */}
          <input type="checkbox" id="mobile-menu-toggle" className="peer sr-only" />

          {/* Top bar */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">

            {/* Logo + School name */}
            <Link href="/" className="inline-flex items-center gap-3 min-w-0">
              <img
                src="/favicon_io/bg_removed_logo.png"
                alt="School Logo"
                className="h-[42px] w-auto object-contain shrink-0 sm:h-[50px] md:h-[54px]"
              />
              <div className="flex min-w-0 flex-col text-left">
                <span className="truncate text-[11px] font-extrabold leading-tight tracking-tight text-[var(--brand-ink)] sm:text-[14px] md:text-[16px]">
                  Shri Kadasiddheshwar Public School
                </span>
                <span className="text-[8px] font-semibold leading-none tracking-wide text-[var(--brand-primary)] sm:text-[10px]">
                  Hukkeri
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-[14px] font-bold text-[var(--brand-primary)]">
              <Link
                href="/"
                className="px-5 py-2 rounded-lg bg-[var(--brand-primary)] !text-white hover:bg-[var(--brand-primary-hover)] transition inline-flex items-center"
              >
                Home
              </Link>
              <a href="#" className="hover:text-[var(--brand-primary-hover)] transition">About Us</a>
              <a href="#" className="hover:text-[var(--brand-primary-hover)] transition">Admissions</a>
              <a href="#" className="hover:text-[var(--brand-primary-hover)] transition">News &amp; Events</a>
              <a href="#" className="hover:text-[var(--brand-primary-hover)] transition">Mandatory Disclosure</a>
              <a href="#" className="hover:text-[var(--brand-primary-hover)] transition">Contact Us</a>
            </nav>

            {/* Right side: search + hamburger */}
            <div className="flex items-center gap-2">
              {/* Search button */}
              <button
                type="button"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e5e5e5] transition text-[#111111] focus:outline-none"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Hamburger button — visible only on mobile */}
              <label
                htmlFor="mobile-menu-toggle"
                className="md:hidden w-9 h-9 rounded-full bg-[#f5f5f5] flex flex-col items-center justify-center gap-[5px] cursor-pointer hover:bg-[#e5e5e5] transition"
                aria-label="Toggle menu"
              >
                {/* Three bars */}
                <span className="block w-4.5 h-[2px] bg-[var(--brand-ink)] rounded-full peer-checked:rotate-45 transition-transform" style={{width:'18px'}} />
                <span className="block h-[2px] bg-[var(--brand-ink)] rounded-full transition-all" style={{width:'18px'}} />
                <span className="block h-[2px] bg-[var(--brand-ink)] rounded-full transition-transform" style={{width:'18px'}} />
              </label>
            </div>
          </div>

          {/* Mobile drawer — slides in below the top bar */}
          <nav
            className="
              md:hidden
              overflow-hidden
              max-h-0 peer-checked:max-h-[400px]
              transition-[max-height] duration-300 ease-in-out
              bg-white/90 backdrop-blur-lg border-t border-slate-100/80 shadow-md
            "
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              <Link href="/"   className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--brand-primary)] !text-white font-bold text-[15px]">Home</Link>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">About Us</a>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">Admissions</a>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">News &amp; Events</a>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">Mandatory Disclosure</a>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">Contact Us</a>
            </div>
          </nav>

        </header>

        <main className="w-full flex flex-col">
          {children}
        </main>

        {/* ═══════════════════════════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════════════════════════ */}
        <footer className="w-full bg-[#0b0f19] text-slate-400 border-t-4 border-[var(--brand-primary)] font-sans">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-10 gap-x-8 lg:gap-12">
              
              {/* Left Column: School branding & Credentials */}
              <div className="sm:col-span-2 md:col-span-4 lg:col-span-3 flex flex-col items-start text-left">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-white p-1.5 flex items-center justify-center">
                    <img
                      src="/favicon_io/bg_removed_logo.png"
                      alt="SKPS Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[14px] font-black uppercase tracking-wider leading-tight text-white font-sans">
                      Shri Kadasiddheshwar
                    </span>
                    <span className="text-[12px] font-bold text-slate-400 tracking-wide mt-0.5">
                      Public School, Hukkeri
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-sm">
                  Affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Shri Kadasiddheshwar Public School is dedicated to fostering academic excellence, character development, and holistic growth in Hukkeri, Karnataka.
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
                    CBSE Affiliation: 830385
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
                    School Code: 45314
                  </span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
                    Est. 2003
                  </span>
                </div>
              </div>

              {/* Column 1: Institutional */}
              <div className="sm:col-span-1 lg:col-span-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 border-b border-white/10 pb-2">Institutional</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    { name: "About Us", href: "/under-construction" },
                    { name: "Admissions", href: "/under-construction" },
                    { name: "News & Events", href: "/under-construction" },
                    { name: "Mandatory Public Disclosure", href: "/under-construction" }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="group text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                        <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: School Life */}
              <div className="sm:col-span-1 lg:col-span-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5 border-b border-white/10 pb-2">School Life</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    { name: "Academics", href: "/under-construction" },
                    { name: "Sports & Activities", href: "/under-construction" },
                    { name: "Campus Life", href: "/under-construction" },
                    { name: "Photo Gallery", href: "/under-construction" }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="group text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                        <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact & Hours */}
              <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Admissions Office</h4>
                  <ul className="flex flex-col gap-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <span>Hukkeri, Belagavi, KA — 591309</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.944-6.94l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      <span>+91 8333-256567</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      <a href="mailto:office@skpshukkeri.edu.in" className="hover:text-white hover:underline transition-colors duration-200">office@skpshukkeri.edu.in</a>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <h5 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">Office Timings</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Mon – Sat: 9:00 AM – 3:30 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Column 4: Location Map */}
              <div className="sm:col-span-1 lg:col-span-3 flex flex-col gap-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Our Location</h4>
                <div className="w-full h-40 rounded-xl overflow-hidden shadow-sm border border-white/10 relative group">
                  <iframe
                    src="https://maps.google.com/maps?q=Shri%20Kadasiddheshwar%20Public%20School,%20Hukkeri&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shri Kadasiddheshwar Public School Location Map"
                    className="w-full h-full grayscale-[25%] contrast-[95%] group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Shri%20Kadasiddheshwar%20Public%20School,%20Hukkeri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline self-start"
                >
                  <span>Open in Google Maps</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <p className="text-xs text-slate-400 font-medium">
                  &copy; {new Date().getFullYear()} Shri Kadasiddheshwar Public School, Hukkeri. All rights reserved.
                </p>
                <p className="text-[10px] text-slate-500">
                  Affiliation Status: Permanent School Affiliation (Affiliated to CBSE, Delhi)
                </p>
              </div>

              {/* Social Media and Legal Links */}
              <div className="flex flex-col sm:items-end gap-3">
                {/* Social media icons */}
                <div className="flex items-center gap-4 text-slate-500">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.752.052 2.73.124 4.255.58 5.243 1.569C22.3 4.6 22.757 6.13 22.88 8.86c.044.968.052 1.322.052 3.752s-.008 2.784-.052 3.752c-.124 2.73-.58 4.255-1.569 5.243-.99.988-2.52 1.445-5.243 1.569-.968.044-1.322.052-3.752.052s-2.784-.008-3.752-.052c-2.73-.124-4.255-.58-5.243-1.569C1.7 19.4 1.243 17.87 1.12 15.14c-.044-.968-.052-1.322-.052-3.752s.008-2.784.052-3.752c.124-2.73.58-4.255 1.569-5.243.99-.988 2.52-1.445 5.243-1.569.968-.044 1.322-.052 3.752-.052zm0 2.23c-2.39 0-2.67.01-3.61.054-2.18.1-2.86.76-2.96 2.96-.04.94-.05 1.22-.05 3.61s.01 2.67.05 3.61c.1 2.18.76 2.86 2.96 2.96.94.04 1.22.05 3.61.05s2.67-.01 3.61-.05c2.18-.1 2.86-.76 2.96-2.96.04-.94.05-1.22.05-3.61s-.01-2.67-.05-3.61c-.1-2.18-.76-2.86-2.96-2.96-.94-.04-1.22-.05-3.61-.05zm0 3.678a4.09 4.09 0 110 8.18 4.09 4.09 0 010-8.18zm0 2.222a1.868 1.868 0 100 3.736 1.868 1.868 0 000-3.736zm5.85-2.222a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l6.5 4-6.5 4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6 text-xs text-slate-500 font-semibold">
                  <Link href="/under-construction" className="hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/under-construction" className="hover:text-white transition-colors">Terms of Use</Link>
                  <Link href="/under-construction" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
