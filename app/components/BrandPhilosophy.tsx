"use client";

import { useEffect, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function BrandPhilosophy() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      style={{
        position: "relative",
        zIndex: 20,
        background: "transparent",
        height: "60vh",
        minHeight: "60vh",
      }}
      className="w-full overflow-visible relative"
    >
      {/* Floating card */}
      <div
        ref={cardRef}
        className="philosophy-card w-[92%] md:w-[75%] mx-auto"
        style={{
          marginTop: "-10vh",
          height: "60vh",
          position: "relative",
          backgroundImage: "url('/images/hero-img.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          boxShadow: "0 20px 60px -10px rgba(11,19,43,0.22), 0 8px 24px -6px rgba(11,19,43,0.12)",
          border: "1px solid rgba(11,19,43,0.08)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left gradient overlay + content */}
        <div
          className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 md:px-12"
          style={{
            width: "52%",
            background: "linear-gradient(to right, rgba(247,244,238,0.97) 55%, rgba(247,244,238,0.78) 80%, transparent 100%)",
          }}
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            {/* <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" /> */}
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.28em] uppercase font-bold text-[#C85A32]">
              Our Philosophy
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#202A3A] leading-snug mb-3 sm:mb-4">
            We don&apos;t just<br />
            print fabric.{" "}
            <span className="italic text-[#C85A32] font-normal">
              We give ideas<br className="hidden sm:block" /> a surface to live on.
            </span>
          </h2>

          {/* Divider */}
          <div className="w-10 h-[1.5px] bg-[#C85A32] mb-3 sm:mb-4" />

          {/* Short body */}
          <p className="font-sans text-[11px] sm:text-xs md:text-sm text-[#202A3A]/75 leading-relaxed mb-4 sm:mb-6 max-w-[220px] sm:max-w-xs font-normal">
            Every thread chosen for drape, texture &amp; ink retention — crafted for fashion houses and luxury labels.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#202A3A] hover:text-[#C85A32] transition-colors group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
