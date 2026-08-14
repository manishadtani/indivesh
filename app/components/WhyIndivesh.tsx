"use client";

import { CheckCircle, Award, Target, Palette, Cpu, HeartHandshake } from "lucide-react";

export default function WhyIndivesh() {
  const pillars = [
    {
      title: "Design-Led Approach",
      icon: <Palette className="w-6 h-6" />,
      desc: "We understand pattern repeat harmony, scale proportion, and fashion aesthetics — not just machinery operation.",
    },
    {
      title: "Attention to Print Detail",
      icon: <Target className="w-6 h-6" />,
      desc: "Micro-fine line definition, sharp vector outlines, and soft gradient transitions across large yardages.",
    },
    {
      title: "Consistent Color Quality",
      icon: <Award className="w-6 h-6" />,
      desc: "Strict spectrophotometer color calibration ensuring exact shade reproduction batch after batch.",
    },
    {
      title: "Custom Printing Capability",
      icon: <Cpu className="w-6 h-6" />,
      desc: "Flexibility to handle short sample runs for boutique designers to bulk manufacturing for major retailers.",
    },
    {
      title: "Professional Production",
      icon: <CheckCircle className="w-6 h-6" />,
      desc: "Dedicated team of textile technologists, colorists, and quality inspectors monitoring every roll.",
    },
    {
      title: "Reliable Service",
      icon: <HeartHandshake className="w-6 h-6" />,
      desc: "Clear timelines, transparent communication, and dependable dispatch commitments for your launch dates.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase font-bold text-[#C85A32] mb-3">
            THE INDIVESH ADVANTAGE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B132B] font-light">
            CRAFTED WITH <span className="font-normal italic text-[#C85A32]">INTENTION.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C85A32] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#8A7E72] font-sans">
            Built on verified craftsmanship, design integrity, and dependable trade partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#F3EDE2] p-8 border border-[#0B132B]/10 hover:border-[#C85A32] transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#0B132B] text-white flex items-center justify-center mb-6 group-hover:bg-[#C85A32] transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#0B132B] mb-3">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-[#8A7E72] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
