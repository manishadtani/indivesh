"use client";

import Image from "next/image";
import { Sparkles, Compass } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#EEE9DF] border-t border-[#202A3A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image Showcase Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F3] border border-[#202A3A]/10 shadow-xl group">
              <Image
                src="/images/hero-img.png"
                alt="Indivesh Textile Studio Craftsmanship"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#202A3A]/20 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F3]/90 backdrop-blur-md p-4 border-l-2 border-[#C85A32]">
                <p className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#202A3A]">
                  INDIVESH DESIGN STUDIO
                </p>
                <p className="font-serif text-sm font-semibold text-[#7A8B7B]">
                  Bridging Indian Artistry & Modern Textile Technology
                </p>
              </div>
            </div>
          </div>

          {/* Right Brand Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#C85A32]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase font-bold">
                ABOUT INDIVESH
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202A3A] font-light leading-tight">
              THE ART BEHIND <br />
              <span className="font-normal italic text-[#C85A32]">THE PRINT.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#C85A32] my-4" />

            <p className="font-sans text-base text-[#202A3A]/80 leading-relaxed font-normal">
              Indivesh is a premier textile printing and design house dedicated to transforming creative concepts into vibrant, tangible fabrics. Rooted in Indian design aesthetics and powered by modern print engineering, we serve fashion designers, home furnishers, and lifestyle brands who seek uncompromised quality.
            </p>

            <p className="font-sans text-base text-[#202A3A]/80 leading-relaxed font-normal">
              We believe that fabric is more than material — it is a canvas for cultural story, personal style, and architectural warmth. Whether printing a delicate floral saree or a bold geometric upholstery repeat, our focus remains on color depth, touch softness, and lasting durability.
            </p>

            <div className="pt-4 flex items-center space-x-6 border-t border-[#202A3A]/10">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-[#202A3A] hover:bg-[#C85A32] text-[#F7F4EE] px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300"
              >
                <span>Connect With Our Designers</span>
                <Compass className="w-4 h-4 text-[#F7F4EE]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
