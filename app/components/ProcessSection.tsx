"use client";

import { MessageSquare, Palette, Scroll, Printer, Truck } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Share Your Vision",
      icon: <MessageSquare className="w-5 h-5" />,
      desc: "Send us your artwork files, repeat patterns, reference samples, or design concepts.",
    },
    {
      num: "02",
      title: "Design & Develop",
      icon: <Palette className="w-5 h-5" />,
      desc: "Our design team refines vector repeats, Pantone color matching, and digital strike-offs.",
    },
    {
      num: "03",
      title: "Choose Your Fabric",
      icon: <Scroll className="w-5 h-5" />,
      desc: "Select from natural cottons, silks, linens, viscose, or custom polyester blends suited to your product.",
    },
    {
      num: "04",
      title: "Print With Precision",
      icon: <Printer className="w-5 h-5" />,
      desc: "Printed using reactive, pigment, or sublimation methods for deep penetration and vivid tones.",
    },
    {
      num: "05",
      title: "Quality & Delivery",
      icon: <Truck className="w-5 h-5" />,
      desc: "100% fabric inspection, steaming, finishing, and secure dispatch to your doorstep.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase font-bold text-[#C85A32] mb-3">
            OUR PROCESS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B132B] font-light">
            FROM IDEA TO <span className="font-normal italic text-[#C85A32]">FABRIC.</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#C85A32] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#8A7E72] font-sans">
            A seamless, professional 5-step workflow designed to transform creative concepts into production-grade printed textiles.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-[#F3EDE2] p-6 border border-[#0B132B]/10 flex flex-col justify-between relative group hover:border-[#C85A32] transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-bold text-[#C85A32]">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#0B132B] text-white flex items-center justify-center group-hover:bg-[#C85A32] transition-colors">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#0B132B] mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-xs text-[#8A7E72] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0B132B]/10 text-[10px] uppercase tracking-widest text-[#0B132B] font-bold">
                Step {idx + 1} of 5
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
