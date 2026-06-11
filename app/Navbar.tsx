"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  /* Helper: is this path active? */
  const isActive = (href: string) => pathname === href;
  const isActivePrefix = (prefix: string) =>
    pathname === prefix || pathname.startsWith(prefix + "/");

  /* Shared styles */
  const linkBase =
    "relative py-1.5 text-[13px] font-semibold transition-colors duration-200";
  const activeStyle = "text-[var(--brand-primary)]";
  const inactiveStyle =
    "text-[var(--brand-ink)] hover:text-[var(--brand-primary)]";

  /* Active underline indicator */
  const activeBar = (
    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-[var(--brand-primary)] animate-[fadeIn_200ms_ease]" />
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100/80 transition-all duration-200">
      {/* Hamburger toggle — hidden checkbox trick, no JS needed */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="peer sr-only"
      />

      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo + School name */}
        <Link href="/" className="inline-flex items-center gap-3 min-w-0 shrink-0">
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
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {/* Home */}
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg text-[13px] font-bold transition-all duration-200 inline-flex items-center ${
              isActive("/")
                ? "bg-[var(--brand-primary)] !text-white shadow-sm"
                : "text-[var(--brand-ink)] hover:bg-slate-50 hover:text-[var(--brand-primary)]"
            }`}
          >
            Home
          </Link>

          {/* About Us */}
          <Link
            href="/under-construction"
            className={`relative px-3 ${linkBase} ${
              isActivePrefix("/about") ? activeStyle : inactiveStyle
            }`}
          >
            About Us
            {isActivePrefix("/about") && activeBar}
          </Link>

          {/* Admissions Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/admissions") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Admissions</span>
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isActivePrefix("/admissions") && (
              <span className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link
                  href="/under-construction"
                  className="block px-4 py-2.5 text-[13px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition font-medium rounded-lg mx-1.5"
                >
                  Admission Form
                </Link>
              </div>
            </div>
          </div>

          {/* Examination Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/examination") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Examination</span>
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isActivePrefix("/examination") && (
              <span className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link
                  href="/under-construction"
                  className="block px-4 py-2.5 text-[13px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition font-medium rounded-lg mx-1.5"
                >
                  Time Table
                </Link>
              </div>
            </div>
          </div>

          {/* Events & Celebrations Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 ${linkBase} cursor-pointer bg-transparent border-none whitespace-nowrap ${
                isActivePrefix("/events") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Events &amp; Celebrations</span>
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isActivePrefix("/events") && (
              <span className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link
                  href="/under-construction"
                  className="block px-4 py-2.5 text-[13px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition font-medium rounded-lg mx-1.5"
                >
                  2025-26
                </Link>
                <Link
                  href="/under-construction"
                  className="block px-4 py-2.5 text-[13px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition font-medium rounded-lg mx-1.5"
                >
                  2026-27
                </Link>
                {/* Nested CCA Submenu */}
                <div className="relative group/sub">
                  <div className="flex items-center justify-between px-4 py-2.5 text-[13px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition cursor-pointer font-semibold rounded-lg mx-1.5">
                    <span>CCA</span>
                    <svg
                      className="w-3 h-3 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="absolute left-full top-0 ml-1 w-40 hidden group-hover/sub:block z-50">
                    <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                      <Link
                        href="/under-construction"
                        className="block px-4 py-2.5 text-[13px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition font-medium rounded-lg mx-1.5"
                      >
                        25-26
                      </Link>
                      <Link
                        href="/under-construction"
                        className="block px-4 py-2.5 text-[13px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition font-medium rounded-lg mx-1.5"
                      >
                        26-27
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sports */}
          <Link
            href="/under-construction"
            className={`relative px-3 ${linkBase} ${
              isActivePrefix("/sports") ? activeStyle : inactiveStyle
            }`}
          >
            Sports
            {isActivePrefix("/sports") && activeBar}
          </Link>

          {/* Mandatory Disclosure Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 ${linkBase} cursor-pointer bg-transparent border-none whitespace-nowrap ${
                isActivePrefix("/mandatory-disclosure")
                  ? activeStyle
                  : inactiveStyle
              }`}
            >
              <span>Mandatory Disclosure</span>
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isActivePrefix("/mandatory-disclosure") && (
              <span className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full right-0 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link
                  href="/under-construction"
                  className="block px-4 py-2.5 text-[13px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition font-medium rounded-lg mx-1.5"
                >
                  Academic Calendar
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <Link
            href="/under-construction"
            className={`relative px-3 ${linkBase} ${
              isActivePrefix("/contact") ? activeStyle : inactiveStyle
            }`}
          >
            Contact Us
            {isActivePrefix("/contact") && activeBar}
          </Link>
        </nav>

        {/* Right side: search + hamburger */}
        <div className="flex items-center gap-2">
          {/* Search button */}
          <button
            type="button"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e5e5e5] transition text-[#111111] focus:outline-none"
            aria-label="Search"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Hamburger button — visible only on mobile */}
          <label
            htmlFor="mobile-menu-toggle"
            className="lg:hidden w-9 h-9 rounded-full bg-[#f5f5f5] flex flex-col items-center justify-center gap-[5px] cursor-pointer hover:bg-[#e5e5e5] transition"
            aria-label="Toggle menu"
          >
            <span
              className="block w-4.5 h-[2px] bg-[var(--brand-ink)] rounded-full transition-transform"
              style={{ width: "18px" }}
            />
            <span
              className="block h-[2px] bg-[var(--brand-ink)] rounded-full transition-all"
              style={{ width: "18px" }}
            />
            <span
              className="block h-[2px] bg-[var(--brand-ink)] rounded-full transition-transform"
              style={{ width: "18px" }}
            />
          </label>
        </div>
      </div>

      {/* Mobile drawer — slides in below the top bar */}
      <nav
        className="
          lg:hidden
          overflow-hidden
          max-h-0 peer-checked:max-h-[85vh] peer-checked:overflow-y-auto
          transition-[max-height] duration-300 ease-in-out
          bg-white/95 backdrop-blur-lg border-t border-slate-100/80 shadow-md
        "
      >
        <div className="flex flex-col px-5 py-4 gap-0.5 text-[var(--brand-ink)] font-semibold text-[15px]">
          {/* Home */}
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold transition ${
              isActive("/")
                ? "bg-[var(--brand-primary)] !text-white"
                : "hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* About Us */}
          <Link
            href="/under-construction"
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition ${
              isActivePrefix("/about")
                ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] font-bold"
                : "hover:bg-slate-50"
            }`}
          >
            About Us
          </Link>

          {/* Admissions Dropdown */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Admissions</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-open/mob:rotate-180 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link
                href="/under-construction"
                className="py-2 text-[14px] hover:text-[var(--brand-primary)] transition font-medium"
              >
                Admission Form
              </Link>
            </div>
          </details>

          {/* Examination Dropdown */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Examination</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-open/mob:rotate-180 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link
                href="/under-construction"
                className="py-2 text-[14px] hover:text-[var(--brand-primary)] transition font-medium"
              >
                Time Table
              </Link>
            </div>
          </details>

          {/* Events & Celebrations Dropdown */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Events &amp; Celebrations</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-open/mob:rotate-180 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link
                href="/under-construction"
                className="py-2 text-[14px] hover:text-[var(--brand-primary)] transition font-medium"
              >
                2025-26
              </Link>
              <Link
                href="/under-construction"
                className="py-2 text-[14px] hover:text-[var(--brand-primary)] transition font-medium"
              >
                2026-27
              </Link>

              {/* Nested CCA Sub-Dropdown */}
              <details className="group/cca relative mt-0.5">
                <summary className="flex items-center justify-between py-2 text-[14px] hover:text-[var(--brand-primary)] cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold">
                  <span>CCA</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-open/cca:rotate-180 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </summary>
                <div className="pl-4 py-1 flex flex-col gap-0.5 border-l border-slate-200 ml-2">
                  <Link
                    href="/under-construction"
                    className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium"
                  >
                    25-26
                  </Link>
                  <Link
                    href="/under-construction"
                    className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium"
                  >
                    26-27
                  </Link>
                </div>
              </details>
            </div>
          </details>

          {/* Sports */}
          <Link
            href="/under-construction"
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition ${
              isActivePrefix("/sports")
                ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] font-bold"
                : "hover:bg-slate-50"
            }`}
          >
            Sports
          </Link>

          {/* Mandatory Disclosure Dropdown */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Mandatory Disclosure</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-open/mob:rotate-180 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link
                href="/under-construction"
                className="py-2 text-[14px] hover:text-[var(--brand-primary)] transition font-medium"
              >
                Academic Calendar
              </Link>
            </div>
          </details>

          {/* Contact Us */}
          <Link
            href="/under-construction"
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition ${
              isActivePrefix("/contact")
                ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] font-bold"
                : "hover:bg-slate-50"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
