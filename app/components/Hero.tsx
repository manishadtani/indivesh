"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Phase: "title" → "fadeOut" → "reveal" → "ready"
  const [phase, setPhase] = useState<"title" | "fadeOut" | "reveal" | "ready">("title");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Mobile Screen Size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll indicator tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cinematic Intro Sequence
  useEffect(() => {
    // Phase 1: Title visible for 1.2s
    const t1 = setTimeout(() => setPhase("fadeOut"), 1200);
    // Phase 2: Title fades out, reveal fabric image
    const t2 = setTimeout(() => setPhase("reveal"), 2000);
    // Phase 3: After fabric fades in, show scroll indicator
    const t3 = setTimeout(() => setPhase("ready"), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Fabric image should only be visible after title disappears
  const showFabric = phase === "reveal" || phase === "ready";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen bg-[#F7F4EE] overflow-hidden flex items-center justify-center"
    >
      {/* ── STATIC FULL-SCALE HERO BACKGROUND IMAGE (No Zoom Animation) ── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out"
        style={{
          backgroundImage: `url('${isMobile ? "/images/hero-img-phone.webp" : "/images/hero-imgg.webp"}')`,
          opacity: showFabric ? 1 : 0,
        }}
      />

      {/* STEP 1: LETTER-BY-LETTER CINEMATIC TITLE INTRO */}
      <div
        className="absolute z-30 flex flex-col items-center text-center pointer-events-none"
        style={{
          opacity: phase === "title" ? 1 : 0,
          transform: phase === "title" ? "scale(1) translateY(0)" : "scale(1.08) translateY(-18px)",
          transition: "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Cinematic Top Accent Line */}
        <div
          className="mb-4 sm:mb-5 overflow-hidden"
          style={{
            animation: phase === "title" ? "expandLine 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both" : "none",
          }}
        >
          <div className="w-12 sm:w-16 h-[1px] bg-[#D4AF37]" />
        </div>

        {/* Letter-by-Letter Title: I-N-D-I-V-E-S-H */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-[0.18em] sm:tracking-[0.3em] font-light text-[#202A3A] uppercase leading-none flex justify-center max-w-[90vw]">
          {"INDIVESH".split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                opacity: 0,
                animation: phase === "title"
                  ? `letterFadeIn 0.3s ease-out ${0.08 + i * 0.06}s forwards`
                  : "none",
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Gold Expanding Divider */}
        <div
          className="my-3 sm:my-4 overflow-hidden"
          style={{
            animation: phase === "title" ? "expandLine 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both" : "none",
          }}
        >
          <div className="w-20 sm:w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Letter-by-Letter Subtitle: ARTISTRY IN TEXTILE */}
        <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.5em] sm:tracking-[0.6em] uppercase font-bold text-[#C85A32] flex flex-wrap justify-center">
          {"ARTISTRY IN TEXTILE".split("").map((letter, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                opacity: 0,
                animation: phase === "title"
                  ? `letterFadeIn 0.25s ease-out ${0.7 + i * 0.03}s forwards`
                  : "none",
                marginRight: letter === " " ? "0.4em" : "0",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>

        {/* Bottom Accent Line */}
        <div
          className="mt-4 sm:mt-5 overflow-hidden"
          style={{
            animation: phase === "title" ? "expandLine 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1.0s both" : "none",
          }}
        >
          <div className="w-12 sm:w-16 h-[1px] bg-[#D4AF37]" />
        </div>
      </div>

      {/* STEP 3: ELEGANT FLOATING SCROLL INDICATOR */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 pointer-events-none"
        style={{
          opacity: phase === "ready" && !hasScrolled ? 1 : 0,
          transform: phase === "ready" && !hasScrolled ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        }}
      >
        <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-bold text-[#202A3A]/70">
          Scroll to Explore
        </span>
        <div className="w-7 h-7 rounded-full bg-[#EEE9DF] border border-[#202A3A]/20 flex items-center justify-center shadow-sm animate-bounce">
          <ChevronDown className="w-4 h-4 text-[#C85A32]" />
        </div>
      </div>
    </section>
  );
}
