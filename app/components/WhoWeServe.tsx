"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, Globe2 } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Indie & Emerging Labels",
    tagline: "Sampling, Custom Prints & Low MOQs",
    desc: "Tailored for rising fashion designers and boutique labels requiring flexible minimums, custom strike-off sampling, and bespoke print development.",
    features: ["Small-Batch Printing", "Custom Pattern Development", "Pantone Shade Strike-Offs"],
    icon: <Layers className="w-5 h-5 text-[#202A3A]" />,
  },
  {
    num: "02",
    title: "Fashion & Lifestyle Brands",
    tagline: "Collections, Accessories & Furnishings",
    desc: "Built for established apparel brands, accessory labels, and home decor studios needing repeat collections, high color precision, and premium finishes.",
    features: ["Repeat Collection Printing", "Scarves, Bags & Accessories", "Home & Interior Fabrics"],
    icon: <ShieldCheck className="w-5 h-5 text-[#202A3A]" />,
  },
  {
    num: "03",
    title: "Buying & Export Houses",
    tagline: "Indian Sourcing & Global Dispatch",
    desc: "Structured for international buying agencies and global export brands seeking compliant Indian production, roll inspection, and seamless export dispatch.",
    features: ["Technical Sourcing Support", "100% Roll Inspection & Finishing", "Timely Global Logistics"],
    icon: <Globe2 className="w-5 h-5 text-[#202A3A]" />,
  },
];

const marqueeItems = [
  "Emerging Designers",
  "Fashion Apparel Brands",
  "Lifestyle & Accessories",
  "Home & Soft Furnishings",
  "Indian Buying Houses",
  "Global Export Brands",
];

export default function WhoWeServe() {
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
      id="who-we-serve"
      ref={sectionRef}
      className="py-16 sm:py-22 bg-[#F7F4EE] border-y border-[#202A3A]/10 relative overflow-hidden"
    >
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202A3A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* ── High-Fashion Scrolling Marquee Ticker Strip ── */}
      <div className="w-full bg-[#151D2A] text-[#F7F4EE] py-3 overflow-hidden whitespace-nowrap mb-12 sm:mb-16 border-y border-[#D4AF37]/30 shadow-md">
        <div className="inline-flex items-center space-x-8 animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center space-x-8">
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] font-bold text-[#F7F4EE]/90">
                {item}
              </span>
              <span className="text-[#D4AF37] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5 px-3.5 py-1 bg-[#EEE9DF] border border-[#202A3A]/10 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-[#202A3A]">
                WHO WE SERVE
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#202A3A] font-light leading-snug">
              BUILT FOR BRANDS AT <span className="italic text-[#C85A32] font-normal">EVERY STAGE.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#7A8B7B] max-w-sm font-medium leading-relaxed mt-2 md:mt-0">
            From boutique indie capsules to high-volume global export runs, our facility scales seamlessly to your production demands.
          </p>
        </div>

        {/* ── 3 Luxury Pillars Matrix ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
            transitionDelay: "150ms",
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="group relative rounded-2xl p-7 bg-[#EEE9DF] text-[#202A3A] border border-[#202A3A]/10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#202A3A]/30 overflow-hidden"
            >
              {/* Subtle Top Gold Hairline Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#C85A32] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-light text-[#D4AF37] tracking-tight">
                    {pillar.num}
                  </span>
                  <div className="p-3 rounded-xl bg-[#F7F4EE] border border-[#202A3A]/10 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {pillar.icon}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-xl font-semibold mb-1.5 text-[#202A3A]">
                  {pillar.title}
                </h3>

                <p className="font-sans text-[10px] font-bold uppercase tracking-wider mb-4 text-[#C85A32]">
                  {pillar.tagline}
                </p>

                {/* Description */}
                <p className="font-sans text-xs leading-relaxed text-[#7A8B7B] font-medium mb-6">
                  {pillar.desc}
                </p>

                {/* Feature Bullet Chips */}
                <div className="space-y-2 pt-4 border-t border-[#202A3A]/10">
                  {pillar.features.map((feat) => (
                    <div key={feat} className="flex items-center space-x-2 text-xs font-sans text-[#202A3A]/85 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="mt-8 pt-4 border-t border-[#202A3A]/10 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[10px] font-sans uppercase tracking-[0.2em] font-bold text-[#202A3A] group-hover:text-[#C85A32] transition-colors"
                >
                  <span>Inquire Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C85A32] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
