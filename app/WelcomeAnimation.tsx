"use client";

import { useEffect, useState } from "react";

export default function WelcomeAnimation() {
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable body scroll when animation starts
    document.body.style.overflow = "hidden";

    // Start the exit phase after 2.1s (overlay starts fading out)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2100);

    // Completely unmount/finish after 2.6s
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
    }, 2600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
    }, 500); // match exit transition duration
  };

  if (isFinished) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
      style={{
        background: "#050b18",
        touchAction: "none",
      }}
    >
      {/* Keyframe styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wa-ring-draw {
          from { stroke-dashoffset: 1130; opacity: 0.15; }
          to   { stroke-dashoffset: 0;    opacity: 0.28; }
        }
        @keyframes wa-ring-outer-draw {
          from { stroke-dashoffset: 1570; opacity: 0; }
          to   { stroke-dashoffset: 0;    opacity: 0.10; }
        }
        @keyframes wa-logo-in {
          from { opacity: 0; transform: scale(0.85); filter: blur(4px); }
          to   { opacity: 1; transform: scale(1);    filter: blur(0);   }
        }
        @keyframes wa-divider-draw {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 1; }
        }
        @keyframes wa-text-in {
          from { opacity: 0; transform: translateY(10px); letter-spacing: 0.5em; }
          to   { opacity: 1; transform: translateY(0);    letter-spacing: var(--ls); }
        }
        @keyframes wa-sub-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wa-dots-in {
          from { opacity: 0; }
          to   { opacity: 0.4; }
        }
        @keyframes wa-shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }
        
        .wa-ring {
          animation: wa-ring-draw 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
          stroke-dasharray: 1130;
          stroke-dashoffset: 1130;
        }
        .wa-ring-outer {
          animation: wa-ring-outer-draw 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
          stroke-dasharray: 1570;
          stroke-dashoffset: 1570;
        }
        .wa-dot {
          animation: wa-dots-in 0.6s 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .wa-logo {
          animation: wa-logo-in 0.4s 0.3s cubic-bezier(0.34, 1.36, 0.64, 1) both;
        }
        .wa-divider {
          transform-origin: top center;
          animation: wa-divider-draw 0.2s 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .wa-name-1 {
          --ls: 0.22em;
          animation: wa-text-in 0.4s 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
          letter-spacing: 0.22em;
        }
        .wa-name-2 {
          --ls: 0.22em;
          animation: wa-text-in 0.4s 0.95s cubic-bezier(0.4, 0, 0.2, 1) both;
          letter-spacing: 0.22em;
        }
        .wa-subtitle {
          animation: wa-sub-in 0.4s 1.05s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .wa-shimmer-line {
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent);
          background-size: 400px 1px;
          animation: wa-sub-in 0.4s 1.0s cubic-bezier(0.4, 0, 0.2, 1) both, wa-shimmer 2.5s ease-in-out infinite;
        }
      `}} />

      {/* Main content wrapper */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.5s cubic-bezier(0.4, 0, 1, 1), transform 0.5s cubic-bezier(0.4, 0, 1, 1)",
          opacity: isExiting ? 0 : 1,
          transform: isExiting ? "scale(1.04)" : "scale(1)",
        }}
      >
        {/* Faint radial glow — deep navy */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 65% at 50% 50%, #0f224a 0%, #050b18 100%)",
          pointerEvents: "none",
        }} />

        {/* Noise texture overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
        }} />

        {/* SVG rings */}
        <svg
          viewBox="0 0 400 400"
          style={{
            position: "absolute",
            width: "min(82vw, 82vh, 440px)",
            height: "min(82vw, 82vh, 440px)",
          }}
          fill="none"
        >
          {/* Outer thin ring */}
          <circle
            cx="200" cy="200" r="195"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.6"
            className="wa-ring-outer"
          />
          {/* Inner main ring */}
          <circle
            cx="200" cy="200" r="180"
            stroke="rgba(219,234,254,0.3)"
            strokeWidth="0.8"
            className="wa-ring"
          />
          {/* Subtle accent dots at cardinal points */}
          {["0", "90", "180", "270"].map((deg) => (
            <circle
              key={deg}
              cx="200" cy="20" r="2"
              fill="rgba(212,175,55,0.4)"
              className="wa-dot"
              style={{
                transformOrigin: "200px 200px",
                transform: `rotate(${deg}deg)`,
              }}
            />
          ))}
        </svg>

        {/* Center content */}
        <div style={{
          position: "relative", display: "flex", flexDirection: "column",
          alignItems: "center", textAlign: "center", zIndex: 10,
          gap: 0,
        }}>
          {/* Logo */}
          <div
            className="wa-logo"
            style={{ marginBottom: 0 }}
          >
            <img
              src="/favicon_io/bg_removed_logo.png"
              alt="SK School Crest"
              style={{
                width: "clamp(44px, 9vw, 68px)",
                height: "clamp(44px, 9vw, 68px)",
                objectFit: "contain",
                filter: "brightness(1.05)",
              }}
            />
          </div>

          {/* Thin vertical gold divider */}
          <div
            className="wa-divider"
            style={{
              width: 1,
              height: "clamp(24px, 4vw, 36px)",
              background: "linear-gradient(to bottom, rgba(212,175,55,0.6), rgba(212,175,55,0.1))",
              margin: "14px auto 18px",
            }}
          />

          {/* Text Section */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            {/* School Name */}
            <h1
              className="wa-name-1"
              style={{
                fontFamily: "var(--font-geist-sans), 'Georgia', serif",
                fontWeight: 300,
                fontSize: "clamp(15px, 3.2vw, 24px)",
                color: "rgba(240, 248, 245, 0.92)",
                letterSpacing: "0.22em",
                lineHeight: 1.5,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Shri Kadasiddheshwar
            </h1>
            <h2
              className="wa-name-2"
              style={{
                fontFamily: "var(--font-geist-sans), 'Georgia', serif",
                fontWeight: 300,
                fontSize: "clamp(15px, 3.2vw, 24px)",
                color: "rgba(240, 248, 245, 0.92)",
                letterSpacing: "0.22em",
                lineHeight: 1.5,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Public School
            </h2>

            {/* Gold shimmer divider */}
            <div
              className="wa-shimmer-line"
              style={{
                width: "clamp(60px, 10vw, 100px)",
                height: 1,
                margin: "14px auto",
                borderRadius: 1,
              }}
            />

            {/* Subtitle */}
            <p
              className="wa-subtitle"
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(8px, 1.4vw, 11px)",
                color: "rgba(212, 175, 55, 0.85)",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Hukkeri &nbsp;·&nbsp; CBSE Affiliated
            </p>
          </div>
        </div>
      </div>

      {/* Skip button — always visible and fades out with exiting state */}
      <button
        onClick={handleSkip}
        style={{
          position: "absolute",
          top: "clamp(12px, 3vw, 24px)",
          right: "clamp(12px, 3vw, 24px)",
          zIndex: 100001,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 999,
          padding: "5px 14px",
          fontSize: "clamp(8px, 1.2vw, 10px)",
          fontWeight: 600,
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          cursor: "pointer",
          backdropFilter: "blur(8px)",
          opacity: isExiting ? 0 : 1,
          pointerEvents: isExiting ? "none" : "auto",
          transition: "color 0.2s, border-color 0.2s, background 0.2s, opacity 0.5s cubic-bezier(0.4, 0, 1, 1)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.8)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.4)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.14)";
        }}
      >
        Skip
      </button>
    </div>
  );
}
