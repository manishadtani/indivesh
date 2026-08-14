import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandPhilosophy from "./components/BrandPhilosophy";
import WhatWeCreate from "./components/WhatWeCreate";
import OurWorkGallery from "./components/OurWorkGallery";
import ProcessSection from "./components/ProcessSection";
import FabricCapabilities from "./components/FabricCapabilities";
import WhyIndivesh from "./components/WhyIndivesh";
import AboutSection from "./components/AboutSection";
import EnquirySection from "./components/EnquirySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1D1C1B] selection:bg-[#C85A32] selection:text-white">
      <Navbar />
      <Hero />
      <BrandPhilosophy />
      <WhatWeCreate />
      <OurWorkGallery />
      <ProcessSection />
      <FabricCapabilities />
      <WhyIndivesh />
      <AboutSection />
      <EnquirySection />
      <Footer />
    </main>
  );
}
