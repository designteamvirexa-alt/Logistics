"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoWhite from "@/asset/frisbi_white.png";
import LogoBlack from "@/asset/logo-black.svg";

const servicesList = ["Standard Delivery", "Express Delivery", "Premium Delivery"];
const booklist = ["Corporate", "Individual"];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [hoverService, setHoverService] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [hoverBook, setHoverBook] = useState(false);
  const [scroll, setScroll] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header bg and text color logic
  const headerBg = scroll ? "bg-white shadow-md" : "bg-transparent";
  const textColor = isHome && !scroll ? "text-white" : "text-black";
  const mobileIconColor = isHome && !scroll ? "text-white" : "text-black";
  const logoSrc = isHome && !scroll ? LogoWhite : LogoBlack;

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold">
          <Image src={logoSrc} alt="Logo" width={140} height={40} className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-8 text-[15px] font-semibold transition-all duration-300 ${textColor}`}>
          {/* Book Dropdown */}
          <div className="relative" onMouseEnter={() => setHoverBook(true)} onMouseLeave={() => setHoverBook(false)}>
            <button className="flex items-center gap-1 transition hover:text-[#013efe]">
              Book <ChevronDown className="h-4 w-4" />
            </button>
            {hoverBook && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-0 w-52 bg-white shadow-lg rounded-lg py-3 z-50"
              >
                {booklist.map((item, index) => (
                  <Link
                    key={index}
                    href={`/book/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-2 text-black hover:bg-blue-50 hover:text-[#013efe] transition"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link href="/about" className="hover:text-[#013efe] transition">About Us</Link>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setHoverService(true)} onMouseLeave={() => setHoverService(false)}>
            <button className="flex items-center gap-1 transition hover:text-[#013efe]">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {hoverService && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-0 w-52 bg-white shadow-lg rounded-lg py-3 z-50"
              >
                {servicesList.map((item, index) => (
                  <Link
                    key={index}
                    href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-2 text-black hover:bg-blue-50 hover:text-[#013efe] transition"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link href="/rate-calculator" className="hover:text-[#013efe]">Rate Calculator</Link>
          <Link href="/faq" className="hover:text-[#013efe]">FAQs</Link>
          <Link href="/contact-us" className="hover:text-[#013efe]">Contact Us</Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center">
          <Link href="/track-your-package" className="btn-primary hover:scale-105 transition-all">Track Now</Link>
        </div>

        {/* Mobile Menu Button */}

        <div className="md:hidden flex gap-6">
         <Link href="/track-your-package" onClick={handleLinkClick} className="bg-blue-600 pl-3 pr-3 pt-3 pb-3 text-center rounded-4xl text-white text-sm hover:scale-105 transition-all">Track Now</Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-9 w-9 text-black transition" /> // Menu open -> show X icon
            ) : (
              <Menu className={`h-9 w-9 transition ${textColor}`} /> // Menu closed -> show Hamburger
            )}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white overflow-hidden shadow-lg h-full"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/" onClick={handleLinkClick} className="hover:text-[#013efe]">Home</Link>
            <Link href="/about" onClick={handleLinkClick} className="hover:text-[#013efe]">About Us</Link>

            {/* Mobile Services */}
            <button onClick={() => setServiceOpen(!serviceOpen)} className="flex justify-between items-center text-gray-800 font-medium">
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
            </button>
            {serviceOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                {servicesList.map((item, i) => (
                  <Link
                    key={i}
                    href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                    onClick={handleLinkClick}
                    className="text-gray-700 hover:text-[#013efe] transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/rate-calculator" onClick={handleLinkClick} className="hover:text-[#013efe]">Rate Calculator</Link>
            <Link href="/faq" onClick={handleLinkClick} className="hover:text-[#013efe]">FAQs</Link>
            <Link href="/contact-us" onClick={handleLinkClick} className="hover:text-[#013efe]">Contact Us</Link>

            <Link href="/track-your-package" onClick={handleLinkClick} className="btn-primary hidden md:block hover:scale-105 transition-all">Track Now</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
