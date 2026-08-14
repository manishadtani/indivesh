"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, Palette, Home, Sparkle, Layers } from "lucide-react";

const categories = [
  {
    id: "fashion",
    num: "01",
    name: "Fashion & Apparel",
    tagline: "Couture, Ethnic & Everyday Wear",
    description: "High-definition reactive & sublimation printing for luxury fashion houses and ethnic wear.",
    items: ["Sarees & Dupattas", "Kurtis & Co-ords", "Dresses & Skirts", "Designer Suits"],
    tech: "Direct Reactive · Digital Sublimation",
    icon: <Palette className="w-4 h-4 text-[#C85A32]" />,
  },
  {
    id: "home",
    num: "02",
    name: "Home & Living",
    tagline: "Interior Fabrics & Soft Furnishings",
    description: "Wash-durable pigment & reactive printing engineered for soft furnishings and drapes.",
    items: ["Bedsheets & Pillow Covers", "Curtains & Drapes", "Cushion Covers", "Table Linen"],
    tech: "Light-Fast · Soft Finish Pigments",
    icon: <Home className="w-4 h-4 text-[#C85A32]" />,
  },
  {
    id: "accessories",
    num: "03",
    name: "Accessories",
    tagline: "Lifestyle & Fabric Accents",
    description: "Vibrant prints on silk, canvas, and satin blends for fashion accents and brand merch.",
    items: ["Printed Fabric Bags", "Eco-Totes", "Silk & Satin Stoles", "Pocket Squares"],
    tech: "Reinforced Color Vibrancy · Trim Printing",
    icon: <Sparkle className="w-4 h-4 text-[#C85A32]" />,
  },
  {
    id: "custom",
    num: "04",
    name: "Custom & Designer",
    tagline: "Bespoke Collection Printing",
    description: "Tailored print runs for independent designers requiring 100% exact Pantone matching.",
    items: ["Repeat Pattern Prints", "Placement Prints", "Brand Collection Runs", "Pantone Matching"],
    tech: "100% Pantone Precision Matching",
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
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
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
          className="flex flex-col md:flex-row gap-4 h-auto md:h-[490px] w-full transition-all duration-700"
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
                  transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  border rounded-2xl
                  ${
                    isActive
                      ? "md:flex-[3.8] bg-[#151D2A] text-[#F7F4EE] border-[#D4AF37]/35 shadow-[0_25px_70px_-15px_rgba(21,29,42,0.4)]"
                      : "md:flex-1 bg-[#EEE9DF] text-[#202A3A] border-[#202A3A]/8 hover:bg-[#FAF8F3] hover:border-[#C85A32]/25"
                  }
                  p-6 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[160px] md:min-h-0
                `}
              >
                {/* Gold/Terracotta Luxury Gradient Top Hairline Accent */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C85A32] via-[#D4AF37] to-transparent animate-fadeIn z-20" />
                )}

                {/* Artisanal Layered Background for Active Open Card */}
                {isActive && (
                  <>
                    {/* Subtle Silk Fabric Weave Background Texture */}
                    <div
                      className="absolute inset-0 z-0 bg-cover bg-center opacity-12 pointer-events-none transition-opacity duration-1000"
                      style={{ backgroundImage: "url('/images/hero-img.png')" }}
                    />
                    {/* Multi-Tone Warm Amber & Terracotta Radial Spotlight */}
                    <div
                      className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000"
                      style={{
                        background:
                          "radial-gradient(ellipse at 85% 15%, rgba(200,90,50,0.24) 0%, rgba(212,175,55,0.14) 40%, rgba(21,29,42,0.95) 80%)",
                      }}
                    />
                    {/* Subtle Inner Gold Edge Lighting */}
                    <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl border border-inset border-[#D4AF37]/10" />
                  </>
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

                {/* Active Card Open Content */}
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

                  {/* Open State Rich Details */}
                  {isActive && (
                    <div className="mt-5 animate-fadeIn">
                      <p className="font-sans text-xs sm:text-sm text-[#FAF8F3]/85 leading-relaxed max-w-lg mb-5 font-normal">
                        {c.description}
                      </p>

                      {/* Glassmorphic Item Chips */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {c.items.map((item) => (
                          <span
                            key={item}
                            className="bg-[#FAF8F3]/10 border border-[#D4AF37]/25 text-[#FAF8F3] px-3.5 py-1.5 rounded-lg font-sans text-xs font-semibold backdrop-blur-md shadow-sm transition-transform hover:scale-105"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Tech Spec Tag Line */}
                      <div className="flex items-center gap-2 font-sans text-[11px] text-[#FAF8F3]/70 tracking-wide font-semibold border-t border-[#FAF8F3]/12 pt-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                        <span className="text-[#D4AF37] font-bold">TECH:</span>
                        <span>{c.tech}</span>
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
