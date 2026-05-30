"use client";

import { useEffect, useState } from "react";

const heroBanners = [
  {
    src: "/banner1.png",
    alt: "Shri Kadasiddheshwar Public School banner",
    mobilePosition: "center 28%",
  },
  {
    src: "/banner2.png",
    alt: "Shri Kadasiddheshwar Public School banner two",
    mobilePosition: "center 42%",
  },
  {
    src: "/banner3.png",
    alt: "Shri Kadasiddheshwar Public School banner three",
    mobilePosition: "center 38%",
  },
];

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % heroBanners.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col bg-white min-h-screen">
      <main className="flex-1 w-full">

        {/* ═══════════════════════════════════════════════════════════
            HERO BANNER — Full-width image with curved swoosh overlay
        ═══════════════════════════════════════════════════════════ */}
        <div className="w-full pt-3 sm:pt-4 md:pt-3">
          <div className="max-w-[1920px] mx-auto px-5 sm:px-6 lg:px-8">

            {/* ── MOBILE HERO LAYOUT ─────────────────────────────── */}
            <div className="block md:hidden">
              <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden rounded-[18px]">
                {heroBanners.map((banner, index) => (
                  <img
                    key={banner.src}
                    src={banner.src}
                    alt={banner.alt}
                    style={{ objectPosition: banner.mobilePosition }}
                    className={`absolute inset-0 h-full w-full object-cover object-center select-none transition-opacity duration-1000 ${
                      index === activeBanner ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* ── Mobile curved swoosh — bottom-left for crest logo ─────── */}
                <div
                  className="absolute bottom-0 left-0 bg-white"
                  style={{
                    borderTopRightRadius: '72% 72%',
                    width: 'clamp(138px, 38vw, 212px)',
                    height: 'clamp(108px, 28vw, 168px)',
                  }}
                >
                  <div className="absolute bottom-4 left-5 w-[72px] h-[72px] flex items-center justify-center">
                    <img
                      src="/favicon_io/bg_removed_logo.png"
                      alt="School Crest"
                      className="max-w-full max-h-full object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile brand identity / tagline below */}
              <div className="w-full pt-7 pb-3">
                <img
                  src="/HEROD.png"
                  alt="Shri Kadasiddheshwar Public School Tagline"
                  className="mx-auto h-auto w-full max-w-[390px] object-contain select-none"
                />
              </div>
            </div>

            {/* ── DESKTOP HERO LAYOUT ────────────────────────────── */}
            <div className="hidden md:block">
              <div className="relative w-full md:h-[480px] lg:h-[560px] xl:h-[600px] overflow-hidden md:rounded-[30px]">
                {heroBanners.map((banner, index) => (
                  <img
                    key={banner.src}
                    src={banner.src}
                    alt={banner.alt}
                    style={{ objectPosition: "center center" }}
                    className={`absolute inset-0 h-full w-full object-cover object-center select-none transition-opacity duration-1000 ${
                      index === activeBanner ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* ── Desktop curved swoosh — containing both crest logo and tagline ─────── */}
                <div
                  className="absolute bottom-0 left-0 bg-white"
                  style={{
                    borderTopRightRadius: '72% 72%',
                    width: 'clamp(240px, 58vw, 620px)',
                    height: 'clamp(180px, 64%, 380px)',
                  }}
                >
                  {/* ── School Crest (Logo) ──────────────────────────── */}
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      top: 'clamp(14px, 6vw, 118px)',
                      left: 'clamp(16px, 5vw, 96px)',
                      width: 'clamp(44px, 10vw, 128px)',
                      height: 'clamp(44px, 10vw, 128px)',
                    }}
                  >
                    <img
                      src="/favicon_io/bg_removed_logo.png"
                      alt="School Crest"
                      className="max-w-full max-h-full object-contain drop-shadow-sm"
                    />
                  </div>

                  {/* ── HEROD Identity Image ─────────────────────────── */}
                  <img
                    src="/HEROD.png"
                    alt="School Tagline and Identity"
                    className="absolute h-auto object-contain select-none"
                    style={{
                      bottom: 'clamp(10px, 3vw, 28px)',
                      left: 'clamp(8px, 3vw, 72px)',
                      width: 'clamp(160px, 38vw, 547px)',
                    }}
                  />
                </div>

                {/* Subtle right-edge fade */}
                <div className="absolute inset-y-0 right-0 w-[60px] bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            STATS ROW — 2×2 grid on mobile, single row on md+
        ═══════════════════════════════════════════════════════════ */}
        <div className="w-full border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-8 md:pt-8 md:pb-8">
            {/* 2 columns on mobile, 4 columns on md+ */}
            <div className="grid grid-cols-2 md:flex md:flex-nowrap md:justify-end items-center gap-y-2 md:gap-0">

              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center py-4 md:py-0 md:px-6 lg:px-8 border-slate-300
                              border-r md:border-r md:border-l">
                <span className="text-[30px] sm:text-2xl lg:text-[1.75rem] font-extrabold text-slate-400 md:text-[var(--brand-ink)] leading-none">1,000+</span>
                <span className="text-[13px] sm:text-[10px] md:text-xs font-bold text-slate-400 md:text-slate-500 tracking-normal md:uppercase md:tracking-wider mt-1.5">
                  Students
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center py-4 md:py-0 md:px-6 lg:px-8 border-slate-300
                              md:border-l">
                <span className="text-[30px] sm:text-2xl lg:text-[1.75rem] font-extrabold text-slate-400 md:text-[var(--brand-ink)] leading-none">50+</span>
                <span className="text-[13px] sm:text-[10px] md:text-xs font-bold text-slate-400 md:text-slate-500 tracking-normal md:uppercase md:tracking-wider mt-1.5">
                  Expert Staff
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center py-4 md:py-0 md:px-6 lg:px-8 border-slate-300
                              border-r md:border-r-0 md:border-l">
                <span className="text-[30px] sm:text-2xl lg:text-[1.75rem] font-extrabold text-slate-400 md:text-[var(--brand-ink)] leading-none">100%</span>
                <span className="text-[13px] sm:text-[10px] md:text-xs font-bold text-slate-400 md:text-slate-500 tracking-normal md:uppercase md:tracking-wider mt-1.5">
                  Results
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center py-4 md:py-0 md:px-6 lg:px-8 border-slate-300
                              md:border-l">
                <span className="text-[30px] sm:text-2xl lg:text-[1.75rem] font-extrabold text-slate-400 md:text-[var(--brand-ink)] leading-none">1</span>
                <span className="text-[13px] sm:text-[10px] md:text-xs font-bold text-slate-400 md:text-slate-500 tracking-normal md:uppercase md:tracking-wider mt-1.5">
                  Dynamic Campus
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            ABOUT US SECTION — New 2nd Section
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative w-full bg-white py-12 sm:py-24 lg:py-32 overflow-hidden">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulse-ring-custom {
              0%, 100% { transform: scale(0.95); opacity: 0.15; }
              50% { transform: scale(1.05); opacity: 0.35; }
            }
            @keyframes pulse-glow-custom {
              0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.9); }
              50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
            }
          `}} />
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
              
              {/* Left Content */}
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-6 h-[2px] bg-[var(--brand-primary)]"></div>
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-900 uppercase">
                    About Us
                  </span>
                </div>
                
                <h2 className="text-[32px] leading-[1.15] sm:text-5xl lg:text-[56px] font-medium tracking-tight text-slate-900 sm:leading-[1.1] mb-5 sm:mb-6">
                  A Legacy of Learning,<br />
                  A Future of Discovery.
                </h2>
                
                <p className="text-[15px] sm:text-lg leading-relaxed text-slate-600 mb-8">
                  Shri Kadasiddheshwar Public School (SKPS) has been a pioneer in education in Hukkeri, shaping future leaders and innovators. With a strong foundation in academic excellence and holistic development, we continue to push boundaries to provide quality education focused on character, curiosity, and community engagement. Our legacy thrives through our students who are equipped to make a meaningful impact in their communities.
                </p>
                
                <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold tracking-wide !text-white transition-all bg-[var(--brand-primary)] rounded-full hover:bg-[var(--brand-primary-hover)] shadow-lg shadow-[var(--brand-primary)]/30">
                  VIEW MORE
                </a>
              </div>

              {/* Right Visual - Glowing SKPS Outline */}
              <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] mt-4 sm:mt-0">
                {/* Concentric Circles Background */}
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
                  style={{ animation: 'pulse-ring-custom 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                >
                  <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full border border-slate-400"></div>
                  <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full border border-slate-300"></div>
                  <div className="absolute w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] rounded-full border border-slate-200"></div>
                  <div className="absolute w-[560px] h-[560px] sm:w-[800px] sm:h-[800px] rounded-full border border-slate-100"></div>
                </div>

                {/* Glowing Blobs */}
                <div 
                  className="absolute top-1/2 left-1/2 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-[var(--brand-primary-light)] rounded-full mix-blend-multiply filter blur-[50px] sm:blur-[80px]"
                  style={{ animation: 'pulse-glow-custom 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                ></div>
                <div 
                  className="absolute top-1/2 left-1/2 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-[var(--brand-primary)] rounded-full mix-blend-multiply filter blur-[50px] sm:blur-[80px] translate-x-8 translate-y-8 sm:translate-x-12 sm:translate-y-12"
                  style={{ animation: 'pulse-glow-custom 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '1s' }}
                ></div>

                {/* Outline Text */}
                <div className="relative z-10 select-none pointer-events-none flex items-center justify-center w-full h-full">
                  <span 
                    className="text-[84px] sm:text-[140px] md:text-[160px] lg:text-[200px] font-black tracking-tighter"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '2px rgba(255,255,255,1)',
                      textShadow: '0 8px 32px rgba(0,0,0,0.15)'
                    }}
                  >
                    SKPS
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SCHOOL LIFE SECTION — premium layered third section
        ═══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-white pb-16 pt-8 sm:pb-20 sm:pt-12 lg:pb-24">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[18px] bg-[var(--brand-primary)] shadow-[0_34px_110px_rgba(15,23,42,0.18)] sm:rounded-[24px] md:rounded-[30px]">
              <img
                src="/section-2/BG.png"
                alt="SKPS campus background"
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,18,48,0.9)_0%,rgba(9,35,92,0.7)_38%,rgba(7,18,48,0.12)_70%,rgba(7,18,48,0.04)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(3,9,25,0)_0%,rgba(3,9,25,0.48)_100%)]" />
              <div className="absolute left-6 top-6 h-[calc(100%-48px)] w-[calc(100%-48px)] rounded-[14px] border border-white/12 sm:rounded-[20px] md:rounded-[24px]" />
              <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_48%)] lg:block" />

              <div className="relative z-10 grid min-h-[620px] grid-cols-1 items-center gap-8 p-6 sm:min-h-[700px] sm:p-10 lg:min-h-[690px] lg:grid-cols-[0.95fr_1.05fr] lg:p-14 xl:p-16">
                <div className="relative z-20 max-w-xl text-white">
                  <div className="mb-5 flex w-fit items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#ffd36d]" />
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/88">
                      School Life At SKPS
                    </span>
                  </div>
                  <h2 className="text-4xl font-black leading-[0.96] sm:text-5xl lg:text-[64px]">
                    Where young minds become
                    <span className="mt-2 block font-[var(--font-dancing-script)] text-[72px] font-bold leading-[0.78] text-[#ffd7c3] sm:text-[104px] lg:text-[138px]">
                      Future Ready
                    </span>
                  </h2>
                  <p className="mt-6 max-w-lg text-sm font-medium leading-7 text-white/88 sm:text-base">
                    A refined school environment built around joyful learning, disciplined routines, creative exposure, and the confidence every child deserves.
                  </p>

                  <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 text-white/90">
                    <div className="pr-4">
                      <span className="block text-2xl font-black leading-none">1000+</span>
                      <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/72">Students</span>
                    </div>
                    <div className="border-l border-white/16 pl-4">
                      <span className="block text-2xl font-black leading-none">50+</span>
                      <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/72">Faculty</span>
                    </div>
                    <div className="border-l border-white/16 pl-4">
                      <span className="block text-2xl font-black leading-none">100%</span>
                      <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/72">Results</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[var(--brand-primary)] shadow-[0_18px_42px_rgba(15,23,42,0.16)] transition hover:bg-[var(--brand-primary-light)]"
                  >
                    Discover school life
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="relative flex min-h-[360px] items-end justify-center lg:min-h-[540px] lg:justify-end">
                  <img
                    src="/section-2/student.png"
                    alt="Primary student holding a pencil"
                    className="absolute left-0 top-4 z-20 h-[210px] w-auto object-contain drop-shadow-[0_20px_44px_rgba(0,0,0,0.28)] sm:left-[6%] sm:h-[280px] lg:left-[-4%] lg:top-16 lg:h-[350px] xl:left-[4%]"
                  />
                  <div className="absolute bottom-8 right-0 z-10 h-40 w-[72%] bg-[linear-gradient(90deg,rgba(255,211,109,0.18),rgba(255,255,255,0.04))] blur-2xl" />
                  <img
                    src="/section-2/student1.png"
                    alt="Student with backpack"
                    className="relative z-30 h-[310px] w-auto object-contain drop-shadow-[0_24px_54px_rgba(0,0,0,0.34)] sm:h-[420px] lg:h-[540px]"
                  />
                </div>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                MARQUEE SECTION — Floating links straddling the border
            ═══════════════════════════════════════════════════════════ */}
            <div className="w-full relative -mt-8 sm:-mt-10 z-30">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee-scroll {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee-scroll 35s linear infinite;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}} />
              <div className="relative mx-auto max-w-6xl overflow-hidden rounded-full bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] py-4 sm:py-5">
                
                {/* Fade overlays for smooth entry/exit */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white/95 to-transparent z-10 pointer-events-none rounded-l-full"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white/95 to-transparent z-10 pointer-events-none rounded-r-full"></div>

                <div className="flex whitespace-nowrap animate-marquee w-max">
                  {/* Render the content twice inside the scrolling container for a seamless loop */}
                  {[...Array(2)].map((_, arrayIndex) => (
                    <div key={arrayIndex} className="flex items-center">
                      {["2026-27 Fees", "Notification", "Syllabus", "Bus Routes", "Brochure-2026", "NIRF", "Admissions Open"].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <a href="#" className="px-6 sm:px-12 text-[14px] sm:text-[16px] font-bold text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors duration-300 tracking-wide">
                            {item}
                          </a>
                          <span className="text-[var(--brand-primary)] opacity-40 font-black">||</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            NEWS & EVENTS SECTION — 4th Section
        ═══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-white pt-2 sm:pt-4 lg:pt-6 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
          <div className="mx-auto max-w-[1920px] px-5 sm:px-6 lg:px-12">
            
            {/* Top row: Events title image on the left, Overlapping circles on the right */}
            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between mb-16 sm:mb-24 gap-12 lg:gap-8">
              
              {/* Events Title Image */}
              <div className="relative select-none flex-shrink-0 mx-auto lg:mx-0">
                <img 
                  src="/section-4/events.png" 
                  alt="Events Title" 
                  className="w-[180px] sm:w-[260px] xl:w-[340px] h-auto object-contain mix-blend-multiply opacity-95 object-center lg:object-left mx-auto lg:mx-0"
                />
              </div>

              {/* Overlapping Circles */}
              <div className="relative z-10 flex flex-nowrap items-center flex-1 justify-center lg:justify-end overflow-x-auto lg:overflow-visible py-4 scrollbar-hide px-4 sm:px-6 lg:px-0">
                {/* Circle 1 */}
                <div className="w-[100px] h-[100px] min-[400px]:w-[120px] min-[400px]:h-[120px] sm:w-[200px] sm:h-[200px] xl:w-[280px] xl:h-[280px] rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex-shrink-0 z-10 relative cursor-pointer transition-all duration-300 hover:scale-105 hover:z-50">
                  <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" alt="Convocation Ceremony" className="w-full h-full object-cover" />
                </div>
                {/* Circle 2 */}
                <div className="w-[100px] h-[100px] min-[400px]:w-[120px] min-[400px]:h-[120px] sm:w-[200px] sm:h-[200px] xl:w-[280px] xl:h-[280px] rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex-shrink-0 -ml-6 min-[400px]:-ml-8 sm:-ml-12 xl:-ml-16 z-20 relative cursor-pointer transition-all duration-300 hover:scale-105 hover:z-50">
                  <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop" alt="Guest Speakers" className="w-full h-full object-cover" />
                </div>
                {/* Circle 3 */}
                <div className="w-[100px] h-[100px] min-[400px]:w-[120px] min-[400px]:h-[120px] sm:w-[200px] sm:h-[200px] xl:w-[280px] xl:h-[280px] rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex-shrink-0 -ml-6 min-[400px]:-ml-8 sm:-ml-12 xl:-ml-16 z-30 relative cursor-pointer transition-all duration-300 hover:scale-105 hover:z-50">
                  <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" alt="Sports Team" className="w-full h-full object-cover" />
                </div>
                {/* Circle 4 - Explore */}
                <div className="w-[100px] h-[100px] min-[400px]:w-[120px] min-[400px]:h-[120px] sm:w-[200px] sm:h-[200px] xl:w-[280px] xl:h-[280px] rounded-full overflow-hidden border-4 sm:border-[6px] border-white shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex-shrink-0 -ml-6 min-[400px]:-ml-8 sm:-ml-12 xl:-ml-16 z-40 relative cursor-pointer transition-all duration-300 hover:scale-105 hover:z-50 flex items-center justify-center bg-gradient-to-tr from-[var(--brand-primary)] to-[#3b82f6] group">
                  <span className="text-white text-xs min-[400px]:text-sm sm:text-2xl xl:text-4xl font-bold group-hover:tracking-wider transition-all duration-300">Explore</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start max-w-7xl mx-auto px-2 sm:px-0">
              
              {/* Left Side: Heading */}
              <div className="lg:col-span-4">
                <h3 className="text-3xl sm:text-5xl font-bold text-[var(--brand-primary)] tracking-tight">
                  News & Events
                </h3>
              </div>

              {/* Right Side: Content & Ticker */}
              <div className="lg:col-span-8 flex flex-col gap-10">
                <p className="text-[15px] sm:text-[17px] leading-relaxed text-slate-600 font-medium text-left">
                  Shri Kadasiddheshwar Public School is committed to fostering academic excellence, creative expression, and strong community values. We offer a diverse set of programmes and activities that help students grow intellectually, socially, and emotionally while preparing them for lifelong learning.
                </p>

                {/* Ticker / Events List */}
                <div className="w-full">
                  <style dangerouslySetInnerHTML={{__html: `
                    @keyframes ticker-events-scroll {
                      0% { transform: translateX(0%); }
                      100% { transform: translateX(-50%); }
                    }
                    .animate-ticker-events {
                      animation: ticker-events-scroll 25s linear infinite;
                    }
                    .animate-ticker-events:hover {
                      animation-play-state: paused;
                    }
                  `}} />
                  <div className="w-full bg-[#f8f9fa] border border-slate-200 rounded-md flex flex-col sm:flex-row sm:items-center shadow-sm">
                    
                    {/* Up Coming Events Tag */}
                    <div className="bg-slate-100 relative z-10 px-6 py-4 border-b sm:border-b-0 sm:border-r border-slate-200 flex-shrink-0">
                      <span className="text-[14px] sm:text-[15px] font-bold text-slate-900 tracking-wide">Up Coming Events</span>
                    </div>

                    {/* Scrolling Event Body */}
                    <div className="flex-1 overflow-hidden flex items-center bg-[#f8f9fa] min-h-[56px] sm:min-h-[64px]">
                      <div className="flex items-center animate-ticker-events whitespace-nowrap w-max">
                        {[...Array(2)].map((_, arrayIndex) => (
                          <div key={arrayIndex} className="flex items-center">
                            {[
                              { id: "025", title: "SKPS Welcomes New Academic Session", date: "December 13, 2025" },
                              { id: "026", title: "SKPS Annual Sports Meet 2026", date: "January 20, 2026" },
                              { id: "027", title: "SKPS Inter-School Science Exhibition", date: "February 15, 2026" },
                              { id: "028", title: "SKPS Cultural Fest & Alumni Meet", date: "March 05, 2026" }
                            ].map((event, i) => (
                              <div key={i} className="flex items-center mx-6 sm:mx-12">
                                <div className="flex items-center gap-3 sm:gap-4 w-[280px] sm:w-[350px]">
                                  <span className="text-slate-400 font-mono text-sm font-semibold">{event.id}</span>
                                  <span className="text-[var(--brand-primary)] font-bold text-sm sm:text-base truncate" title={event.title}>{event.title}</span>
                                </div>
                                <span className="text-slate-500 font-medium text-xs sm:text-sm flex-shrink-0 text-right w-[120px]">{event.date}</span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
