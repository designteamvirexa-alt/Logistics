'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, PhoneCall, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const servicesList = [
  "Air Freight",
  "Road Transportation",
  "Warehousing",
  "Custom Clearance",
  "Packaging Solutions",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [hoverService, setHoverService] = useState(false);

  const [scroll, setScroll] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 
        ${scroll ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className={`${scroll ? "text-black" : "text-white"} font-bold`}>
          Logo
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex space-x-8 text-sm font-medium transition-all duration-300 
            ${scroll ? "text-black" : "text-white"}
          `}
        >
          <Link
            href="/"
            className={`${scroll ? "hover:text-red-600" : "hover:text-red-400"} transition`}
          >
            Luggage
          </Link>

          <Link
            href="/about"
            className={`${scroll ? "hover:text-red-600" : "hover:text-red-400"} transition`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHoverService(true)}
            onMouseLeave={() => setHoverService(false)}
          >
            <button
              className={`flex items-center gap-1 transition 
                ${scroll ? "text-black hover:text-red-600" : "text-white hover:text-red-400"}
              `}
            >
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
                    href={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link
            href="/testimonials"
            className={`${scroll ? "hover:text-red-600" : "hover:text-red-400"} transition`}
          >
            Rate Calculator
          </Link>

          <Link
            href="/blog"
            className={`${scroll ? "hover:text-red-600" : "hover:text-red-400"} transition`}
          >
            FAQS
          </Link>

          <Link
            href="/contact"
            className={`${scroll ? "hover:text-red-600" : "hover:text-red-400"} transition`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-full text-sm font-semibold">
            Tracking Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu
              className={`h-6 w-6 transition 
                ${scroll ? "text-black" : "text-white"}
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white overflow-hidden shadow-lg"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <Link href="/about" className="hover:text-red-600">About Us</Link>

            {/* Mobile Service Dropdown */}
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex justify-between items-center text-gray-800 font-medium"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`}
              />
            </button>

            {serviceOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                {servicesList.map((item, i) => (
                  <Link
                    key={i}
                    href={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-gray-700 hover:text-red-600 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/testimonials" className="hover:text-red-600">Testimonials</Link>
            <Link href="/blog" className="hover:text-red-600">Blog</Link>
            <Link href="/contact" className="hover:text-red-600">Contact Us</Link>

            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full w-full">
              Tracking Now
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
