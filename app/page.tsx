export default function Home() {
  return (
    <div className="relative flex flex-col bg-white min-h-screen">
      <main className="flex-1 w-full">

        {/* ═══════════════════════════════════════════════════════════
            HERO BANNER — Full-width image with curved swoosh overlay
        ═══════════════════════════════════════════════════════════ */}
        <div className="w-full pt-6 sm:pt-8 md:pt-6">
          <div className="max-w-[1920px] mx-auto px-5 sm:px-6 lg:px-8">

            {/* ── MOBILE HERO LAYOUT ─────────────────────────────── */}
            <div className="block md:hidden">
              <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden rounded-[18px]">
                {/* Banner Image */}
                <img
                  src="/banner1.png"
                  alt="Shri Kadasiddheshwar Public School Banner"
                  className="w-full h-full object-cover object-center select-none"
                />

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

                {/* Banner Image */}
                <img
                  src="/banner1.png"
                  alt="Shri Kadasiddheshwar Public School Banner"
                  className="w-full h-full object-cover object-center select-none"
                />

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
                  Shri Kadasiddheshwar Public School (SKPS), a proud unit of the KLE Society, has been a pioneer in education in Hukkeri, shaping future leaders and innovators. With a strong foundation in academic excellence and holistic development, we continue to push boundaries to provide world-class education. Our legacy thrives through our students who are equipped to make a meaningful impact worldwide.
                </p>
                
                <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold tracking-wide text-white transition-all bg-[#f05a28] rounded-full hover:bg-[#d94e20] shadow-lg shadow-[#f05a28]/30">
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
                  className="absolute top-1/2 left-1/2 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-[#f05a28] rounded-full mix-blend-multiply filter blur-[50px] sm:blur-[80px]"
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
                          <a href="#" className="px-6 sm:px-12 text-[14px] sm:text-[16px] font-bold text-[#f05a28] hover:text-[var(--brand-primary)] transition-colors duration-300 tracking-wide">
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

      </main>
    </div>
  );
}
