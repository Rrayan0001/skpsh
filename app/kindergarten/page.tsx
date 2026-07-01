"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════
   JUNGLE ADVENTURE — KINDERGARTEN PAGE
   SK Public School Hukkeri
   (Optimized for mobile devices & scroll performance)
═══════════════════════════════════════════════════════════ */

export default function KindergartenPage() {
  const [isClient, setIsClient] = useState(false);

  // DOM Refs for scroll animations without React re-renders
  const pageRef = useRef<HTMLDivElement>(null);
  const cloud1Ref = useRef<HTMLDivElement>(null);
  const cloud2Ref = useRef<HTMLDivElement>(null);
  const cloud3Ref = useRef<HTMLDivElement>(null);
  const treesForeRef = useRef<HTMLDivElement>(null);
  const treesBackRef = useRef<HTMLDivElement>(null);
  const trailDotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Optimized Scroll Event Handling
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const sy = window.scrollY;
      const totalHeight = pageRef.current?.scrollHeight || 5000;
      const viewHeight = window.innerHeight;
      const maxScroll = Math.max(totalHeight - viewHeight, 1);
      const scrollPercent = Math.min(sy / maxScroll, 1);


      // 2. Parallax Effects for Clouds (Only on larger screens or screens with good performance)
      const isMobile = window.innerWidth < 1024;
      if (!isMobile) {
        if (cloud1Ref.current) {
          cloud1Ref.current.style.transform = `translateY(${sy * 0.1}px) translateX(${sy * 0.04}px)`;
        }
        if (cloud2Ref.current) {
          cloud2Ref.current.style.transform = `translateY(${sy * 0.06}px) translateX(${-sy * 0.02}px)`;
        }
        if (cloud3Ref.current) {
          cloud3Ref.current.style.transform = `translateY(${sy * 0.08}px) translateX(${-sy * 0.03}px)`;
        }
        // Parallax Trees
        if (treesForeRef.current) {
          treesForeRef.current.style.transform = `translateY(${sy * 0.3}px)`;
        }
        if (treesBackRef.current) {
          treesBackRef.current.style.transform = `translateY(${sy * 0.1}px)`;
        }
      } else {
        // Clear transforms on mobile to avoid lag/jitter
        if (cloud1Ref.current) cloud1Ref.current.style.transform = "none";
        if (cloud2Ref.current) cloud2Ref.current.style.transform = "none";
        if (cloud3Ref.current) cloud3Ref.current.style.transform = "none";
        if (treesForeRef.current) treesForeRef.current.style.transform = "none";
        if (treesBackRef.current) treesBackRef.current.style.transform = "none";
      }

      // 3. Update active state of trail progress dots
      if (trailDotsRef.current) {
        const totalDots = 7;
        const activeIndex = Math.floor(scrollPercent * totalDots);
        const dots = trailDotsRef.current.querySelectorAll(".trail-dot");
        dots.forEach((dot, idx) => {
          if (idx <= activeIndex) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });
      }

    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once to align positions
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  return (
    <div
      ref={pageRef}
      className="kg-page pb-[160px] md:pb-[100px]"
      style={{ background: "linear-gradient(180deg, #87CEEB 0%, #98D8A3 30%, #4CAF50 60%, #2E7D32 100%)" }}
    >
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');

        .kg-page {
          font-family: 'Nunito', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* CLOUDS */
        .cloud {
          position: fixed;
          border-radius: 50px;
          opacity: 0.85;
          pointer-events: none;
          z-index: 1;
          will-change: transform;
        }
        .cloud::before, .cloud::after {
          content: '';
          position: absolute;
          background: white;
          border-radius: 50%;
        }

        /* PARALLAX TREES */
        .tree-row {
          position: fixed;
          bottom: 0;
          width: 100%;
          pointer-events: none;
          z-index: 2;
          will-change: transform;
        }

        /* SECTION CARDS — Storybook page feel */
        .story-card {
          position: relative;
          background: white;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08);
          margin: 0 auto 64px;
          max-width: 800px;
          padding: 48px;
          z-index: 10;
          transform: rotate(-0.5deg);
          transition: transform 0.4s ease;
          border: 4px solid rgba(255,255,255,0.8);
        }
        .story-card:nth-child(even) { transform: rotate(0.5deg); }
        .story-card:hover { transform: rotate(0deg) scale(1.01); }

        /* Page-turn effect corners */
        .story-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%);
          border-radius: 0 0 32px 0;
        }

        /* ANIMAL ANIMATIONS */
        @keyframes monkeySwing {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
        @keyframes walk {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(-8px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes giraffePeek {
          0%, 80%, 100% { transform: translateY(0px); }
          40% { transform: translateY(-20px); }
        }
        @keyframes leafFall {
          0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.7; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes starPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        @keyframes waving {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(20deg); }
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.15); }
          28% { transform: scale(1); }
          42% { transform: scale(1.15); }
          70% { transform: scale(1); }
        }


        .animal-walk { animation: walk 0.8s ease-in-out infinite; }
        .floating { animation: float 3s ease-in-out infinite; }
        .bouncing { animation: bounce 2s ease-in-out infinite; }
        .wiggling { animation: wiggle 2s ease-in-out infinite; }
        .giraffe-neck { animation: giraffePeek 4s ease-in-out infinite; }
        .heartbeat { animation: heartBeat 1.5s ease-in-out infinite; }

        .star { animation: starPulse var(--delay, 1s) ease-in-out infinite; }
        .sparkle-anim { animation: sparkle var(--delay, 2s) ease-in-out infinite; }
        .leaf { animation: leafFall var(--duration, 6s) linear infinite; animation-delay: var(--delay, 0s); }

        /* SECTION TITLE */
        .kg-title {
          font-family: 'Bubblegum Sans', cursive;
          font-size: clamp(26px, 5vw, 48px);
          line-height: 1.15;
          text-align: center;
          margin-bottom: 16px;
        }
        .kg-text {
          font-family: 'Nunito', sans-serif;
          font-size: clamp(15px, 2.2vw, 19px);
          line-height: 1.65;
          color: #4A3728;
          text-align: center;
        }


        /* HERO SECTION */
        .kg-hero {
          min-height: 95vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 16px 40px;
          position: relative;
          z-index: 10;
          text-align: center;
        }

        /* ADMISSION CTA */
        .admission-cta {
          background: linear-gradient(135deg, #FF6B6B, #FF8E53);
          border-radius: 32px;
          padding: 60px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto 40px;
          z-index: 10;
          box-shadow: 0 20px 60px rgba(255,107,107,0.35);
        }

        .kg-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 100px;
          font-family: 'Fredoka One', cursive;
          font-size: 20px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          border: none;
        }
        .kg-btn:hover {
          transform: scale(1.06) translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.25);
        }

        /* LEARNING BADGE */
        .learning-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        /* FACT CARDS */
        .fact-card {
          background: var(--bg, #f0f9ff);
          border-radius: 20px;
          padding: 20px 16px;
          text-align: center;
          border: 3px solid var(--border, #bae6fd);
          transition: transform 0.2s;
        }
        .fact-card:hover { transform: translateY(-4px); }
        .fact-card-emoji { font-size: 36px; margin-bottom: 8px; }
        .fact-card-title {
          font-family: 'Fredoka One', cursive;
          font-size: 16px;
          color: var(--color, #0369a1);
          margin-bottom: 4px;
        }
        .fact-card-text {
          font-size: 13px;
          color: #57606f;
          line-height: 1.45;
        }

        /* TRAIL PATH */
        .trail-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin: -20px auto 40px;
          position: relative;
          z-index: 10;
        }
        .trail-dot {
          width: 12px; height: 12px;
          background: rgba(255,255,255,0.7);
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.9);
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: background 0.3s, transform 0.3s;
        }
        .trail-dot.active {
          background: #FFD166;
          transform: scale(1.2);
        }

        /* MOBILE MEDIA QUERIES */
        @media (max-width: 1023px) {
          .tree-row {
            position: absolute;
          }
        }

        @media (max-width: 640px) {
          .story-card {
            padding: 28px 16px;
            margin-left: 8px;
            margin-right: 8px;
            margin-bottom: 36px;
            border-radius: 24px;
            border-width: 3px;
          }
          .story-card::after {
            width: 30px;
            height: 30px;
            border-radius: 0 0 24px 0;
          }
          .admission-cta {
            padding: 40px 20px;
            border-radius: 24px;
            margin-left: 8px;
            margin-right: 8px;
          }
          .kg-btn {
            padding: 12px 28px;
            font-size: 17px;
            width: 100%;
            justify-content: center;
          }
          .fact-card {
            padding: 16px 12px;
          }
          .fact-card-emoji {
            font-size: 32px;
          }
          .fact-card-title {
            font-size: 15px;
          }
          .fact-card-text {
            font-size: 12px;
          }
        }
      `}</style>

      {/* ── FLOATING CLOUDS (fixed, parallax) ── */}
      {isClient && (
        <>
          <div
            ref={cloud1Ref}
            className="cloud hidden lg:block"
            style={{
              top: "8%",
              left: "10%",
              width: 160, height: 55,
              background: "white",
            }}
          >
            <span style={{
              position: "absolute", top: -35, left: 20,
              width: 70, height: 70, background: "white", borderRadius: "50%"
            }} />
            <span style={{
              position: "absolute", top: -50, left: 55,
              width: 90, height: 90, background: "white", borderRadius: "50%"
            }} />
            <span style={{
              position: "absolute", top: -25, left: 100,
              width: 55, height: 55, background: "white", borderRadius: "50%"
            }} />
          </div>

          <div
            ref={cloud2Ref}
            className="cloud hidden lg:block"
            style={{
              top: "14%",
              right: "8%",
              width: 130, height: 45,
              background: "white",
            }}
          >
            <span style={{
              position: "absolute", top: -25, left: 15,
              width: 55, height: 55, background: "white", borderRadius: "50%"
            }} />
            <span style={{
              position: "absolute", top: -40, left: 45,
              width: 70, height: 70, background: "white", borderRadius: "50%"
            }} />
          </div>

          <div
            ref={cloud3Ref}
            className="cloud hidden lg:block"
            style={{
              top: "5%",
              left: "50%",
              width: 100, height: 35,
              background: "rgba(255,255,255,0.9)",
            }}
          >
            <span style={{
              position: "absolute", top: -18, left: 15,
              width: 40, height: 40, background: "rgba(255,255,255,0.9)", borderRadius: "50%"
            }} />
            <span style={{
              position: "absolute", top: -28, left: 38,
              width: 55, height: 55, background: "rgba(255,255,255,0.9)", borderRadius: "50%"
            }} />
          </div>
        </>
      )}

      {/* ── FOREGROUND TREES (parallax) ── */}
      {isClient && (
        <div
          ref={treesForeRef}
          className="tree-row"
        >
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ width: "100%", height: 200, display: "block" }}>
            <polygon points="80,200 120,50 160,200" fill="#1B5E20" opacity="0.95" />
            <polygon points="100,200 120,20 140,200" fill="#2E7D32" opacity="0.85" />
            <rect x="113" y="150" width="14" height="60" fill="#5D4037" />
            <polygon points="350,200 400,40 450,200" fill="#1B5E20" opacity="0.95" />
            <polygon points="370,200 400,10 430,200" fill="#2E7D32" opacity="0.85" />
            <rect x="393" y="150" width="14" height="60" fill="#5D4037" />
            <polygon points="700,200 760,30 820,200" fill="#1B5E20" opacity="0.95" />
            <polygon points="720,200 760,0 800,200" fill="#388E3C" opacity="0.85" />
            <rect x="753" y="150" width="16" height="60" fill="#5D4037" />
            <polygon points="1100,200 1150,50 1200,200" fill="#1B5E20" opacity="0.95" />
            <polygon points="1120,200 1150,20 1180,200" fill="#2E7D32" opacity="0.85" />
            <rect x="1143" y="150" width="14" height="60" fill="#5D4037" />
            <polygon points="1320,200 1360,60 1400,200" fill="#1B5E20" opacity="0.95" />
            <rect x="1353" y="160" width="14" height="50" fill="#5D4037" />
            <rect x="0" y="180" width="1440" height="30" fill="#33691E" />
            <rect x="0" y="195" width="1440" height="15" fill="#1B5E20" />
          </svg>
        </div>
      )}

      {/* ── BACKGROUND TREES (parallax) ── */}
      {isClient && (
        <div
          ref={treesBackRef}
          className="tree-row"
          style={{ zIndex: 1 }}
        >
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ width: "100%", height: 160, display: "block", opacity: 0.5 }}>
            <polygon points="200,160 240,60 280,160" fill="#4CAF50" />
            <polygon points="500,160 540,40 580,160" fill="#43A047" />
            <polygon points="850,160 900,30 950,160" fill="#4CAF50" />
            <polygon points="1200,160 1240,50 1280,160" fill="#43A047" />
          </svg>
        </div>
      )}


      {/* ── FALLING LEAVES (desktop & tablet only) ── */}
      {isClient && (
        <div className="hidden sm:block">
          {[
            { l: "12%", d: "0s", dur: "9s" },
            { l: "32%", d: "2.5s", dur: "11s" },
            { l: "58%", d: "5s", dur: "8s" },
            { l: "78%", d: "1.2s", dur: "10s" },
            { l: "92%", d: "6s", dur: "12s" },
          ].map((leaf, i) => (
            <div
              key={i}
              className="leaf"
              style={{
                position: "fixed",
                left: leaf.l,
                top: 0,
                fontSize: 18,
                zIndex: 3,
                pointerEvents: "none",
                "--duration": leaf.dur,
                "--delay": leaf.d,
              } as React.CSSProperties}
            >
              🍃
            </div>
          ))}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="kg-hero">
        {/* Floating stars */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {["8%,25%","88%,20%","6%,65%","92%,60%","50%,12%"].map((pos, i) => (
            <span key={i} className="star" style={{
              position: "absolute",
              left: pos.split(",")[0], top: pos.split(",")[1],
              fontSize: 22, "--delay": `${i * 0.4 + 0.5}s`
            } as React.CSSProperties}>⭐</span>
          ))}
        </div>

        <div className="learning-badge" style={{ background: "#FFD166", color: "#92400E" }}>
          <span>🌿</span> Welcome to the Jungle!
        </div>

        <h1 className="kg-title" style={{
          fontFamily: "'Bubblegum Sans', cursive",
          color: "#1B5E20",
          fontSize: "clamp(34px, 8vw, 76px)",
          textShadow: "2px 2px 0px rgba(255,255,255,0.7), 4px 4px 0px rgba(0,0,0,0.06)",
          marginBottom: 12,
        }}>
          🌴 Kindergarten 🌴
        </h1>
        <h2 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: "clamp(18px, 4.5vw, 40px)",
          color: "#FF6B6B",
          textShadow: "1.5px 1.5px 0px rgba(0,0,0,0.08)",
          marginBottom: 20,
        }}>
          Jungle Adventure at SK School!
        </h2>

        <p className="kg-text" style={{ maxWidth: 550, color: "#1B5E20", fontWeight: 700, fontSize: "clamp(15px, 2.2vw, 21px)" }}>
          Follow our animal friends through the magical forest and discover the joy of learning! 🐒🦁🐘🦒🐰🦜
        </p>

        {/* Funky Scroll Down Text */}
        <div className="bouncing" style={{ 
          marginTop: 40, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: 8 
        }}>
          <span style={{ 
            fontFamily: "'Fredoka One', cursive", 
            fontSize: "clamp(18px, 4vw, 28px)", 
            color: "#FF6B6B",
            textShadow: "1.5px 1.5px 0px white, 3px 3px 0px rgba(0,0,0,0.06)",
            letterSpacing: "0.03em"
          }}>
            👇 Scroll down to begin your adventure! 👇
          </span>
        </div>

      </section>

      {/* TRAIL PROGRESS DOTS */}
      <div ref={trailDotsRef}>
        <TrailDots />
      </div>

      {/* ── Content sections ── */}
      <div style={{ padding: "10px 10px 0", position: "relative", zIndex: 10 }}>

        {/* SECTION 1: WELCOME */}
        <div className="story-card" style={{ borderTop: "6px solid #4CAF50" }}>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span style={{ fontSize: 50 }} className="bouncing inline-block">🌿</span>
          </div>
          <div className="learning-badge" style={{
            background: "#dcfce7", color: "#166534",
            margin: "0 auto 16px", display: "table"
          }}>
            <span>📖</span> Chapter 1 — The Forest Trail Begins
          </div>
          <h2 className="kg-title" style={{ color: "#166534" }}>
            Welcome, Little Explorer! 🎒
          </h2>
          <p className="kg-text">
            Deep in the magical Jungle of SK School, a group of amazing animals are waiting just for <strong>you!</strong>
            They&apos;re going to show you all the wonderful things you&apos;ll learn in Kindergarten. Ready? Let&apos;s go!
          </p>

          {/* Animal intro grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(115px, 1fr))",
            gap: 12, marginTop: 24
          }}>
            {[
              { emoji: "🐘", name: "Ellie", desc: "Never forgets!" },
              { emoji: "🦒", name: "Gigi", desc: "Spot the letters!" },
              { emoji: "🐰", name: "Benny", desc: "Hops around!" },
              { emoji: "🦜", name: "Polly", desc: "Sings and paints!" },
            ].map((a) => (
              <div key={a.name} className="fact-card wiggling" style={{
                "--bg": "#f0fdf4", "--border": "#86efac", "--color": "#166534",
                padding: "16px 8px"
              } as React.CSSProperties}>
                <div className="fact-card-emoji" style={{ fontSize: "28px" }}>{a.emoji}</div>
                <div className="fact-card-title" style={{ fontSize: "15px" }}>{a.name}</div>
                <div className="fact-card-text" style={{ fontSize: "11px" }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: ALPHABET & LANGUAGE — Gigi */}
        <SectionWithAnimal
          animal={<GiraffeSVG />}
          animalSide="right"
          color="#3B82F6"
          bgColor="#eff6ff"
          borderColor="#93c5fd"
          chapter="Chapter 2"
          icon="📝"
          tag="ABCs &amp; Language"
        >
          <h2 className="kg-title" style={{ color: "#1D4ED8" }}>
            🦒 Gigi Teaches the Alphabet!
          </h2>
          <p className="kg-text" style={{ color: "#1e40af" }}>
            Gigi the Giraffe has the longest neck in the jungle — she can peek over any tree to spot every letter!
            With her help, you&apos;ll learn all <strong>26 letters</strong> and how to read your first words.
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", marginTop: 20
          }}>
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l, idx) => (
              <div key={l} className="bouncing w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-lg" style={{
                background: `hsl(${l.charCodeAt(0) * 10}, 70%, 60%)`,
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Fredoka One', cursive",
                color: "white",
                boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                animationDelay: `${idx * 0.05}s`,
              }}>{l}</div>
            ))}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(115px, 1fr))",
            gap: 12, marginTop: 24
          }}>
            {[
              { emoji: "📚", title: "Phonics", text: "Learn letter sounds with fun songs!", bg: "#dbeafe", border: "#93c5fd", color: "#1d4ed8" },
              { emoji: "✏️", title: "Handwriting", text: "Trace letters with friendly guides!", bg: "#e0f2fe", border: "#7dd3fc", color: "#0369a1" },
              { emoji: "📖", title: "Story Time", text: "Listen to magical jungle tales!", bg: "#f0f9ff", border: "#bae6fd", color: "#0284c7" },
            ].map((f) => (
              <div key={f.title} className="fact-card" style={{ "--bg": f.bg, "--border": f.border, "--color": f.color } as React.CSSProperties}>
                <div className="fact-card-emoji">{f.emoji}</div>
                <div className="fact-card-title">{f.title}</div>
                <div className="fact-card-text">{f.text}</div>
              </div>
            ))}
          </div>
        </SectionWithAnimal>

        {/* SECTION 3: NUMBERS & MATHS — Ellie */}
        <SectionWithAnimal
          animal={<ElephantSVG />}
          animalSide="left"
          color="#8B5CF6"
          bgColor="#faf5ff"
          borderColor="#c4b5fd"
          chapter="Chapter 3"
          icon="🔢"
          tag="Numbers &amp; Maths"
        >
          <h2 className="kg-title" style={{ color: "#6D28D9" }}>
            🐘 Ellie Counts with Her Trunk!
          </h2>
          <p className="kg-text" style={{ color: "#5B21B6" }}>
            Ellie the Elephant never forgets — especially numbers! She&apos;ll teach you to count from 1 to 100,
            add jungle fruits, and discover the magic of shapes!
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 20 }}>
            {[1,2,3,4,5,6,7,8,9,10].map((n) => (
              <div key={n} className="heartbeat w-8 h-8 sm:w-11 sm:h-11 text-sm sm:text-lg" style={{
                background: `hsl(${270 + n * 8}, 70%, 65%)`,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Fredoka One', cursive",
                color: "white",
                boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
                animationDelay: `${n * 0.12}s`,
              }}>{n}</div>
            ))}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(115px, 1fr))",
            gap: 12, marginTop: 24
          }}>
            {[
              { emoji: "🍎+🍎", title: "Fun Addition", text: "Add fruits in the jungle market!", bg: "#fdf4ff", border: "#e9d5ff", color: "#7c3aed" },
              { emoji: "🔺🔵🟦", title: "Shapes", text: "Discover circles, squares & triangles!", bg: "#f5f3ff", border: "#ddd6fe", color: "#6d28d9" },
              { emoji: "📏", title: "Measuring", text: "How tall is Gigi the Giraffe?", bg: "#ede9fe", border: "#c4b5fd", color: "#5b21b6" },
              { emoji: "🎲", title: "Patterns", text: "Spot the pattern in the jungle!", bg: "#f3e8ff", border: "#d8b4fe", color: "#7c3aed" },
            ].map((f) => (
              <div key={f.title} className="fact-card" style={{ "--bg": f.bg, "--border": f.border, "--color": f.color } as React.CSSProperties}>
                <div className="fact-card-emoji">{f.emoji}</div>
                <div className="fact-card-title">{f.title}</div>
                <div className="fact-card-text">{f.text}</div>
              </div>
            ))}
          </div>
        </SectionWithAnimal>

        {/* SECTION 4: NATURE & SCIENCE — Benny */}
        <SectionWithAnimal
          animal={<RabbitSVG />}
          animalSide="right"
          color="#10B981"
          bgColor="#f0fdf4"
          borderColor="#6ee7b7"
          chapter="Chapter 4"
          icon="🌱"
          tag="Nature &amp; Science"
        >
          <h2 className="kg-title" style={{ color: "#065F46" }}>
            🐰 Benny Explores the Forest!
          </h2>
          <p className="kg-text" style={{ color: "#064E3B" }}>
            Benny the Rabbit loves to hop and discover! He&apos;ll teach you about plants, animals,
            seasons, and the wonder of our amazing world.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(115px, 1fr))",
            gap: 12, marginTop: 24
          }}>
            {[
              { emoji: "🌱", title: "Plants Grow", text: "Sunlight + Water = Life!", bg: "#dcfce7", border: "#86efac", color: "#166534" },
              { emoji: "🌦️", title: "Weather", text: "Rain, sun, wind & snow!", bg: "#d1fae5", border: "#6ee7b7", color: "#065f46" },
              { emoji: "🦋", title: "Life Cycles", text: "From egg to butterfly!", bg: "#a7f3d0", border: "#34d399", color: "#047857" },
              { emoji: "🐾", title: "Animal Homes", text: "Dens, nests & burrows!", bg: "#ecfdf5", border: "#6ee7b7", color: "#065f46" },
            ].map((f) => (
              <div key={f.title} className="fact-card" style={{ "--bg": f.bg, "--border": f.border, "--color": f.color } as React.CSSProperties}>
                <div className="fact-card-emoji">{f.emoji}</div>
                <div className="fact-card-title">{f.title}</div>
                <div className="fact-card-text">{f.text}</div>
              </div>
            ))}
          </div>

          {/* Fun fact bubble */}
          <div style={{
            background: "linear-gradient(135deg, #34D399, #10B981)",
            borderRadius: 20,
            padding: "16px 20px",
            marginTop: 24,
            color: "white",
            textAlign: "center",
          }}>
            <span style={{ fontSize: 24 }}>🌈</span>
            <p style={{ fontFamily: "'Fredoka One',cursive", fontSize: 16, margin: "6px 0 2px" }}>
              Did You Know?
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.5 }}>
              A rainbow has 7 colors — Violet, Indigo, Blue, Green, Yellow, Orange, Red! Remember: <strong>VIBGYOR!</strong> 🌈
            </p>
          </div>
        </SectionWithAnimal>

        {/* SECTION 5: MUSIC & ARTS — Polly */}
        <SectionWithAnimal
          animal={<BirdSVG />}
          animalSide="left"
          color="#F59E0B"
          bgColor="#fffbeb"
          borderColor="#fde68a"
          chapter="Chapter 5"
          icon="🎨"
          tag="Arts &amp; Music"
        >
          <h2 className="kg-title" style={{ color: "#92400E" }}>
            🦜 Polly Sings &amp; Paints!
          </h2>
          <p className="kg-text" style={{ color: "#78350F" }}>
            Polly the Parrot is the most colorful bird in the jungle! She&apos;ll teach you how to
            paint with all the colors of the rainbow and sing the most beautiful songs.
          </p>

          {/* Color palette */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
            {["#FF6B6B","#FF9F43","#FECA57","#1DD1A1","#54A0FF","#5F27CD","#FF9FF3"].map((c, i) => (
              <div key={i} className="bouncing" style={{
                width: 38, height: 38,
                background: c,
                borderRadius: "50%",
                boxShadow: `0 3px 10px ${c}60`,
                border: "2px solid white",
                animationDelay: `${i * 0.12}s`,
              }} />
            ))}
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(115px, 1fr))",
            gap: 12, marginTop: 24
          }}>
            {[
              { emoji: "🎵", title: "Singing", text: "Nursery rhymes & jungle songs!", bg: "#fef3c7", border: "#fde68a", color: "#92400e" },
              { emoji: "🎨", title: "Drawing", text: "Express yourself with crayons!", bg: "#fffbeb", border: "#fde68a", color: "#78350f" },
              { emoji: "💃", title: "Dance", text: "Move like a jungle animal!", bg: "#fef9c3", border: "#fef08a", color: "#713f12" },
            ].map((f) => (
              <div key={f.title} className="fact-card" style={{ "--bg": f.bg, "--border": f.border, "--color": f.color } as React.CSSProperties}>
                <div className="fact-card-emoji">{f.emoji}</div>
                <div className="fact-card-title">{f.title}</div>
                <div className="fact-card-text">{f.text}</div>
              </div>
            ))}
          </div>
        </SectionWithAnimal>

        {/* SECTION 6: VALUES & FRIENDSHIP — Lion details inline on mobile */}
        <div className="story-card" style={{ borderTop: "6px solid #EC4899" }}>
          <div className="learning-badge" style={{
            background: "#fce7f3", color: "#9D174D",
            margin: "0 auto 16px", display: "table"
          }}>
            <span>❤️</span> Chapter 6 — Heart of the Jungle
          </div>
          <h2 className="kg-title" style={{ color: "#BE185D" }}>
            All Animals Are Friends! 🤝
          </h2>
          <p className="kg-text" style={{ color: "#9D174D" }}>
            In our jungle, every animal is kind to each other — just like how we should be kind to our
            friends at school! These are the most important lessons of all.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 16, marginTop: 28
          }}>
            {[
              { emoji: "🤝", title: "Friendship", text: "Share, play & support each other!", color: "#EC4899" },
              { emoji: "🙏", title: "Respect", text: "Be kind to all living beings!", color: "#8B5CF6" },
              { emoji: "💪", title: "Courage", text: "Be brave & try new things!", color: "#F59E0B" },
              { emoji: "🌟", title: "Honesty", text: "Always tell the truth!", color: "#10B981" },
              { emoji: "🧹", title: "Responsibility", text: "Keep our jungle clean!", color: "#3B82F6" },
              { emoji: "😊", title: "Happiness", text: "Find joy in every day!", color: "#F59E0B" },
            ].map((v) => (
              <div key={v.title} style={{
                background: "white",
                borderRadius: 20,
                padding: "20px 14px",
                textAlign: "center",
                border: `3px solid ${v.color}25`,
                boxShadow: `0 4px 12px ${v.color}15`,
                transition: "transform 0.2s",
              }} className="fact-card wiggling">
                <div style={{ fontSize: 32, marginBottom: 8 }}>{v.emoji}</div>
                <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 16, color: v.color, marginBottom: 4 }}>
                  {v.title}
                </div>
                <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.4 }}>{v.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* GRAND FINALE — ALL ANIMALS GATHER */}
        <div className="story-card" style={{
          borderTop: "6px solid #FFD700",
          background: "linear-gradient(135deg, #fff9e6, #fff0f5)",
        }}>
          <div className="learning-badge" style={{
            background: "#FEF3C7", color: "#92400E",
            margin: "0 auto 16px", display: "table"
          }}>
            <span>🎉</span> The Grand Finale!
          </div>
          <h2 className="kg-title" style={{ color: "#92400E" }}>
            All Your Animal Friends Have Gathered! 🎊
          </h2>
          <p className="kg-text" style={{ color: "#78350F", marginBottom: 28 }}>
            Ellie, Gigi, Benny &amp; Polly are all here to say — <strong>We&apos;d love to have you in our jungle school!</strong>
          </p>

          {/* All animals waving */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 16,
            flexWrap: "wrap",
            padding: "16px 0 24px",
          }}>
            {[
              { emoji: "🐘", name: "Ellie", delay: "0s" },
              { emoji: "🦒", name: "Gigi", delay: "0.2s" },
              { emoji: "🐰", name: "Benny", delay: "0.4s" },
              { emoji: "🦜", name: "Polly", delay: "0.6s" },
            ].map((a) => (
              <div key={a.name} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 48,
                    animation: `waving 0.6s ease-in-out infinite`,
                    animationDelay: a.delay,
                    display: "block",
                    transformOrigin: "bottom center",
                  }}
                >
                  {a.emoji}
                </div>
                <div style={{
                  fontFamily: "'Fredoka One',cursive",
                  fontSize: 12,
                  color: "#92400E",
                  marginTop: 2
                }}>{a.name}</div>
              </div>
            ))}
          </div>

          {/* Confetti line */}
          <div style={{ textAlign: "center", fontSize: 24, letterSpacing: 6, marginBottom: 12 }}>
            🎈🎉🎊🌟🎈🎉
          </div>
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════
          ADMISSIONS OPEN CTA
      ═══════════════════════════════════════════════════════════ */}
      <div style={{ padding: "0 10px 100px", position: "relative", zIndex: 10 }}>
        <div className="admission-cta">
          {/* Sparkles */}
          {["5%,10%","90%,15%","10%,80%","88%,75%","50%,5%"].map((pos, i) => (
            <span key={i} className="sparkle-anim" style={{
              position: "absolute",
              left: pos.split(",")[0], top: pos.split(",")[1],
              fontSize: 18,
              "--delay": `${i * 0.4 + 0.5}s`
            } as React.CSSProperties}>✨</span>
          ))}

          <div style={{ fontSize: 56, marginBottom: 12 }}>🎒</div>
          <h2 style={{
            fontFamily: "'Bubblegum Sans', cursive",
            fontSize: "clamp(26px, 5.5vw, 48px)",
            color: "white",
            textShadow: "1.5px 1.5px 0px rgba(0,0,0,0.15)",
            marginBottom: 8,
          }}>
            Admissions Open! 🌟
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(15px, 2.2vw, 19px)",
            color: "rgba(255,255,255,0.95)",
            marginBottom: 8,
            fontWeight: 700,
          }}>
            Join your animal friends on this magical learning journey!
          </p>
          <p style={{
            fontSize: 13.5, color: "rgba(255,255,255,0.85)",
            marginBottom: 32, lineHeight: 1.6
          }}>
            🐘 Ellie will help you remember ·
            🦒 Gigi will help you reach new heights!
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/admission/procedure" className="kg-btn" style={{
              background: "white",
              color: "#FF6B6B",
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)"
            }}>
              <span>🏫</span> Enroll Now
            </Link>
            <Link href="/contact" className="kg-btn" style={{
              background: "rgba(255,255,255,0.2)",
              color: "white",
              border: "2px solid rgba(255,255,255,0.5)"
            }}>
              <span>📞</span> Contact Us
            </Link>
          </div>

          {/* Waving animals row */}
          <div style={{
            marginTop: 36,
            display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap"
          }}>
            {["🐘","🦒","🐰","🦜"].map((a, i) => (
              <span key={i} style={{
                fontSize: 32,
                animation: `waving 0.5s ease-in-out infinite`,
                animationDelay: `${i * 0.12}s`,
                display: "inline-block",
                transformOrigin: "bottom center",
              }}>{a}</span>
            ))}
          </div>
          <p style={{
            fontFamily: "'Bubblegum Sans',cursive",
            fontSize: 16,
            color: "rgba(255,255,255,0.9)",
            marginTop: 10
          }}>
            See you in the jungle! 🌴
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HELPER COMPONENTS
═══════════════════════════════════════════════════════════ */

function TrailDots() {
  const total = 7;
  return (
    <div className="trail-dots">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="trail-dot" />
      ))}
    </div>
  );
}

function SectionWithAnimal({
  children, animal, animalSide, color, bgColor, borderColor, chapter, icon, tag
}: {
  children: React.ReactNode;
  animal: React.ReactNode;
  animalSide: "left" | "right";
  color: string;
  bgColor: string;
  borderColor: string;
  chapter: string;
  icon: string;
  tag: string;
}) {
  return (
    <div className="story-card" style={{ borderTop: `6px solid ${color}`, background: bgColor, overflow: "visible" }}>
      {/* Mobile-only centered animal display */}
      <div className="w-24 h-28 mx-auto mb-4 block lg:hidden overflow-hidden flex items-center justify-center" aria-hidden="true">
        {animal}
      </div>

      {/* Desktop-only side-peeking animal */}
      <div
        style={{
          position: "absolute",
          [animalSide]: -70,
          bottom: 20,
          width: 100,
          pointerEvents: "none",
        }}
        className="hidden lg:block"
        aria-hidden="true"
      >
        {animal}
      </div>

      <div
        className="learning-badge"
        style={{
          background: `${color}20`,
          color,
          border: `2px solid ${borderColor}`,
          margin: "0 auto 16px",
          display: "table",
        }}
      >
        <span>{icon}</span> {chapter} — {tag}
      </div>

      {children}
    </div>
  );
}

/* ══ SVG ANIMALS ══ */



function ElephantSVG() {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 100, height: "auto" }}>
      {/* Body */}
      <ellipse cx="55" cy="80" rx="38" ry="32" fill="#90A4AE" />
      {/* Head */}
      <circle cx="42" cy="40" r="28" fill="#90A4AE" />
      {/* Ear */}
      <ellipse cx="18" cy="38" rx="15" ry="20" fill="#78909C" />
      <ellipse cx="20" cy="38" rx="10" ry="14" fill="#FFCDD2" />
      {/* Eye */}
      <circle cx="50" cy="34" r="4" fill="#212121" />
      <circle cx="51" cy="33" r="1.2" fill="white" />
      {/* Trunk */}
      <path d="M36 50 Q20 65 28 85" stroke="#90A4AE" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="28" cy="85" r="6" fill="#78909C" />
      {/* Tusks */}
      <path d="M38 55 Q30 68 38 72" stroke="#FFFDE7" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <rect x="22" y="100" width="16" height="20" rx="8" fill="#78909C" />
      <rect x="42" y="100" width="16" height="20" rx="8" fill="#78909C" />
      <rect x="62" y="100" width="16" height="20" rx="8" fill="#78909C" />
      {/* Tail */}
      <path d="M90 80 Q100 75 96 90" stroke="#78909C" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function GiraffeSVG() {
  return (
    <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: "100%", width: "auto", maxWidth: "100%" }} className="giraffe-neck">
      {/* Long neck */}
      <rect x="32" y="20" width="18" height="80" rx="9" fill="#FFD54F" />
      {/* Spots on neck */}
      <ellipse cx="38" cy="35" rx="5" ry="4" fill="#F57F17" opacity="0.6" />
      <ellipse cx="44" cy="55" rx="4" ry="5" fill="#F57F17" opacity="0.6" />
      <ellipse cx="37" cy="72" rx="5" ry="3" fill="#F57F17" opacity="0.6" />
      {/* Head */}
      <ellipse cx="42" cy="14" rx="16" ry="12" fill="#FFD54F" />
      {/* Horns (ossicones) */}
      <rect x="34" y="2" width="4" height="10" rx="2" fill="#8D6E63" />
      <circle cx="36" cy="2" r="3" fill="#8D6E63" />
      <rect x="46" y="2" width="4" height="10" rx="2" fill="#8D6E63" />
      <circle cx="48" cy="2" r="3" fill="#8D6E63" />
      {/* Eyes */}
      <circle cx="36" cy="12" r="3.5" fill="#212121" />
      <circle cx="37" cy="11" r="1.2" fill="white" />
      {/* Nose */}
      <ellipse cx="42" cy="22" rx="5" ry="3" fill="#F9A825" />
      <circle cx="40" cy="22" r="1.2" fill="#5D4037" />
      <circle cx="44" cy="22" r="1.2" fill="#5D4037" />
      {/* Body */}
      <ellipse cx="42" cy="115" rx="28" ry="32" fill="#FFD54F" />
      {/* Spots on body */}
      <ellipse cx="35" cy="105" rx="7" ry="8" fill="#F57F17" opacity="0.6" />
      <ellipse cx="52" cy="118" rx="8" ry="6" fill="#F57F17" opacity="0.6" />
      <ellipse cx="38" cy="128" rx="6" ry="7" fill="#F57F17" opacity="0.6" />
      {/* Legs */}
      <rect x="20" y="138" width="10" height="22" rx="5" fill="#F9A825" />
      <rect x="34" y="138" width="10" height="22" rx="5" fill="#F9A825" />
      <rect x="48" y="138" width="10" height="22" rx="5" fill="#F9A825" />
      <rect x="62" y="138" width="10" height="22" rx="5" fill="#F9A825" />
      {/* Tail */}
      <path d="M68 120 Q76 115 72 135" stroke="#F9A825" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function RabbitSVG() {
  return (
    <svg viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: "auto" }} className="bouncing">
      {/* Ears */}
      <ellipse cx="26" cy="22" rx="8" ry="22" fill="#f3f4f6" />
      <ellipse cx="26" cy="22" rx="4" ry="16" fill="#FFCDD2" />
      <ellipse cx="54" cy="22" rx="8" ry="22" fill="#f3f4f6" />
      <ellipse cx="54" cy="22" rx="4" ry="16" fill="#FFCDD2" />
      {/* Head */}
      <circle cx="40" cy="42" r="24" fill="#f3f4f6" />
      {/* Cheeks */}
      <circle cx="28" cy="50" r="7" fill="#FFB3C6" opacity="0.4" />
      <circle cx="52" cy="50" r="7" fill="#FFB3C6" opacity="0.4" />
      {/* Eyes */}
      <circle cx="32" cy="38" r="4.5" fill="#212121" />
      <circle cx="33" cy="37" r="1.5" fill="white" />
      <circle cx="48" cy="38" r="4.5" fill="#212121" />
      <circle cx="49" cy="37" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="40" cy="48" rx="4" ry="3" fill="#F48FB1" />
      {/* Smile */}
      <path d="M35 52 Q40 57 45 52" stroke="#D81B60" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="22" y1="48" x2="36" y2="49" stroke="#9E9E9E" strokeWidth="1" />
      <line x1="22" y1="52" x2="36" y2="52" stroke="#9E9E9E" strokeWidth="1" />
      <line x1="58" y1="48" x2="44" y2="49" stroke="#9E9E9E" strokeWidth="1" />
      <line x1="58" y1="52" x2="44" y2="52" stroke="#9E9E9E" strokeWidth="1" />
      {/* Body */}
      <ellipse cx="40" cy="82" rx="24" ry="26" fill="#f3f4f6" />
      {/* Tummy */}
      <ellipse cx="40" cy="85" rx="14" ry="16" fill="#FFF9C4" />
      {/* Arms */}
      <ellipse cx="18" cy="80" rx="8" ry="10" fill="#f3f4f6" transform="rotate(-20, 18, 80)" />
      <ellipse cx="62" cy="80" rx="8" ry="10" fill="#f3f4f6" transform="rotate(20, 62, 80)" />
      {/* Legs */}
      <ellipse cx="28" cy="105" rx="10" ry="7" fill="#f3f4f6" />
      <ellipse cx="52" cy="105" rx="10" ry="7" fill="#f3f4f6" />
      {/* Tail */}
      <circle cx="62" cy="90" r="7" fill="white" />
    </svg>
  );
}

function BirdSVG() {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 100, height: "auto" }} className="floating">
      {/* Body */}
      <ellipse cx="50" cy="50" rx="28" ry="20" fill="#4CAF50" />
      {/* Tail */}
      <polygon points="78,50 100,38 100,62" fill="#388E3C" />
      <polygon points="78,50 95,30 98,42" fill="#FF5722" />
      <polygon points="78,50 95,68 98,56" fill="#FFD600" />
      {/* Wing */}
      <ellipse cx="45" cy="45" rx="20" ry="10" fill="#66BB6A" transform="rotate(-15, 45, 45)" />
      {/* Head */}
      <circle cx="28" cy="40" r="16" fill="#4CAF50" />
      {/* Beak */}
      <polygon points="14,38 2,42 14,46" fill="#FF9800" />
      {/* Eye */}
      <circle cx="24" cy="36" r="5" fill="#212121" />
      <circle cx="23" cy="35" r="1.8" fill="white" />
      {/* Cheek */}
      <circle cx="30" cy="42" r="5" fill="#F44336" opacity="0.7" />
      {/* Feet */}
      <line x1="42" y1="68" x2="38" y2="78" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="78" x2="34" y2="80" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="78" x2="38" y2="80" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="78" x2="42" y2="80" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
      <line x1="54" y1="68" x2="58" y2="78" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="58" y1="78" x2="54" y2="80" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="78" x2="58" y2="80" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
      <line x1="58" y1="78" x2="62" y2="80" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
