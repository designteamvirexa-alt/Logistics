"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import Logo from "@/asset/logo-black.svg";

export default function Footer() {
  return (
    <footer className="bg-[#F2F2F2] text-black pt-16 pb-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
      >
        {/* LOGO + DESCRIPTION */}
        <div className="space-y-8 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Frisbi" width={140} height={40} />
          </div>

          <p className="text-black">
            We don’t just build apps, we create brand. Choosing us will be your
            best decision.
          </p>

          <div>
            <h4 className="font-semibold mb-2">Social Media</h4>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Link href="#">
                <div className="p-2 bg-white/10 rounded-full backdrop-blur-lg hover:bg-white/20 transition">
                  <FaYoutube className="w-5 h-5" />
                </div>
              </Link>
              <Link href="#">
                <div className="p-2 bg-white/10 rounded-full backdrop-blur-lg hover:bg-white/20 transition">
                  <FaInstagram className="w-5 h-5" />
                </div>
              </Link>
              <Link href="#">
                <div className="p-2 bg-white/10 rounded-full backdrop-blur-lg hover:bg-white/20 transition">
                  <FaFacebookF className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col items-center md:items-start">
          <div>
            <h4 className="font-semibold mb-5 text-lg">Book Pickup</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <Link href="/corporate" className="hover:text-blue-900">
                  • Corporate
                </Link>
              </li>
              <li>
                <Link href="/individual" className="hover:text-blue-900">
                  • Individual
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="font-semibold mb-5 text-lg">Services</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <Link href="/services/standard" className="hover:text-blue-900">
                  • Standard Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/express" className="hover:text-blue-900">
                  • Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/services/premium" className="hover:text-blue-900">
                  • Premium Transfer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COMPANY */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-5 text-lg">Company</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li>
              <Link href="/about" className="hover:text-blue-900">
                • About Us
              </Link>
            </li>
            <li>
              <Link href="/tracking" className="hover:text-blue-900">
                • Tracking
              </Link>
            </li>
            <li>
              <Link href="/rate-calculator" className="hover:text-blue-900">
                • Rate Calculator
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-blue-900">
                • Faqs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-900">
                • Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-5">Contact Us</h4>

          <p className="text-black text-sm leading-relaxed text-center md:text-left">
            Delhi-NCR | Bangalore | Hyderabad | Pune | Indore | Chandigarh |
            Jaipur | Bhubaneswar
          </p>

          <div className="flex items-center gap-2 mt-5">
            <Link
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="px-6 py-3 rounded-full font-semibold bg-primary text-white text-sm md:text-base hover:scale-105 transition-all"
            >
              Whatsapp
            </Link>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between text-sm text-gray-400 gap-4 items-center">
          <span className="text-[14px] text-black">
            Copyright © 2026 – All Right Reserved
          </span>

          <div className="flex items-center text-black gap-4 flex-wrap justify-center md:justify-start">
            <Link href="/terms-and-conditions">Terms and Condition</Link>
            <span>|</span>
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/shipping-policy">Shipping Policy</Link>
            <span>|</span>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
