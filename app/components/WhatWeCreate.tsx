"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, Palette, Home, Sparkle, Layers } from "lucide-react";

const categories = [
  {
    id: "fashion",
    num: "01",
    name: "Fashion & Apparel",
    tagline: "Couture, Ethnic & Everyday Wear",
    items: ["Sarees & Dupattas", "Kurtis & Co-ords", "Dresses & Skirts", "Designer Suits"],
    tech: "Direct Reactive · Sublimation",
    image: "/images/f sare.png",
    icon: <Palette className="w-4 h-4 text-[#C85A32]" />,
  },
  {
    id: "home",
    num: "02",
    name: "Home & Living",
    tagline: "Interior Fabrics & Soft Furnishings",
    items: ["Bedsheets & Pillow Covers", "Curtains & Drapes", "Cushion Covers", "Table Linen"],
    tech: "Light-Fast · Soft Pigments",
    image: "/images/home.png",
    icon: <Home className="w-4 h-4 text-[#C85A32]" />,
  },
  {
    id: "accessories",
    num: "03",
    name: "Accessories",
    tagline: "Lifestyle & Fabric Accents",
    items: ["Printed Fabric Bags", "Eco-Totes", "Silk & Satin Stoles", "Pocket Squares"],
    tech: "Reinforced Color Vibrancy",
    image: "/images/accessories.png",
    icon: <Sparkle className="w-4 h-4 text-[#C85A32]" />,
  },
  {
    id: "custom",
    num: "04",
    name: "Custom & Designer",
    tagline: "Bespoke Collection Printing",
    items: ["Repeat Pattern Prints", "Placement Prints", "Brand Collection Runs", "Pantone Matching"],
    tech: "100% Pantone Precision",
    image: "/images/custom.png",
    icon: <Layers className="w-4 h-4 text-[#C85A32]" />,
  },
];

export default function WhatWeCreate() {
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
      id="applications"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#F7F4EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div
          className="mb-10 sm:mb-12 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-[#EEE9DF] border border-[#202A3A]/10 rounded-full">
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-[#202A3A]">
              WHAT WE CREATE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#202A3A] font-light leading-snug">
                PRINTED FOR EVERY{" "}
                <span className="italic text-[#C85A32] font-normal">EXPRESSION.</span>
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#7A8B7B] max-w-xs font-medium leading-relaxed">
              Explore our core capabilities across fashion apparel, soft home furnishings, and bespoke designer collections.
            </p>
          </div>
        </div>

        {/* ── Expanding Accordion Showcase Container ── */}
        <div
          className="flex flex-col md:flex-row gap-4 h-auto md:h-[480px] w-full transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
            transitionDelay: "150ms",
          }}
        >
          {categories.map((c, idx) => {
            const isActive = active === idx;

            return (
              <div
                key={c.id}
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
                className={`
                  relative overflow-hidden cursor-pointer
                  transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  border rounded-2xl
                  ${
                    isActive
                      ? "md:flex-[3.8] bg-[#151D2A] text-[#F7F4EE] border-[#D4AF37]/40 shadow-2xl"
                      : "md:flex-1 bg-[#EEE9DF] text-[#202A3A] border-[#202A3A]/8 hover:bg-[#FAF8F3] hover:border-[#C85A32]/25"
                  }
                  p-6 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[160px] md:min-h-0
                `}
              >
                {/* Top Hairline Accent */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C85A32] via-[#D4AF37] to-transparent animate-fadeIn z-20" />
                )}

                {/* ── High-Visibility Category Image Background ── */}
                <div
                  className={`absolute inset-0 z-0 bg-cover bg-center pointer-events-none transition-all duration-1000 ${
                    isActive ? "opacity-90 scale-105" : "opacity-0 group-hover:opacity-20"
                  }`}
                  style={{ backgroundImage: `url('${c.image}')` }}
                />

                {/* Light Gradient Overlay for Pristine Image Visibility */}
                {isActive && (
                  <div
                    className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(21,29,42,0.88) 0%, rgba(21,29,42,0.45) 50%, rgba(21,29,42,0.15) 85%, transparent 100%)",
                    }}
                  />
                )}

                {/* Top Header: Number & Category Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight transition-colors duration-500 ${
                      isActive ? "text-[#D4AF37]" : "text-[#202A3A]/30"
                    }`}
                  >
                    {c.num}
                  </span>

                  <span
                    className={`text-[9px] uppercase tracking-[0.25em] font-bold px-3 py-1 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-[#C85A32] text-[#F7F4EE] shadow-sm border border-[#D4AF37]/30"
                        : "bg-[#202A3A]/5 text-[#7A8B7B]"
                    }`}
                  >
                    {c.id}
                  </span>
                </div>

                {/* Collapsed Card Vertical Title (Desktop Only) */}
                {!isActive && (
                  <div className="hidden md:flex flex-1 items-center justify-center my-4">
                    <span className="font-serif text-xl lg:text-2xl text-[#202A3A]/70 font-light tracking-wider uppercase whitespace-nowrap -rotate-90">
                      {c.name}
                    </span>
                  </div>
                )}

                {/* Active Card Open Content — Short & Minimal */}
                <div className={`relative z-10 my-4 md:my-0 ${!isActive ? "md:hidden" : ""}`}>
                  <span
                    className={`block font-sans text-[10px] uppercase tracking-[0.28em] font-bold mb-1.5 transition-colors duration-500 ${
                      isActive ? "text-[#D4AF37]" : "text-[#7A8B7B]"
                    }`}
                  >
                    {c.tagline}
                  </span>

                  <h3
                    className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-snug transition-colors duration-500 ${
                      isActive ? "text-[#F7F4EE]" : "text-[#202A3A]"
                    }`}
                  >
                    {c.name}
                  </h3>

                  {/* Open State Minimal Details */}
                  {isActive && (
                    <div className="mt-5 animate-fadeIn">
                      {/* Glassmorphic Item Chips */}
                      <div className="flex flex-wrap gap-2">
                        {c.items.map((item) => (
                          <span
                            key={item}
                            className="bg-[#202A3A]/80 border border-[#D4AF37]/30 text-[#FAF8F3] px-3.5 py-1.5 rounded-lg font-sans text-xs font-semibold backdrop-blur-md shadow-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Spacer */}
                <div className="relative z-10 pt-2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
