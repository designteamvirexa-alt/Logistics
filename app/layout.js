"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import FooterSection from "@/components/FooterSection";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Next.js shows not-found page at this internal route
  const is404 = pathname === "/not-found";

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {!is404 && <HeaderWrapper />}
        {children}
        <FooterSection />
          {/* TOASTER COMPONENT */}
      <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
