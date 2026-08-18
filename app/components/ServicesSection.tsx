"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, Layers, Palette, Flame, Droplets, Grid, Wand2, ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";

type CategoryFilter = "all" | "traditional" | "digital" | "custom";

interface ServiceItem {
  id: string;
  category: CategoryFilter;
  title: string;
  tagline: string;
  desc: string;
  fabrics: string[];
  icon: React.ReactNode;
  badge: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "screen",
    category: "traditional",
    title: "Screen Printing",
    tagline: "Vibrant Bulk & Precision Prints",
    desc: "High-precision multi-color screen printing delivering rich opacity and crisp design definition across large fabric volumes.",
    fabrics: ["Cotton", "Canvas", "Rayon", "Blends"],
    icon: <Grid className="w-5 h-5 text-[#202A3A]" />,
    badge: "Bulk & Precision",
  },
  {
    id: "handblock",
    category: "traditional",
    title: "Hand Block Printing",
    tagline: "Timeless Wooden Artisanal Craft",
    desc: "Authentic artisan hand-carved wooden block techniques bringing heritage motifs and organic elegance to natural textiles.",
    fabrics: ["Pure Cotton", "Mulmul", "Chanderi", "Silk"],
    icon: <Palette className="w-5 h-5 text-[#202A3A]" />,
    badge: "Artisan Heritage",
  },
  {
    id: "reactive",
    category: "digital",
    title: "Reactive Printing",
    tagline: "Deep Fiber Dyeing & Supreme Softness",
    desc: "Direct fiber-penetrating reactive dyes ensuring ultra-vibrant, wash-fast colors with an uncompromised luxurious hand-feel.",
    fabrics: ["Natural Silk", "Viscose", "Modal", "Linen"],
    icon: <Droplets className="w-5 h-5 text-[#202A3A]" />,
    badge: "Ultra-Washfast",
  },
  {
    id: "sublimation",
    category: "digital",
    title: "Sublimation Printing",
    tagline: "High-Def Transfer & Pantone Precision",
    desc: "Advanced thermal transfer printing yielding photo-realistic clarity and zero color fade on polyester & synthetic blends.",
    fabrics: ["Polyester", "Satin", "Georgette", "Poly-Blends"],
    icon: <Flame className="w-5 h-5 text-[#202A3A]" />,
    badge: "HD Precision",
  },
  {
    id: "marble",
    category: "custom",
    title: "Marble Printing",
    tagline: "Bespoke One-of-a-Kind Fluid Patterns",
    desc: "Artisanal liquid marble printing creating captivating, non-repeating organic color swirls for exclusive couture collections.",
    fabrics: ["Silk Satin", "Organza", "Crepe", "Chiffon"],
    icon: <Wand2 className="w-5 h-5 text-[#202A3A]" />,
    badge: "Bespoke Fluid Art",
  },
  {
    id: "custom",
    category: "custom",
    title: "Custom Print Development",
    tagline: "End-to-End Design & Pantone Samples",
    desc: "Bespoke repeat design, strike-off sample development, and exact Pantone shade matching tailored to designer collections.",
    fabrics: ["All Natural & Synthetic Fabrics"],
    icon: <Layers className="w-5 h-5 text-[#202A3A]" />,
    badge: "Concept to Roll",
  },
];

const categories: { label: string; value: CategoryFilter }[] = [
  { label: "All Services", value: "all" },
  { label: "Traditional & Artisan", value: "traditional" },
  { label: "Digital Precision", value: "digital" },
  { label: "Bespoke & Custom", value: "custom" },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("screen");
  const [filter, setFilter] = useState<CategoryFilter>("all");
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

  const filteredServices = servicesList.filter(
    (s) => filter === "all" || s.category === filter
  );

  const selectedService = servicesList.find((s) => s.id === activeTab) || servicesList[0];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#F7F4EE] relative overflow-hidden"
    >
      {/* Delicate Architectural Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#202A3A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Filter Switcher */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5 px-3.5 py-1 bg-[#EEE9DF] border border-[#202A3A]/10 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-[#202A3A]">
                OUR SERVICES
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#202A3A] font-light leading-snug">
              MASTER PRINTING <span className="italic text-[#C85A32] font-normal">CAPABILITIES.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`text-[11px] font-sans font-bold tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300 border ${
                  filter === cat.value
                    ? "bg-[#202A3A] text-[#F7F4EE] border-[#202A3A] shadow-sm"
                    : "bg-[#EEE9DF]/90 text-[#202A3A]/70 border-[#202A3A]/10 hover:border-[#202A3A]/30 hover:bg-[#FAF8F3]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Luxury 6-Card Grid (Sleek, Clean & High Impact) ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(32px)",
            transitionDelay: "150ms",
          }}
        >
          {filteredServices.map((service, index) => {
            const isSelected = activeTab === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                className={`
                  group relative rounded-2xl p-6 transition-all duration-500 cursor-pointer overflow-hidden
                  border flex flex-col justify-between min-h-[200px] bg-[#EEE9DF] text-[#202A3A]
                  hover:-translate-y-1 hover:shadow-lg
                  ${
                    isSelected
                      ? "border-[#202A3A] shadow-md ring-1 ring-[#202A3A]/20"
                      : "border-[#202A3A]/10 hover:border-[#202A3A]/30"
                  }
                `}
              >
                {/* Subtle Gold Top Hairline Line Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 ${
                    isSelected
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#C85A32] opacity-100"
                      : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#D4AF37]/60 group-hover:to-transparent opacity-60"
                  }`}
                />

                <div>
                  {/* Top Bar: Icon + Badge (No Red Icon / No Live Dot) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#F7F4EE] text-[#202A3A] border border-[#202A3A]/10 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {service.icon}
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full bg-[#202A3A]/5 text-[#7A8B7B] border border-[#202A3A]/5">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl font-semibold mb-1 text-[#202A3A] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider mb-2.5 text-[#C85A32]">
                    {service.tagline}
                  </p>

                  {/* Concise Description */}
                  <p className="font-sans text-xs leading-relaxed text-[#7A8B7B] font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Bar: Action Indicator */}
                <div className="mt-5 pt-3.5 border-t border-[#202A3A]/10 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-sans uppercase font-bold tracking-wider ${
                      isSelected ? "text-[#202A3A]" : "text-[#7A8B7B]"
                    }`}
                  >
                    {isSelected ? "Selected Service" : "Click to select"}
                  </span>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-[#202A3A] text-[#F7F4EE]"
                        : "bg-[#202A3A]/5 text-[#202A3A]/40 group-hover:bg-[#202A3A] group-hover:text-[#F7F4EE]"
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       

      </div>
    </section>
  );
}
