"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle ESC key to close search, and Ctrl/Cmd + K to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const SEARCHABLE_PAGES = [
    { title: "Home", href: "/", category: "General", tags: "index welcome main start" },
    { title: "🌴 Kindergarten (KG)", href: "/kindergarten", category: "Academics", tags: "kg child kids play group nursery class jungle adventure" },
    { title: "About the School", href: "/about/about-school", category: "About Us", tags: "history info introduce details campus overview" },
    { title: "Vision & Mission", href: "/about/vision-mission", category: "About Us", tags: "goal core values objective philosophy" },
    { title: "Chairman's Message", href: "/about/chairmans-message", category: "About Us", tags: "speech leader founder words desk" },
    { title: "Principal's Message", href: "/about/principals-message", category: "About Us", tags: "words leader desk head authority" },
    { title: "Secretary's Message", href: "/about/secretarys-message", category: "About Us", tags: "words leader desk desk" },
    { title: "School Management", href: "/about/school-management", category: "About Us", tags: "committee members trustees board list" },
    { title: "Visiting Hours", href: "/about/visiting-hours", category: "About Us", tags: "time schedule meet principal authority appointment" },
    { title: "School Timing", href: "/about/school-timing", category: "About Us", tags: "timing hours slot class assembly breaks schedule" },
    { title: "Admission Procedure", href: "/admission/procedure", category: "Admission", tags: "enroll register entry join seat rules process criteria age" },
    { title: "Fees Structure", href: "/admission/fees-structure", category: "Admission", tags: "cost tuition term payment structure charge installments" },
    { title: "Achievements", href: "/students-corner/achievements", category: "Student's Corner", tags: "awards trophy prizes ranks sports success winners" },
    { title: "Assembly", href: "/students-corner/assembly", category: "Student's Corner", tags: "morning prayer speech activities gather morning" },
    { title: "Birth Day Celebrations", href: "/students-corner/birthday-celebrations", category: "Student's Corner", tags: "celebrate birth cake chocolate wishes student child" },
    { title: "Academic Calendar", href: "/academics/academic-calendar", category: "Academics", tags: "dates holidays schedule events year planner diary" },
    { title: "Curriculum", href: "/academics/curriculum", category: "Academics", tags: "cbse subject syllabus books courses study" },
    { title: "Transfer Certificate (TC)", href: "/academics/transfer-certificate", category: "Academics", tags: "tc format application leaving withdraw certificate counter" },
    { title: "Academic Time Table", href: "/academics/time-table", category: "Academics", tags: "period schedule classes timing slots day daily" },
    { title: "Home Work Policy", href: "/academics/homework-policy", category: "Academics", tags: "assignment study rules practice daily load" },
    { title: "Staff Details", href: "/academics/staff-details", category: "Academics", tags: "teachers faculty list qualifications experience principal vice-principal" },
    { title: "Syllabus", href: "/examination/syllabus", category: "Examination", tags: "exams subjects portions test course curriculum exam portions" },
    { title: "Exam Time Table", href: "/examination/exam-time-table", category: "Examination", tags: "dates dates schedule periodic test summative formative" },
    { title: "Parent's Squad", href: "/examination/parents-squad", category: "Examination", tags: "parent squad meeting association support pta discussion" },
    { title: "Model Question Papers", href: "/examination/model-question-papers", category: "Examination", tags: "sample question paper previous year practice test pdf" },
    { title: "Examination Circulars", href: "/examination/examination-circulars", category: "Examination", tags: "notice news board dates exam rule notification" },
    { title: "Science Lab", href: "/facilities/science-lab", category: "Facilities", tags: "physics chemistry biology experiment lab safety equipments" },
    { title: "Chemistry Lab", href: "/facilities/chemistry-lab", category: "Facilities", tags: "chemicals gas experiments burner tubes lab safety" },
    { title: "Computer Lab", href: "/facilities/computer-lab", category: "Facilities", tags: "pc internet typing programming software digital learning" },
    { title: "Library", href: "/facilities/library", category: "Facilities", tags: "books reading novel story reference study silence cards journals" },
    { title: "Sports Ground", href: "/facilities/sports-ground", category: "Facilities", tags: "play play ground games running track football cricket pitch court" },
    { title: "Art & Craft (Drawing)", href: "/facilities/art-craft", category: "Facilities", tags: "painting colors draw sketches hobby design creative exhibition" },
    { title: "Dance Classes (Grade I–III)", href: "/facilities/dance-classes", category: "Facilities", tags: "music steps classical folk junior extra-curricular expression" },
    { title: "Sports & Games", href: "/sports", category: "General", tags: "p.e. physical education yoga athletics track indoor outdoor games" },
    { title: "Contact Us", href: "/contact", category: "General", tags: "address phone mobile email principal vice-principal maps query location" },
    { title: "Mandatory Public Disclosure", href: "/mandatory-disclosure", category: "Disclosure", tags: "cbse requirements rules building fire safety noc smc water certificate" },
    { title: "Annual Report", href: "/mandatory-disclosure/annual-report", category: "Disclosure", tags: "report progress details achievement results annual board" },
  ];

  const filteredPages = searchQuery.trim()
    ? SEARCHABLE_PAGES.filter((page) => {
        const query = searchQuery.toLowerCase();
        return (
          page.title.toLowerCase().includes(query) ||
          page.category.toLowerCase().includes(query) ||
          page.tags.toLowerCase().includes(query)
        );
      }).slice(0, 8)
    : SEARCHABLE_PAGES.slice(0, 5);


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
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="peer sr-only"
        checked={isMobileMenuOpen}
        onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
      />

      {/* Top bar — full-width on lg, capped at 2xl on very large screens */}
      <div className="w-full px-4 sm:px-5 lg:px-6 h-16 sm:h-18 flex items-center justify-between gap-2">
        {/* Logo — icon only on lg, full name at xl+ */}
        <Link href="/" className="inline-flex items-center gap-2 shrink-0">
          <img
            src="/favicon_io/bg_removed_logo.png"
            alt="School Logo"
            className="h-[38px] w-auto object-contain shrink-0 sm:h-[44px] lg:h-[40px] xl:h-[46px]"
          />
          {/* School name on mobile/tablet (below lg) */}
          <div className="flex lg:hidden flex-col text-left">
            <span className="text-[12px] sm:text-[13px] font-extrabold leading-tight tracking-tight text-[var(--brand-ink)]">
              SK Public School
            </span>
            <span className="text-[8px] sm:text-[9px] font-semibold leading-none tracking-wide text-[var(--brand-primary)]">
              Hukkeri
            </span>
          </div>
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

          {/* Kindergarten */}
          <Link
            href="/kindergarten"
            className={`px-2 py-1.5 rounded-lg text-[11.5px] font-bold transition-all duration-200 inline-flex items-center gap-1 ${
              isActivePrefix("/kindergarten")
                ? "bg-green-600 !text-white shadow-sm font-extrabold"
                : "text-green-700 hover:bg-green-50 hover:text-green-800 font-extrabold"
            }`}
          >
            <span>🌴</span> Kindergarten
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
                <Link href="/about/principals-message" className={dropdownItem}>Principal&apos;s Message</Link>
                <Link href="/about/secretarys-message" className={dropdownItem}>Secretary&apos;s Message</Link>
                <Link href="/about/school-management" className={dropdownItem}>School Management</Link>
                <Link href="/about/visiting-hours" className={dropdownItem}>Visiting Hours</Link>
                <Link href="/about/school-timing" className={dropdownItem}>School Timing</Link>
              </div>
            </div>
          </div>

          {/* Student's Corner */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/students-corner") || isActivePrefix("/admission") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Student&apos;s Corner</span>
              {chevronDown}
            </button>
            {(isActivePrefix("/students-corner") || isActivePrefix("/admission")) && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link href="/admission/procedure" className={dropdownItem}>Admission Procedure</Link>
                <Link href="/students-corner/achievements" className={dropdownItem}>Achievements</Link>
                <Link href="/students-corner/assembly" className={dropdownItem}>Assembly</Link>
                <Link href="/students-corner/birthday-celebrations" className={dropdownItem}>Birth Day Celebrations</Link>
              </div>
            </div>
          </div>

          {/* Academics */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none ${
                isActivePrefix("/academics") || isActivePrefix("/kindergarten") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Academics</span>
              {chevronDown}
            </button>
            {(isActivePrefix("/academics") || isActivePrefix("/kindergarten")) && (
              <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-[var(--brand-primary)]" />
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 hidden group-hover:block z-50">
              <div className="bg-white border border-slate-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1.5">
                <Link href="/kindergarten" className={dropdownItem}>KG (Kindergarten)</Link>
                <Link href="/academics/academic-calendar" className={dropdownItem}>Academic Calendar</Link>
                <Link href="/academics/curriculum" className={dropdownItem}>Curriculum</Link>
                <Link href="/academics/transfer-certificate" className={dropdownItem}>Transfer Certificate</Link>
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
                <Link href="/examination/parents-squad" className={dropdownItem}>Parent&apos;s Squad</Link>
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
                <Link href="/facilities/science-lab" className={dropdownItem}>Science Lab</Link>
                <Link href="/facilities/chemistry-lab" className={dropdownItem}>Chemistry Lab</Link>
                <Link href="/facilities/computer-lab" className={dropdownItem}>Computer Lab</Link>
                <Link href="/facilities/library" className={dropdownItem}>Library</Link>
                <Link href="/facilities/sports-ground" className={dropdownItem}>Sports Ground</Link>
                <Link href="/facilities/art-craft" className={dropdownItem}>Art &amp; Craft (Drawing)</Link>
                <Link href="/facilities/dance-classes" className={dropdownItem}>Dance Classes (Grade I–III)</Link>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-2 ${linkBase} cursor-pointer bg-transparent border-none whitespace-nowrap ${
                isActivePrefix("/cultural-activities") ? activeStyle : inactiveStyle
              }`}
            >
              <span>Activities</span>
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
            onClick={() => setIsSearchOpen(true)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e5e5e5] transition text-[#111111] focus:outline-none cursor-pointer"
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

      {/* Backdrop overlay for mobile drawer */}
      <label
        htmlFor="mobile-menu-toggle"
        className="fixed inset-0 z-[90] bg-slate-950/40 backdrop-blur-xs opacity-0 pointer-events-none transition-opacity duration-300 peer-checked:opacity-100 peer-checked:pointer-events-auto lg:hidden"
      />

      {/* ── Mobile Drawer ── */}
      <nav
        className="
          lg:hidden fixed top-0 right-0 bottom-0 z-[100]
          w-[80vw] max-w-[300px] h-screen bg-white shadow-2xl flex flex-col
          translate-x-full peer-checked:translate-x-0
          transition-transform duration-300 ease-in-out
        "
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-2">
            <img
              src="/favicon_io/bg_removed_logo.png"
              alt="School Logo"
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-[12px] font-extrabold leading-tight tracking-tight text-[var(--brand-ink)]">
                SK Public School
              </span>
              <span className="text-[8px] font-semibold leading-none tracking-wide text-[var(--brand-primary)]">
                Hukkeri
              </span>
            </div>
          </div>
          
          <label
            htmlFor="mobile-menu-toggle"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer text-slate-500 hover:text-slate-700 transition"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-0.5 text-[var(--brand-ink)] font-semibold text-[15px]">

          {/* Home */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold transition ${
              isActive("/") ? "bg-[var(--brand-primary)] !text-white" : "hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* Kindergarten */}
          <Link
            href="/kindergarten"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold transition ${
              isActivePrefix("/kindergarten")
                ? "bg-green-600 !text-white font-extrabold"
                : "text-green-700 hover:bg-green-50 font-extrabold"
            }`}
          >
            <span>🌴</span> Kindergarten
          </Link>

          {/* About Us */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>About Us</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/about/about-school" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>About the School</Link>
              <Link href="/about/vision-mission" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Vision &amp; Mission</Link>
              <Link href="/about/chairmans-message" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Chairman&apos;s Message</Link>
              <Link href="/about/principals-message" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Principal&apos;s Message</Link>
              <Link href="/about/secretarys-message" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Secretary&apos;s Message</Link>
              <Link href="/about/school-management" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>School Management</Link>
              <Link href="/about/visiting-hours" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Visiting Hours</Link>
              <Link href="/about/school-timing" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>School Timing</Link>
            </div>
          </details>

          {/* Student's Corner */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Student&apos;s Corner</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/admission/procedure" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Admission Procedure</Link>
              <Link href="/students-corner/achievements" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Achievements</Link>
              <Link href="/students-corner/assembly" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Assembly</Link>
              <Link href="/students-corner/birthday-celebrations" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Birth Day Celebrations</Link>
            </div>
          </details>

          {/* Academics */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Academics</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/kindergarten" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>KG (Kindergarten)</Link>
              <Link href="/academics/academic-calendar" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Academic Calendar</Link>
              <Link href="/academics/curriculum" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Curriculum</Link>
              <Link href="/academics/transfer-certificate" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Transfer Certificate</Link>
              <Link href="/academics/time-table" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Academic Time Table</Link>
              <Link href="/academics/homework-policy" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Home Work Policy</Link>
              <Link href="/academics/staff-details" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Staff Details</Link>
            </div>
          </details>

          {/* Examination */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Examination</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/examination/syllabus" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Syllabus</Link>
              <Link href="/examination/exam-time-table" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Exam Time Table</Link>
              <Link href="/examination/parents-squad" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Parent&apos;s Squad</Link>
              <Link href="/examination/model-question-papers" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Model Question Papers</Link>
              <Link href="/examination/examination-circulars" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Examination Circulars</Link>
            </div>
          </details>

          {/* Facilities */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Facilities</span>
              {chevronDownMobile}
            </summary>
            <div className="pl-6 pr-4 py-1.5 flex flex-col gap-0.5 border-l-2 border-[var(--brand-primary-light)] ml-4">
              <Link href="/facilities/science-lab" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Science Lab</Link>
              <Link href="/facilities/chemistry-lab" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Chemistry Lab</Link>
              <Link href="/facilities/computer-lab" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Computer Lab</Link>
              <Link href="/facilities/library" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Library</Link>
              <Link href="/facilities/sports-ground" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Sports Ground</Link>
              <Link href="/facilities/art-craft" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Art &amp; Craft (Drawing)</Link>
              <Link href="/facilities/dance-classes" onClick={() => setIsMobileMenuOpen(false)} className={mobileLink}>Dance Classes (Grade I–III)</Link>
            </div>
          </details>

          {/* Activities */}
          <details className="group/mob relative">
            <summary className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span>Activities</span>
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
                  <Link href="/cultural-activities/cca/2025-26" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium">2025-26</Link>
                  <Link href="/cultural-activities/cca/2026-27" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium">2026-27</Link>
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
                  <Link href="/cultural-activities/events/2025-26" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium">2025-26</Link>
                  <Link href="/cultural-activities/events/2026-27" onClick={() => setIsMobileMenuOpen(false)} className="py-1.5 text-[13px] hover:text-[var(--brand-primary)] transition font-medium">2026-27</Link>
                </div>
              </details>
            </div>
          </details>

          {/* Mandatory Disclosure */}
          <Link
            href="/mandatory-disclosure"
            onClick={() => setIsMobileMenuOpen(false)}
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
            onClick={() => setIsMobileMenuOpen(false)}
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
            onClick={() => setIsMobileMenuOpen(false)}
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

      {/* ── Search Modal Overlay ── */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/45 backdrop-blur-sm transition-opacity"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery("");
            }}
          />
          
          {/* Modal Box */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100/90 flex flex-col overflow-hidden max-h-[65vh]">
            {/* Input box */}
            <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
              <svg className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages (e.g. Admission, Fees, Contact)..."
                className="w-full bg-transparent border-none text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 py-1"
              />
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="text-[10px] font-bold text-slate-400 hover:text-slate-600 transition bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded"
              >
                ESC
              </button>
            </div>

            {/* Results box */}
            <div className="overflow-y-auto p-2 flex flex-col gap-1 min-h-[160px]">
              {filteredPages.length > 0 ? (
                filteredPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group text-left"
                  >
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[var(--brand-primary)] transition-colors">
                        {page.title}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {page.category}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 group-hover:text-[var(--brand-primary)] group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                ))
              ) : (
                <div className="py-8 px-4 text-center flex flex-col items-center justify-center gap-2">
                  <span className="text-2xl">🔍</span>
                  <span className="text-[13px] font-medium text-slate-500">No results found for &quot;{searchQuery}&quot;</span>
                  <span className="text-[11px] text-slate-400">Try searching for &quot;Admission&quot;, &quot;Fees&quot;, &quot;Lab&quot;, or &quot;Kindergarten&quot;</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
