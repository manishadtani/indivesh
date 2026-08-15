"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Phase: "title" → "fadeOut" → "reveal" → "ready"
  const [phase, setPhase] = useState<"title" | "fadeOut" | "reveal" | "ready">("title");
  const [hasScrolled, setHasScrolled] = useState(false);
  const hasCompletedRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [transformStyle, setTransformStyle] = useState({
    scale: 1.0,
    opacity: 0,
  });
  const rafRef = useRef<number | null>(null);

  // Detect Mobile Screen Size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setTransformStyle({ scale: 1.0, opacity: 1.0 });
      } else if (!hasCompletedRef.current) {
        setTransformStyle({ scale: 0.58, opacity: 0.12 });
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cinematic Intro Sequence
  useEffect(() => {
    // Block all scroll input events (preserves sticky — NO overflow:hidden on html/body!)
    const preventDefault = (e: Event) => e.preventDefault();
    const preventKeys = (e: KeyboardEvent) => {
      const scrollKeys = ["ArrowDown", "ArrowUp", "Space", "PageDown", "PageUp", "Home", "End"];
      if (scrollKeys.includes(e.key)) e.preventDefault();
    };
    // Force scroll position to top if somehow it moves
    const forceTop = () => window.scrollTo(0, 0);

    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", preventKeys, { passive: false });
    window.addEventListener("scroll", forceTop);

    // Phase 1: Title visible for 1.2s
    const t1 = setTimeout(() => setPhase("fadeOut"), 1200);
    // Phase 2: Title fades out, then reveal fabric & unlock scroll
    const t2 = setTimeout(() => {
      setPhase("reveal");
      // Unlock all scroll inputs
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("keydown", preventKeys);
      window.removeEventListener("scroll", forceTop);
    }, 2000);
    // Phase 3: After fabric fades in, show scroll indicator
    const t3 = setTimeout(() => setPhase("ready"), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("keydown", preventKeys);
      window.removeEventListener("scroll", forceTop);
    };
  }, []);

  // Scroll Tracking for Pinned Zoom Animation (Desktop Only)
  useEffect(() => {
    if (isMobile) return;

    const startScale = 0.58;
    const startOpacity = 0.12;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        // If animation has already completed once, keep it permanently locked at 1.0
        if (hasCompletedRef.current) {
          setTransformStyle({ scale: 1.0, opacity: 1.0 });
          return;
        }

        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight || 800;
        const totalScrollableDistance = rect.height - viewportHeight;

        if (totalScrollableDistance <= 0) return;

        const scrolledDistance = -rect.top;
        const rawProgress = scrolledDistance / (totalScrollableDistance * 0.85);
        const progress = Math.min(1, Math.max(0, rawProgress));

        if (progress >= 0.95) {
          hasCompletedRef.current = true;
          setTransformStyle({ scale: 1.0, opacity: 1.0 });
          return;
        }

        const currentScale = startScale + (1.0 - startScale) * progress;
        const currentOpacity = startOpacity + (1.0 - startOpacity) * progress;

        setTransformStyle({
          scale: Number(currentScale.toFixed(4)),
          opacity: Number(currentOpacity.toFixed(4)),
        });
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Fabric image should only be visible after title disappears
  const showFabric = phase === "reveal" || phase === "ready";

  return (
    <section
      id="hero"
      ref={containerRef}
      className={`relative w-full bg-[#F7F4EE] ${
        isMobile ? "h-screen" : "h-[220vh]"
      }`}
    >
      {/* STICKY PINNED HERO VIEWPORT */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#F7F4EE]">
        
        {/* ANIMATED FABRIC EMERGENCE BACKGROUND LAYER (Desktop Zoom Reveal / Mobile Direct Static Image) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${isMobile ? "/images/hero-img-phone.webp" : "/images/hero-imgg.webp"}')`,
            transform: isMobile ? "none" : `scale(${transformStyle.scale}) translateZ(0)`,
            opacity: showFabric ? (isMobile ? 1 : transformStyle.opacity) : 0,
            transformOrigin: "center center",
            willChange: isMobile ? "auto" : "transform, opacity",
            transition: "opacity 0.6s ease-out",
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

      </div>
    </section>
  );
}
