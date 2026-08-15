"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import GoogleTranslate from "./GoogleTranslate";

export default function Navbar() {
  const [showFullNav, setShowFullNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.3;
      if (window.scrollY >= threshold) {
        setShowFullNav(true);
      } else {
        setShowFullNav(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Applications", href: "#applications" },
    { name: "Process", href: "#process" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-22 sm:h-24 md:h-26 z-50 transition-all duration-500 flex items-center ${
          showFullNav
            ? "bg-[#F7F4EE]/90 backdrop-blur-md shadow-md shadow-black/5 border-b border-[#202A3A]/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
          
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#C85A32]/40 rounded-sm z-10 py-1"
          >
            <Image
              src="/images/invidishlogo.svg"
              alt="INDIVESH Textile Printing & Design Logo"
              width={320}
              height={90}
              priority
              className="h-14 sm:h-18 md:h-20 lg:h-22 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center space-x-7 lg:space-x-9 transition-all duration-500 ease-in-out ${
              showFullNav
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-3 pointer-events-none"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-sans tracking-[0.18em] uppercase text-[#202A3A]/85 hover:text-[#C85A32] font-semibold transition-all duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C85A32] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div
            className={`hidden md:flex items-center space-x-3 transition-all duration-500 ease-in-out ${
              showFullNav
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-3 pointer-events-none"
            }`}
          >
            <GoogleTranslate id="google_translate_element_desktop" />
            <a
              href="#contact"
              className="group inline-flex items-center space-x-2 bg-[#202A3A] hover:bg-[#C85A32] text-[#F7F4EE] px-5 py-2.5 rounded-lg text-xs uppercase tracking-[0.2em] font-bold border border-[#D4AF37]/30 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-[#F7F4EE]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div
            className={`flex md:hidden items-center space-x-3 transition-opacity duration-300 ${
              showFullNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <a
              href="#contact"
              className="bg-[#C85A32] text-[#F7F4EE] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] font-bold rounded-md shadow-sm"
            >
              Start
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#202A3A] hover:text-[#C85A32] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#202A3A]/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-[#F7F4EE] shadow-2xl transition-transform duration-500 ease-out md:hidden flex flex-col justify-between p-6 sm:p-8 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-[#202A3A]/10 pb-6 mb-8">
            <Image
              src="/images/invidishlogo.svg"
              alt="INDIVESH Logo"
              width={240}
              height={70}
              className="h-14 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#202A3A] hover:text-[#C85A32]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Badge Callout & Translate */}
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center space-x-2 bg-[#EEE9DF] border border-[#C85A32]/30 px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#202A3A]">
                Artistry In Textile
              </span>
            </div>
            <GoogleTranslate id="google_translate_element_mobile" />
          </div>

          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-wide text-[#202A3A] hover:text-[#C85A32] transition-colors duration-200 border-b border-[#202A3A]/5 pb-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-[#202A3A]/10">
          <div className="text-xs font-sans space-y-1.5 text-[#202A3A]">
            <p className="text-[10px] uppercase font-bold text-[#C85A32] tracking-wider">Official Contact:</p>
            <a href="mailto:indiveshofficial@gmail.com" className="block font-semibold hover:text-[#C85A32]">
              indiveshofficial@gmail.com
            </a>
            <a href="https://wa.me/919079674714" target="_blank" rel="noopener noreferrer" className="block font-semibold hover:text-[#C85A32]">
              WhatsApp: +91 90796 74714
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center space-x-2 bg-[#202A3A] hover:bg-[#C85A32] text-[#F7F4EE] py-3.5 text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#F7F4EE]" />
          </a>
          <p className="text-[11px] text-center text-[#7A8B7B] tracking-wider uppercase font-semibold">
            Where every fabric becomes a canvas.
          </p>
        </div>
      </div>
    </>
  );
}
