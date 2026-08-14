"use client";

import { useEffect, useRef } from "react";

export default function BrandPhilosophy() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      style={{
        position: "relative",
        zIndex: 20,
        background: "transparent",
        height: "60vh",       /* card ends at 50vh from section start, +10vh after = 60vh */
        minHeight: "60vh",
      }}
      className="w-full overflow-visible"
    >
      {/* Floating card — pulled 10vh up, animates in on scroll */}
      <div
        ref={cardRef}
        className="philosophy-card"
        style={{
          marginTop: "-10vh",
          width: "60%",
          height: "60vh",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          backgroundImage: "url('/images/hero-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          boxShadow: "0 20px 60px -10px rgba(11,19,43,0.22), 0 8px 24px -6px rgba(11,19,43,0.12)",
          border: "1px solid rgba(11,19,43,0.08)",
          overflow: "hidden",
        }}
      />

    </section>
  );
}
