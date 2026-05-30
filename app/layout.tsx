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
  description: "Official website of Shri Kadasiddheshwar Public School (SKPS), Hukkeri. A unit of KLE Society.",
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
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body className="min-h-full flex flex-col bg-white">

        {/* ── NAVBAR ─────────────────────────────────────────────── */}
        <header className="w-full bg-white relative z-50">

          {/* Hamburger toggle — hidden checkbox trick, no JS needed */}
          <input type="checkbox" id="mobile-menu-toggle" className="peer sr-only" />

          {/* Top bar */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">

            {/* Logo + School name */}
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 min-w-0">
              <img
                src="/favicon_io/bg_removed_logo.png"
                alt="School Logo"
                className="h-9 sm:h-11 object-contain shrink-0"
              />
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[11px] sm:text-[14px] md:text-[16px] font-extrabold text-[var(--brand-ink)] tracking-tight leading-tight truncate">
                  Shri Kadasiddheshwar Public School
                </span>
                <span className="text-[8px] sm:text-[10px] font-semibold text-[var(--brand-primary)] tracking-wide leading-none">
                  Hukkeri — A unit of KLE Society
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
              <a href="#" className="hover:text-[var(--brand-primary-hover)] transition">Bulletin</a>
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
              bg-white border-t border-slate-100 shadow-md
            "
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              <Link href="/"   className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--brand-primary)] text-white font-bold text-[15px]">Home</Link>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">About Us</a>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">Admissions</a>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">News &amp; Events</a>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">Bulletin</a>
              <a href="#"   className="flex items-center gap-2 px-4 py-3 rounded-xl text-[var(--brand-ink)] font-semibold text-[15px] hover:bg-slate-50 transition">Contact Us</a>
            </div>
          </nav>

        </header>

        {children}
      </body>
    </html>
  );
}
