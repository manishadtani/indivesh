"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { num: "5+", label: "Years Experience" },
    { num: "35+", label: "Brand Clients" },
    { num: "50K+", label: "Meters Printed" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#F7F4EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Image Frame */}
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-[#202A3A]/10">
            <Image
              src="/images/phi-img.webp"
              alt="Indivesh Atelier Craftsmanship"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: Clean Light Content */}
          <div className="lg:col-span-7 block">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-[#EEE9DF] border border-[#202A3A]/10 rounded-full">
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-[#202A3A]">
                ABOUT INDIVESH
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A3A] font-light leading-snug mt-1 mb-4">
              WHERE HERITAGE MEETS <span className="italic text-[#C85A32] font-normal">PRECISION.</span>
            </h2>

            {/* Crisp 2-Line Narrative Paragraph */}
            <p className="font-sans sm:text-lg text-[#202A3A]  font-medium leading-relaxed my-5 max-w-xl">
              Indivesh is a premier B2B textile house bridging Indian design heritage with high-definition digital print engineering. We empower fashion labels, lifestyle brands, and interior furnishers with uncompromised color depth, Pantone accuracy, and natural fabric drape.
            </p>

            {/* Clean Minimal Stats Callout */}
            <div className="grid grid-cols-3 gap-6 border-y border-[#202A3A]/10 py-5 my-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="block font-serif text-2xl sm:text-3xl font-light text-[#C85A32]">
                    {s.num}
                  </span>
                  <span className="block font-sans text-xs text-[#202A3A] font-semibold mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Minimal CTA Link */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#202A3A] hover:text-[#C85A32] transition-colors group"
              >
                <span>Connect With Designers</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
