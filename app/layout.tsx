import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INDIVESH | Artistry in Textile Printing & Design",
  description: "Where every fabric becomes a canvas. Custom luxury textile printing and design house for fashion, home, and lifestyle applications.",
  keywords: ["textile printing", "fabric design", "saree printing", "fashion textiles", "home furnishings", "bespoke printing", "Indivesh"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#FAF7F2] text-[#1D1C1B] font-sans selection:bg-[#C85A32] selection:text-white flex flex-col overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

