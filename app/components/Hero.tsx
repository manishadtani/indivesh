"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ height: "100vh" }}
      className="relative w-full bg-[#FAF7F2] overflow-hidden flex items-center"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-img.png')" }}
      />

      {/* LEFT-ALIGNED BRANDING LOCKUP */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-start text-left space-y-2 max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.16em] sm:tracking-[0.18em] font-light text-[#1B243B] uppercase leading-none animate-hero-title">
            INDIVESH
          </h1>
          <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.32em] sm:tracking-[0.38em] uppercase font-medium text-[#1B243B] opacity-90 pl-0.5 sm:pl-1 animate-hero-subtitle">
            ARTISTRY IN TEXTILE
          </p>
        </div>
      </div>
    </section>
  );
}
