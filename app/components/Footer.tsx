"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070C1B] text-[#FAF7F2] pt-16 pb-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl tracking-[0.25em] font-semibold text-white block">
              INDIVESH
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C85A32] font-bold">
              ARTISTRY IN TEXTILE PRINTING & DESIGN
            </p>
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-sm">
              Where every fabric becomes a canvas. Custom textile design and high-precision print house serving fashion, home, and lifestyle applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-white/70">
              <li>
                <a href="#hero" className="hover:text-[#C85A32] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C85A32] transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-[#C85A32] transition-colors">
                  What We Create
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#C85A32] transition-colors">
                  Print Gallery
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C85A32] transition-colors">
                  Process Workflow
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C85A32] transition-colors">
                  Contact & Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Product Offerings */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              Core Offerings
            </h4>
            <ul className="space-y-2 text-xs font-sans text-white/70">
              <li>Fashion Apparel (Sarees, Dupattas, Kurtis, Suits)</li>
              <li>Home Furnishings (Bedsheets, Curtains, Cushions)</li>
              <li>Lifestyle Accessories (Totes, Scarves, Stoles)</li>
              <li>Bespoke Designer Pattern & Batch Printing</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans gap-4">
          <p>© {new Date().getFullYear()} INDIVESH. All Rights Reserved. Artisanal Textile House.</p>
          
          <div className="flex items-center space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#D4AF37] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
