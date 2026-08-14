import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandPhilosophy from "./components/BrandPhilosophy";
import WhatWeCreate from "./components/WhatWeCreate";
import OurWorkGallery from "./components/OurWorkGallery";
import ProcessSection from "./components/ProcessSection";
import FabricCapabilities from "./components/FabricCapabilities";
import WhyIndivesh from "./components/WhyIndivesh";
import AboutSection from "./components/AboutSection";
import PrintFloorGallery from "./components/PrintFloorGallery";
import EnquirySection from "./components/EnquirySection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import LeadPopup from "./components/LeadPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#202A3A] selection:bg-[#C85A32] selection:text-[#F7F4EE]">
      <LeadPopup />
      <Navbar />
      <Hero />
      <BrandPhilosophy />
      <WhatWeCreate />
      <ProcessSection />
      {/* <OurWorkGallery /> */}
      {/* <FabricCapabilities /> */}
      {/* <WhyIndivesh /> */}
      <AboutSection />
      <PrintFloorGallery />
      <EnquirySection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
