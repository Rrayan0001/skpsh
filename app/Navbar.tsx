"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isActivePrefix = (prefix: string) =>
    pathname === prefix || pathname.startsWith(prefix + "/");

  const linkBase =
    "relative py-1 text-[11.5px] font-semibold transition-colors duration-200";
  const activeStyle = "text-[var(--brand-primary)]";
  const inactiveStyle =
    "text-[var(--brand-ink)] hover:text-[var(--brand-primary)]";

  const activeBar = (
    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-[var(--brand-primary)] animate-[fadeIn_200ms_ease]" />
  );

  /* Reusable desktop dropdown wrapper */
  const dropdownItem =
    "block px-3 py-2 text-[12px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition font-medium rounded-lg mx-1.5";

  /* Reusable mobile nav link */
  const mobileLink =
    "py-2 text-[14px] hover:text-[var(--brand-primary)] transition font-medium";

  const chevronDown = (
    <svg
      className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 opacity-50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  const chevronRight = (
    <svg
      className="w-3 h-3 opacity-50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );

  const chevronDownMobile = (
    <svg
      className="w-4 h-4 transition-transform duration-200 group-open/mob:rotate-180 text-slate-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100/80 transition-all duration-200">
      {/* Top Banner / Info Bar */}
      <div className="w-full bg-[var(--brand-primary)] text-white text-[10px] sm:text-[11.5px] font-medium py-1.5 px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 border-b border-blue-900/10 shrink-0">
        <div className="flex items-center gap-1.5 text-center sm:text-left">
          <svg className="w-3.5 h-3.5 opacity-80 shrink-0 hidden sm:inline-block" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
          </svg>
          <span className="tracking-wide uppercase font-bold text-white/95">
            C. S. Tubachi Education Society&apos;s
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-white/15 px-2 py-0.5 rounded text-[9.5px] sm:text-[10px] font-bold tracking-wider uppercase text-white/90">
            CBSE Affiliated No. 830729
          </span>
        </div>
      </div>

      {/* Hamburger toggle */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer sr-only" />

      {/* Top bar — full-width on lg, capped at 2xl on very large screens */}
      <div className="w-full px-4 sm:px-5 lg:px-6 h-16 sm:h-18 flex items-center justify-between gap-2">
        {/* Logo — icon only on lg, full name at xl+ */}
        <Link href="/" className="inline-flex items-center gap-2 shrink-0">
          <img
            src="/favicon_io/bg_removed_logo.png"
            alt="School Logo"
            className="h-[38px] w-auto object-contain shrink-0 sm:h-[44px] lg:h-[40px] xl:h-[46px]"
          />
          {/* School name: hidden on lg to give nav room, visible at xl+ */}
          <div className="hidden xl:flex flex-col text-left">
            <span className="text-[13px] font-extrabold leading-tight tracking-tight text-[var(--brand-ink)]">
              Shri Kadasiddheshwar Public School
            </span>
            <span className="text-[9px] font-semibold leading-none tracking-wide text-[var(--brand-primary)]">
              Hukkeri
            </span>
          </div>
          {/* Short name for lg only */}
          <div className="hidden lg:flex xl:hidden flex-col text-left">
            <span className="text-[11px] font-extrabold leading-tight tracking-tight text-[var(--brand-ink)] whitespace-nowrap">
              SK Public School
            </span>
            <span className="text-[8px] font-semibold leading-none tracking-wide text-[var(--brand-primary)]">
              Hukkeri
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-0">

          {/* Home */}
          <Link
            href="/"
            className={`px-2 py-1.5 rounded-lg text-[11.5px] font-bold transition-all duration-200 inline-flex items-center ${
              isActive("/")
                ? "bg-[var(--brand-primary)] !text-white shadow-sm"
                : "text-[var(--brand-ink)] hover:bg-slate-50 hover:text-[var(--brand-primary)]"
            }`}
          >
            Home
          </Link>

          {/* About Us */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/about") ? activeStyle : inactiveStyle
              }`}
            >
              <span>About Us</span>
              {chevronDown}
            </button>
            {isActivePrefix("/about") && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link href="/about/about-school" className={dropdownItem}>About the School</Link>
                <Link href="/about/vision-mission" className={dropdownItem}>Vision &amp; Mission</Link>
                <Link href="/about/chairmans-message" className={dropdownItem}>Chairman&apos;s Message</Link>
                <Link href="/about/secretarys-message" className={dropdownItem}>Secretary&apos;s Message</Link>
                <Link href="/about/principals-message" className={dropdownItem}>Principal&apos;s Message</Link>
                <Link href="/about/school-management" className={dropdownItem}>School Management</Link>
                <Link href="/about/visiting-hours" className={dropdownItem}>Visiting Hours</Link>
                <Link href="/about/school-timing" className={dropdownItem}>School Timing</Link>
              </div>
            </div>
          </div>

          {/* Admission */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/admission") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Admission</span>
              {chevronDown}
            </button>
            {isActivePrefix("/admission") && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link href="/admission/procedure" className={dropdownItem}>Admission Procedure</Link>
                <Link href="/admission/fees-structure" className={dropdownItem}>Fees Structure</Link>
              </div>
            </div>
          </div>

          {/* Academics */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/academics") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Academics</span>
              {chevronDown}
            </button>
            {isActivePrefix("/academics") && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link href="/academics/academic-calendar" className={dropdownItem}>Academic Calendar</Link>
                <Link href="/academics/curriculum" className={dropdownItem}>Curriculum</Link>
                <Link href="/academics/time-table" className={dropdownItem}>Academic Time Table</Link>
                <Link href="/academics/homework-policy" className={dropdownItem}>Home Work Policy</Link>
                <Link href="/academics/staff-details" className={dropdownItem}>Staff Details</Link>
              </div>
            </div>
          </div>

          {/* Examination */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/examination") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Examination</span>
              {chevronDown}
            </button>
            {isActivePrefix("/examination") && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link href="/examination/syllabus" className={dropdownItem}>Syllabus</Link>
                <Link href="/examination/exam-time-table" className={dropdownItem}>Exam Time Table</Link>
                <Link href="/examination/model-question-papers" className={dropdownItem}>Model Question Papers</Link>
                <Link href="/examination/examination-circulars" className={dropdownItem}>Examination Circulars</Link>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/facilities") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Facilities</span>
              {chevronDown}
            </button>
            {isActivePrefix("/facilities") && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link href="/facilities/library" className={dropdownItem}>Library</Link>
                <Link href="/facilities/assembly" className={dropdownItem}>Assembly</Link>
                <Link href="/facilities/sports-ground" className={dropdownItem}>Sports Ground</Link>
                <Link href="/facilities/science-lab" className={dropdownItem}>Science Lab</Link>
                <Link href="/facilities/computer-lab" className={dropdownItem}>Computer Lab</Link>
                <Link href="/facilities/mathematics-lab" className={dropdownItem}>Mathematics Lab</Link>
                <Link href="/facilities/chemistry-lab" className={dropdownItem}>Chemistry Lab</Link>
                <Link href="/facilities/art-craft" className={dropdownItem}>Art &amp; Craft (Drawing)</Link>
                <Link href="/facilities/dance-classes" className={dropdownItem}>Dance Classes (Grade I–III)</Link>
              </div>
            </div>
          </div>

          {/* Cultural Activities */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none whitespace-nowrap ${
                isActivePrefix("/cultural-activities") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Cultural Activities</span>
              {chevronDown}
            </button>
            {isActivePrefix("/cultural-activities") && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                {/* CCA sub-menu */}
                <div className="relative group/sub">
                  <div className="flex items-center justify-between px-3 py-2 text-[12px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition cursor-pointer font-semibold rounded-lg mx-1.5">
                    <span>CCA</span>
                    {chevronRight}
                  </div>
                  <div className="absolute left-full top-0 ml-1 w-36 hidden group-hover/sub:block z-50">
                    <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                      <Link href="/cultural-activities/cca/2025-26" className={dropdownItem}>2025-26</Link>
                      <Link href="/cultural-activities/cca/2026-27" className={dropdownItem}>2026-27</Link>
                    </div>
                  </div>
                </div>
                {/* Events sub-menu */}
                <div className="relative group/sub2">
                  <div className="flex items-center justify-between px-3 py-2 text-[12px] text-[var(--brand-ink)] hover:bg-[var(--brand-primary-soft)] hover:text-[var(--brand-primary)] transition cursor-pointer font-semibold rounded-lg mx-1.5">
                    <span>Events &amp; Celebration</span>
                    {chevronRight}
                  </div>
                  <div className="absolute left-full top-8 ml-1 w-36 hidden group-hover/sub2:block z-50">
                    <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                      <Link href="/cultural-activities/events/2025-26" className={dropdownItem}>2025-26</Link>
                      <Link href="/cultural-activities/events/2026-27" className={dropdownItem}>2026-27</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mandatory Disclosure */}
          <Link
            href="/mandatory-disclosure"
            className={`relative px-2 ${linkBase} whitespace-nowrap ${
              isActivePrefix("/mandatory-disclosure") ? activeStyle : inactiveStyle
            }`}
          >
            Mandatory Disclosure
            {isActivePrefix("/mandatory-disclosure") && activeBar}
          </Link>

          {/* Sports */}
          <Link
            href="/sports"
            className={`px-2 py-1.5 rounded-lg text-[11.5px] font-bold transition-all duration-200 inline-flex items-center ${
              isActivePrefix("/sports")
                ? "bg-[var(--brand-primary)] !text-white shadow-sm"
                : "text-[var(--brand-ink)] hover:bg-slate-50 hover:text-[var(--brand-primary)]"
            }`}
          >
            Sports
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            className={`px-2 py-1.5 rounded-lg text-[11.5px] font-bold transition-all duration-200 inline-flex items-center ${
              isActivePrefix("/contact")
                ? "bg-[var(--brand-primary)] !text-white shadow-sm"
                : "text-[var(--brand-ink)] hover:bg-slate-50 hover:text-[var(--brand-primary)]"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right: search + hamburger */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e5e5e5] transition text-[#111111] focus:outline-none"
            aria-label="Search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <label
            htmlFor="mobile-menu-toggle"
            className="lg:hidden w-9 h-9 rounded-full bg-[#f5f5f5] flex flex-col items-center justify-center gap-[5px] cursor-pointer hover:bg-[#e5e5e5] transition"
            aria-label="Toggle menu"
          >
            <span className="block h-[2px] bg-[var(--brand-ink)] rounded-full" style={{ width: "18px" }} />
            <span className="block h-[2px] bg-[var(--brand-ink)] rounded-full" style={{ width: "18px" }} />
            <span className="block h-[2px] bg-[var(--brand-ink)] rounded-full" style={{ width: "18px" }} />
          </label>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <nav
        className="
          lg:hidden overflow-hidden
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
              isActive("/") ? "bg-[var(--brand-primary)] !text-white" : "hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* About Us */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>About Us</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/about/about-school" className={mobileLink}>About the School</Link>
              <Link href="/about/vision-mission" className={mobileLink}>Vision &amp; Mission</Link>
              <Link href="/about/chairmans-message" className={mobileLink}>Chairman&apos;s Message</Link>
              <Link href="/about/secretarys-message" className={mobileLink}>Secretary&apos;s Message</Link>
              <Link href="/about/principals-message" className={mobileLink}>Principal&apos;s Message</Link>
              <Link href="/about/school-management" className={mobileLink}>School Management</Link>
              <Link href="/about/visiting-hours" className={mobileLink}>Visiting Hours</Link>
              <Link href="/about/school-timing" className={mobileLink}>School Timing</Link>
            </div>
          </details>

          {/* Admission */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Admission</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/admission/procedure" className={mobileLink}>Admission Procedure</Link>
              <Link href="/admission/fees-structure" className={mobileLink}>Fees Structure</Link>
            </div>
          </details>

          {/* Academics */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Academics</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/academics/academic-calendar" className={mobileLink}>Academic Calendar</Link>
              <Link href="/academics/curriculum" className={mobileLink}>Curriculum</Link>
              <Link href="/academics/time-table" className={mobileLink}>Academic Time Table</Link>
              <Link href="/academics/homework-policy" className={mobileLink}>Home Work Policy</Link>
              <Link href="/academics/staff-details" className={mobileLink}>Staff Details</Link>
            </div>
          </details>

          {/* Examination */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Examination</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/examination/syllabus" className={mobileLink}>Syllabus</Link>
              <Link href="/examination/exam-time-table" className={mobileLink}>Exam Time Table</Link>
              <Link href="/examination/model-question-papers" className={mobileLink}>Model Question Papers</Link>
              <Link href="/examination/examination-circulars" className={mobileLink}>Examination Circulars</Link>
            </div>
          </details>

          {/* Facilities */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Facilities</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/facilities/library" className={mobileLink}>Library</Link>
              <Link href="/facilities/assembly" className={mobileLink}>Assembly</Link>
              <Link href="/facilities/sports-ground" className={mobileLink}>Sports Ground</Link>
              <Link href="/facilities/science-lab" className={mobileLink}>Science Lab</Link>
              <Link href="/facilities/computer-lab" className={mobileLink}>Computer Lab</Link>
              <Link href="/facilities/mathematics-lab" className={mobileLink}>Mathematics Lab</Link>
              <Link href="/facilities/chemistry-lab" className={mobileLink}>Chemistry Lab</Link>
              <Link href="/facilities/art-craft" className={mobileLink}>Art &amp; Craft (Drawing)</Link>
              <Link href="/facilities/dance-classes" className={mobileLink}>Dance Classes (Grade I–III)</Link>
            </div>
          </details>

          {/* Cultural Activities */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Cultural Activities</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              {/* CCA sub */}
              <details className="group/cca relative mt-0.5">
                <summary className="flex items-center justify-between py-2 text-[14px] hover:text-[var(--brand-primary)] cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold">
                  <span>CCA</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-open/cca:rotate-180 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="pl-4 py-1 flex flex-col gap-0.5 border-l border-slate-200 ml-2">
                  <Link href="/cultural-activities/cca/2025-26" className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium">2025-26</Link>
                  <Link href="/cultural-activities/cca/2026-27" className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium">2026-27</Link>
                </div>
              </details>
              {/* Events sub */}
              <details className="group/events relative mt-0.5">
                <summary className="flex items-center justify-between py-2 text-[14px] hover:text-[var(--brand-primary)] cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold">
                  <span>Events &amp; Celebration</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-open/events:rotate-180 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="pl-4 py-1 flex flex-col gap-0.5 border-l border-slate-200 ml-2">
                  <Link href="/cultural-activities/events/2025-26" className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium">2025-26</Link>
                  <Link href="/cultural-activities/events/2026-27" className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium">2026-27</Link>
                </div>
              </details>
            </div>
          </details>

          {/* Mandatory Disclosure */}
          <Link
            href="/mandatory-disclosure"
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition ${
              isActivePrefix("/mandatory-disclosure")
                ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] font-bold"
                : "hover:bg-slate-50"
            }`}
          >
            Mandatory Disclosure
          </Link>

          {/* Sports */}
          <Link
            href="/sports"
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition ${
              isActivePrefix("/sports")
                ? "bg-[var(--brand-primary-soft)] text-[var(--brand-primary)] font-bold"
                : "hover:bg-slate-50"
            }`}
          >
            Sports
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
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
