"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Vision & Artwork",
    desc: "Share artwork vectors, repeat patterns, or reference concepts.",
  },
  {
    num: "02",
    title: "Color Calibration",
    desc: "Pantone shade matching and digital sample strike-off approval.",
  },
  {
    num: "03",
    title: "Fabric Curation",
    desc: "Select cottons, silks, linens, or viscose tailored to your drape.",
  },
  {
    num: "04",
    title: "Precision Print",
    desc: "High-definition reactive, pigment, or sublimation production.",
  },
  {
    num: "05",
    title: "Quality & Dispatch",
    desc: "100% fabric roll inspection, steam finishing, and delivery.",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F7F4EE] relative overflow-hidden"
    >
      {/* ── Soft Artisanal Textile Print Background Overlay ── */}
      {/* Mobile: bg-[right_center] focuses on right saree art. Desktop: md:bg-center */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[right_center] md:bg-center opacity-[0.15] pointer-events-none transition-opacity duration-1000"
        style={{ backgroundImage: "url('/images/hero-img.png')" }}
      />
      {/* Delicate Gradient Mask */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(247,244,238,0.5) 0%, rgba(247,244,238,0.3) 50%, rgba(247,244,238,0.65) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 bg-[#EEE9DF]/90 backdrop-blur-sm border border-[#202A3A]/10 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-[#202A3A]">
              OUR PROCESS
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#202A3A] font-light leading-snug mt-1">
            FROM IDEA TO <span className="italic text-[#C85A32] font-normal">FABRIC.</span>
          </h2>
        </div>

        {/* ── Unique Non-Card Continuous Thread Row ── */}
        <div
          className="relative transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
            transitionDelay: "150ms",
          }}
        >

          {/* Continuous Thread Line (Desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[5%] right-[5%] h-[1.5px] bg-[#202A3A]/15 z-0">
            <div
              className="h-full bg-gradient-to-r from-[#C85A32] via-[#D4AF37] to-[#C85A32] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
              style={{
                width: `${(active / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* 5 Non-Card Steps Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = active === idx;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  className="group cursor-pointer flex flex-col items-center text-center relative"
                >
                  {/* Step Number Above Line */}
                  <span
                    className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-3 transition-all duration-500 ${
                      isActive ? "text-[#C85A32] scale-110" : "text-[#202A3A]/30 group-hover:text-[#202A3A]/60"
                    }`}
                  >
                    {step.num}
                  </span>

                  {/* Thread Node Circle */}
                  <div
                    className={`
                      w-4 h-4 rounded-full border-2 my-2 transition-all duration-500 z-10 flex items-center justify-center
                      ${
                        isActive
                          ? "bg-[#C85A32] border-[#D4AF37] scale-125 shadow-[0_0_12px_#C85A32]"
                          : "bg-[#F7F4EE] border-[#202A3A]/20 group-hover:border-[#C85A32]"
                      }
                    `}
                  />

                  {/* Step Title & Short Description Below Line */}
                  <div className="mt-4 px-2">
                    <h3
                      className={`font-serif text-lg font-semibold mb-1.5 transition-colors duration-300 ${
                        isActive ? "text-[#202A3A]" : "text-[#202A3A]/70 group-hover:text-[#202A3A]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="font-sans text-xs text-[#7A8B7B] leading-relaxed font-medium max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Minimal CTA Link */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#202A3A] hover:text-[#C85A32] transition-colors group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
